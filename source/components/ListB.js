function ListB (dataset = {}, listTitle = '') {
  const firstItem = dataset[0]

  const itemsMarkup = dataset
    .map(({title, link, display}) => {
      if (display === false) return ''

      return `
      <li class="ListB-items-item">
        <a
          class="PromoLink"
          aria-label="${title || ''}"
          ${link ? `href="${link}"` : ''}
        >
          ${title || ''}
        </a>
      </li>`
    })
    .join('')

  return `
  <div class="ListB">
    <div class="ListB-header">
      ${listTitle
        ? `<div class="ListB-header-title">${listTitle}</div>`
        : '<div class="ListB-header-title" data-no-title=""></div>'
      }
    </div>

    <div class="ListB-items-first">
      <ps-promo class="PromoB" data-content-type="">
        <div class="PromoB-content">
          <div class="PromoB-media">
            ${(firstItem && firstItem.image)
              ? `
              <a class="List" ${firstItem.link ? `href="${firstItem.link}"` : ''}>
                <img
                  class="Image"
                  data-src="${firstItem.image}"
                  alt="${firstItem.title || ''}"
                  src="${firstItem.image}"
                >
              </a>`
              : ''
            }
          </div>
        </div>
      </ps-promo>
    </div>

    <ol class="ListB-items">${itemsMarkup}</ol>
  </div>`
}

export default ListB
