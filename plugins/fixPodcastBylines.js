const formatDate = date => date
  .toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const formatTime = date => date
  .toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

const removeZFromDate = datestamp => {
  if (datestamp.endsWith('Z')) return datestamp.slice(0, -1)
  return datestamp
}

// Arrow function in IIFE should result in a non-fatal error on IE
function correctPodcastByline () {
  const headline = document.querySelector('.PodcastEpisodePage-headline, .RadioShowEpisodePage-headline')

  const isPodcastOrRadioShow = !!headline
  if (!isPodcastOrRadioShow) return

  // Get meta-data from the page
  const metaData = window.Glade.getMetadata()
  if (!metaData) return

  const authors = metaData.author.split(',')
  const station = metaData.station
  const publishedDate = new Date(removeZFromDate(metaData.publishedDate))

  // Adjust for Daylight Saving Time
  // This fix will hopefully be obsolete before November 1, 2020
  publishedDate.setHours(publishedDate.getHours() - 1)

  const markup = `
    <div class="ArticlePage-contentInfo">
      <div class="ArticlePage-byline">
        <div class="ArticlePage-authors">
          <div class="ArticlePage-authorName">
            ${station}
            ${authors.length > 0 ? '| By' : ''}
            ${authors.map(author => `<span class="ArticlePage-authorBy">${author}</span>`).join(', ')}
          </div>
        </div>
        <div class="ArticlePage-timestamp">
          <div class="ArticlePage-datePublished">
            Published ${formatDate(publishedDate)} at ${formatTime(publishedDate)} CDT
          </div>
        </div>
      </div>
    </div>`

  headline.insertAdjacentHTML('afterend', markup)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  window.Glade.onNavigation.push(correctPodcastByline)
  correctPodcastByline()
}
