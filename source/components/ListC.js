function formatTimestamp (stamp) {
  if (!stamp) return ''

  const date = new Date(stamp)

  const dateStamp = date.toLocaleDateString('en-US',
    {month: 'long', day: 'numeric', year: 'numeric'}
  )
  const timeStamp = date.toLocaleTimeString('en-US',
    { hour: 'numeric', minute: 'numeric' }
  )

  // TODO: textContent should return in format "2 hours ago"
  return `
  <div
    class="PromoXSmall-timestamp"
    data-timestamp="${Number(date)}"
    data-date="${dateStamp} at ${timeStamp}"
    data-promo-date="${dateStamp}"
    data-show-timestamp="true"
  >
    ${dateStamp}
  </div>`
}


function ListC (dataset = {}, listTitle = '') {
  const itemsMarkup = dataset
    .map(({title, link, image, timestamp, display}) => {
      if (display === false) return ''

      return `
      <li class="ListC-items-item">
        <ps-promo class="PromoXSmall" data-content-type="" ${!image ? 'data-no-media=""' : ''}>
          ${image
            ? `
            <div class="PromoXSmall-media">
              <a
                class="Link"
                aria-label="${title || ''}"
                ${link ? `href="${link}"` : ''}
              >
                <img
                  class="Image"
                  alt="${title || ''}"
                  data-src="${image}"
                  src="${image}"
                >
              </a>
            </div>`
            : ''
          }

          <div class="PromoXSmall-content">
            <div class="PromoXSmall-title">
              <a class="Link" ${link ? `href="${link}"` : ''}>${title || ''}</a>
            </div>
            <div class="PromoXSmall-byline">
              <div class="PromoXSmall-date">
                ${formatTimestamp(timestamp)}
              </div>
            </div>
          </div>
        </ps-promo>
      </li>`
    })
    .join('')

  return `
  <div class="ListC">
    <div class="ListC-header">
      ${listTitle
        ? `<div class="ListC-header-title">${listTitle}</div>`
        : '<div class="ListC-header-title" data-no-title=""></div>'
      }
    </div>

    <ul class="ListC-items">${itemsMarkup}</ul>
  </div>`
}


export default ListC
