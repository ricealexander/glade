const splitString  = string => string ? string.split(/,\b/) : []


function getMetadata () {
  const dataLayerElement = document.querySelector('meta[name="brightspot-dataLayer"]')

  if (!dataLayerElement || !dataLayerElement.content) {
    throw new ReferenceError('Failed to locate "brightspot-dataLayer" meta tag.')
  }

  const dataLayer = JSON.parse(dataLayerElement.content)

  dataLayer.authors        = splitString(dataLayer.author   || '')
  dataLayer.categories     = splitString(dataLayer.category || '')
  dataLayer.tags           = splitString(dataLayer.keywords || '')

  dataLayer.hasInlineAudio = !!(dataLayer.inlineAudio || 0)
  dataLayer.publishedDate  = dataLayer.publishedDate ? new Date(dataLayer.publishedDate) : ''
  dataLayer.storyTitle     = dataLayer.storyTitle || document.querySelector('h1')?.textContent || document.title

  dataLayer.siteName       = dataLayer.siteName   || 'STLPR'
  dataLayer.station        = dataLayer.station    || 'St. Louis Public Radio'
  dataLayer.timezone       = dataLayer.timezone   || 'US/Central'

  return dataLayer
}

export default getMetadata
