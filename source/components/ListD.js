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
    class="PromoB-timestamp"
    data-timestamp="${Number(date)}"
    data-date="${dateStamp} at ${timeStamp}"
    data-promo-date="${dateStamp}"
    data-show-timestamp="true"
  >
    ${dateStamp}
  </div>`
}


function ListD (dataset, listTitle) {
  const itemsMarkup = dataset
    .map(({title, link, image, description, audio, authors, timestamp, display}) => {
      if (display === false) return ''

      return `
      <li class="ListD-items-item">
        <ps-promo class="PromoB" data-content-type="" data-image-align="top">
          <div class="PromoB-content" ${!image ? 'data-no-media=""' : ''}>
            ${image
              ? `<div class="PromoB-media">
                   <a
                     class="Link"
                     aria-label="${title || ''}"
                     ${link ? `href="${link}"` : ''}
                   >
                     <img
                       class="Image"
                       alt="${title}"
                       data-src="${image}"
                       src="${image}"
                     >
                   </a>
                 </div>`
              : ''
            }

            <div class="PromoB-title">
              <a class="Link" ${link ? `href="${link}"` : ''}>
                ${title || ''}
              </a>
            </div>

            <div class="PromoB-byline">
              <div class="PromoB-authorName">
                ${(authors || []).join(', ')}
              </div>
              ${authors ? '<span class="PromoB-byline-divider">,</span>' : ''}
              <div class="PromoB-date">
                ${formatTimestamp(timestamp)}
              </div>
            </div>

            ${description
              ? `<div class="PromoB-description">${description}</div>`
              : ''
            }
          </div>

          <div class="PromoB-audio-label">
          ${audio
            ? `<ps-stream
                 data-stream-program-name="${title || ''}"
                 on-demand=""
                 small=""
                 external=""
               >
                 <ps-stream-url data-stream-url="${audio}"></ps-stream-url>

                 <button class="StreamPill">
                   <span class="StreamPill-iconWrapper">
                     <svg class="StreamPill-icon">
                       <use xlink:href="#play-icon"></use>
                     </svg>
                     <svg class="StreamPill-iconPause">
                       <use xlink:href="#pause-icon"></use>
                     </svg>
                   </span>

                   <span class="StreamPill-text">
                    <span class="StreamPill-duration">Listen</span>
                   </span>
                 </button>
               </ps-stream>`
            : ''
          }
          </div>
        </ps-promo>
      </li>`
    })
    .join('')

  return `
  <div class="ListD">
    <div class="ListD-header">
      ${listTitle
        ? `<div class="ListD-header-title">${listTitle}</div>`
        : '<div class="ListD-header-title" data-no-title=""></div>'
      }
    </div>

    <ul class="ListD-items">${itemsMarkup}</ul>
  </div>`
}


export default ListD
