/* eslint-disable max-len */

// Grove stores metadata in a meta tag with encoded JSON.
//
//   Field          Type     Default  Description
//   _____________  _______  _______  ___________
//   author         string   null     List of authors, separated by `, `
//   bspStoryId     string   null     Brightspot Story ID
//   category *     string   ""       List of category, separated by `,` or `, `
//   inlineAudio    number   0        (0 or 1)  A flag for whether audio is present in post body
//   keywords       string   null     List of keywords, separated by `,`
//   nprCmsSite     boolean  false    A flag indicating whether post exists in the NPR Stories API
//   nprStoryId     string   null     NPR Story ID
//   pageType       string            Grove Content Type (may be in kebab case or camel case)
//   program        string   null     Radio Show or Podcast associated with the page
//   publishedDate  string   null     A timestampYYYY-MM-DD[T]HH:MM:SS[Z]
//   siteName       string   null     The name of the Site
//   station        string   null     The name of the Radio Station
//   stationOrgId   string   null     Station Organization ID
//   storyOrgId     string   null     Story ID? Always 0?
//   storyTheme     string   null     A repeat of pageType that only shows up on stories?
//   storyTitle     string   null     Story Title
//   timezone       string   null     Time zone
//   wordcount      number   0        Presumably the number of words in a post. Always displays 0

// * category does not escape commas within categories
//   if a category contains commas in its name, they are not be escaped
//   this may affect authors or keywords as well.


// Most of this meta data has questionable usefullness
// We might prefer a structure like this:
//
//   Field              Type           Default  Description
//   ____________       _____________  _______  ___________
//   authors            array[string]  []       Post authors
//   brightspotStoryID  string         null     Brightspot Story ID
//   categories         array[string]  []       Post categories
//   hasInlineAudio     boolean        false    A flag indicating whether audio is present in Post body
//   keywords           array[string]  []       Post keywords
//   nprStoryID         string         null     NPR Story ID
//   pageType           string         null     Grove Content Type
//   program            string         null     Radio Show or Podcast associated with the Post
//   publishedDate      string         null     A timestampYYYY-MM-DD[T]HH:MM:SS[Z]
//   station            string         null     The name of the Radio Station
//   title              string         ""       Story Title or Page Title


// Splits a string into an array
// Grove metadata inconsistently delimits on ", " and ","
// the argument passed may be a string or null
function splitString (string) {
  if (!string) return []
  return string.split(/,\s?/)
}


function getMetadata () {
  const metadata = {
    authors: [],
    brightspotStoryID: null,
    categories: [],
    hasInlineAudio: false,
    keywords: [],
    nprStoryID: null,
    pageType: null,
    program: null,
    publishedDate: null,
    station: '',
    title: '',
  }

  const metaTag = document.querySelector('meta[name="brightspot-dataLayer"]')

  if (metaTag && metaTag.content) {
    const rawData = JSON.parse(metaTag.content)

    metadata.authors           = splitString(rawData.author)
    metadata.brightspotStoryID = rawData.bspStoryId
    metadata.categories        = splitString(rawData.categories)
    metadata.hasInlineAudio    = !!rawData.inlineAudio
    metadata.keywords          = splitString(rawData.keywords)
    metadata.nprStoryID        = rawData.nprStoryId
    metadata.pageType          = rawData.pageType   // TODO: pageType can be kebab-case or camelCase. Make it consistent
    metadata.program           = rawData.program
    metadata.publishedDate     = rawData.publishedDate
    metadata.station           = rawData.station

    const headline = document.querySelector('h1')
    metadata.title = rawData.storyTitle || headline?.textContent || document.title
  }

  return metadata
}


export default getMetadata
