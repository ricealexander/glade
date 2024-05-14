const splitString       = string => string ? string.trim().split(/,\b/) : []
const splitStringWSpace = string => string ? string.trim().split(/,\s/) : []


function getDataLayer () {
  const dataLayerElement = document.querySelector('meta[name="brightspot-dataLayer"]')

  if (!dataLayerElement || !dataLayerElement.content) {
    throw new ReferenceError('Failed to locate "brightspot-dataLayer" meta tag.')
  }

  const dataLayer = JSON.parse(dataLayerElement.content)

  dataLayer.authors    = splitStringWSpace(dataLayer.author || '')
  dataLayer.categories = splitString(dataLayer.category || '')
  dataLayer.tags       = splitString(dataLayer.keywords || '')

  return dataLayer
}

export default getDataLayer
