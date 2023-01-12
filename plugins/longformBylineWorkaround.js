import onNavigate from '../lib/onNavigate'

// getAuthorsFromText is used to parse authors from a paragraph

// The authors paragraph must:
// A) Be the first paragraph of the copy that isn't empty
// B) Have no formatting except for links
// C) Start with text "By "
// D) Contain a comma-separated list of author names

// NOTE! A false match will occur for paragraphs that start with
// the word "By ", such as "By the time Luisa was 18,"

function getAuthorsFromText () {
  const articleBody = document.querySelector('div[class*="Page-articleBody"]')
  let bylineParagraph = null

  for (let child of articleBody.children) {
    // We're looking for a paragraph
    if (child.nodeName !== 'P') continue

    // But skip empty paragraphs
    let textContent = child.textContent.trim()
    if (!textContent) continue

    if (textContent.startsWith('By ')) bylineParagraph = child
    break
  }

  if (!bylineParagraph) return []

  // Because we checked textContent but operate on innerHTML,
  // there's a chance that HTML formatting might interfere with parsing.
  if (!bylineParagraph.innerHTML.startsWith('By ')) {
    console.error('Byline paragraph has a textContent starting with "By ", but innerHTML does not. Cancelling attempt to parse authors.')
    return []
  }

  let innerHTML = bylineParagraph.innerHTML
    .replace(/<!--.*?-->/g, '')  // Strip HTML comments .*? performs a non-greedy match
    .slice(3)                     // Lob off "By "

  // Lob off period if sentence is punctuated.
  if (innerHTML.endsWith('.')) innerHTML = innerHTML.slice(0, -1)

  let authorTexts = innerHTML
    .split(/\s*,\s*/)             // Split on comma, with optional spaces

  // Return array of author/link pairs
  // [ [author1, link1], [author2, link2], [author3, link3] ]

  let linkPattern = /<a[^>]+href="([^"]+)"[^>]+>([^<]+)<\/a>/
  let authors = []

  for (let text of authorTexts) {
    if (linkPattern.test(text)) {
      let [, authorLink, authorName] = text.match(linkPattern)
      authors.push([authorName, authorLink])
      continue
    }

    if (/[<>]/.test(text)) {
      console.error('Found unexpected HTML Markup in Author bylines. Cancelling author search')
      return []
    }

    authors.push([text])
  }

  bylineParagraph.remove()
  return authors
}



function formatAuthors (authors = []) {
  let authorCount = authors.length

  if (authorCount == 0) {
    throw new RangeError(`Expected an array of authors to be provided. Instead got ${authors}`)
  }

  let [firstAuthor, ...subsequentAuthors] = authors
  let [author1Name, author1Link] = firstAuthor

  let firstAuthorMarkup = ''

  if (author1Link) {
    firstAuthorMarkup = `
    By <a aria-label="${author1Name}" href="${author1Link}" class="Link">${author1Name}</a>`
  }
  else {
    firstAuthorMarkup = `<span>${author1Name}</span>`
  }

  if (authorCount > 1) firstAuthorMarkup += ','


  let subsequentAuthorsMarkup = subsequentAuthors
    .map(([authorName, authorLink]) => {
      if (!authorLink) return `<span><span>${authorName}</span></span>`
      return `<span><a href="${authorLink}" class="Link">${authorName}</a></span>`
    })

  return `
  <div class="LongFormPage-authors">
    <div class="LongFormPage-authorName">
      <span class="LongFormPage-authorBy">St. Louis Public Radio |
      ${firstAuthorMarkup}
      </span>
    </div>
    ${authorCount > 1 ? `
    <div class="LongFormPage-contributors">
      ${subsequentAuthorsMarkup.join(',&nbsp;\n      ')}
    </div>
  `: ''}
  </div>`
}



function longformBylineWorkaround () {
  // Only apply to LongForm Stories
  let metadata = Glade.getMetadata()
  if (!metadata || metadata.pageType !== 'longform-news-story') return

  let authors = getAuthorsFromText()

  if (authors.length > 0) {
    // Replace the Authors container with the formatted authors
    let authorsContainer = document.querySelector('.LongFormPage-authors')
    authorsContainer.insertAdjacentHTML('afterend', formatAuthors(authors))
    authorsContainer.remove()
  }
}



export default () => {
  longformBylineWorkaround()
  onNavigate(() => longformBylineWorkaround())
}
