import onNavigate from '../lib/onNavigate'


// We'll need to detect whether a transcript is present.
// Look for a RichText Module with a Subhead containing the word "Transcript"

function findTranscripts () {
  let transcripts = []
  let richTextModules = document.querySelectorAll('.RichTextModule')

  for (let module of richTextModules) {
    let subhead = module.querySelector('h2')
    if (!subhead) continue

    let title = subhead.textContent.toLowerCase()
    if (title.includes('transcript')) {
      transcripts.push(module)
    }
  }

  return transcripts
}


function formatTranscripts () {
  let transcriptModules = findTranscripts()

  for (let module of transcriptModules) {
    let subhead = module.querySelector('h2')

    // Scrape the content from the module
    let heading = subhead.innerHTML
    subhead.remove()
    let body = module.innerHTML

    // Create the new Transcript widget
    let transcriptMarkup = `
    <section>
      <h2 id="transcript">${heading}</h2>

      <details class="collapseable-transcript">
        <summary tabindex="0" role="button">Show/Hide Transcript</summary>
        ${body}
      </details>
    </section>`

    module.insertAdjacentHTML('afterend', transcriptMarkup)
    module.remove()
  }
}


export default () => {
  formatTranscripts()
  onNavigate(() => formatTranscripts())
}
