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

function correctPodcastByline () {
  const headline = document.querySelector('.PodcastEpisodePage-headline, .RadioShowEpisodePage-headline')

  const isPodcastOrRadioShow = !!headline
  if (!isPodcastOrRadioShow) return

  // Get meta-data from the page
  const metaData = window.Glade.getMetadata()
  if (!metaData) return

  const { authors, station } = metaData

  const publishedDate = new Date(removeZFromDate(metaData.publishedDate))

  // Adjust Timestamp for Grove
  // All Grove times are 1 hour off, not related to Daylight Savings
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

export default () => {
  correctPodcastByline()

  window.addEventListener('grove-navigation', () => {
    correctPodcastByline()
  })
}
