// compare a page using some criteria
// String criteria: "/we-live-here/awards"
// RegExp criteria: /\/we-live-here\/awards/
// Function criteria: (page) => page.startsWith('/we-live-here/awards')

function matchesCriteria (page, criteria) {
  if (typeof criteria === 'string') {
    return page === criteria
  }

  if (criteria instanceof RegExp) {
    return criteria.test(page)
  }

  if (typeof criteria === 'function') {
    return criteria(page)
  }

  throw new Error(`Criteria must be a String, Regular Expression, or Function. Instead got ${typeof criteria}, ${criteria}`)
}


function pageMatches (...criterias) {
  const currentPage = window.location.pathname
  return criterias.some(criteria => matchesCriteria(currentPage, criteria))
}


export default pageMatches
