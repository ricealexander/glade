const splitString  = string => string ? string.split(/,\b/) : []


function getMetadata () {
  const dataLayerElement = document.querySelector('meta[name="brightspot-dataLayer"]')

  if (!dataLayerElement || !dataLayerElement.content) {
    throw new ReferenceError('Failed to locate "brightspot-dataLayer" meta tag.')
  }

  const dataLayer = JSON.parse(dataLayerElement.content)

  dataLayer.authors    = splitString(dataLayer.author   || '')
  dataLayer.categories = splitString(dataLayer.category || '')
  dataLayer.tags       = splitString(dataLayer.keywords || '')

  return dataLayer
}

export default getMetadata
