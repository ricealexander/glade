const splitString  = string => string ? string.split(/,\b/) : []


function getMetadata () {
  if (!brightspotDataLayer) {
    throw new ReferenceError('Could not read Brightspot Data Layer.')
  }

  if (!brightspotDataLayer.keywords || !brightspotDataLayer.keywords.trim()) {
    throw new ReferenceError (`Could not read Tags from Data Layer, "${brightspotDataLayer.keywords}".`)
  }

  const metadata = {
    storyTitle:        brightspotDataLayer.storyTitle   || document.querySelector('h1')?.textContent || document.title,
    pageType:          brightspotDataLayer.pageType     || '',
    program:           brightspotDataLayer.program      || '',
    timezone:          brightspotDataLayer.timezone     || 'US/Central',
    hasInlineAudio:    !!(brightspotDataLayer.inlineAudio || 0),
    publishedDate:     brightspotDataLayer.publishedDate ? new Date(brightspotDataLayer.publishedDate) : '',

    authors:           splitString(brightspotDataLayer.author   || ''),
    categories:        splitString(brightspotDataLayer.category || ''),
    tags:              splitString(brightspotDataLayer.keywords || ''),

    brightspotStoryID: brightspotDataLayer.bspStoryId   || null,
    NPRStoryID:        brightspotDataLayer.nprStoryId   || null,
    stationID:         brightspotDataLayer.stationOrgId || null,
    station:           brightspotDataLayer.station      || 'St. Louis Public Radio',
    siteName:          brightspotDataLayer.siteName     || 'STLPR',
    isNPRStation:      brightspotDataLayer.nprCmsSite   || false,

    // storyOrgId: displays 0 on story pages
    // storyTheme: duplicate of pageType
    // wordcount: displays 0 on story pages
  }

  return metadata
}


export default getMetadata
