// Criteria
// string:    '/we-live-here/awards'                           TRUE if Page URL exactly matches
// RegExp:    /\/we-live-here\/awards/                         TRUE if RegExp.test(string) is TRUE
// Function:  page => page.startsWith('/we-live-here/awards')  TRUE if function returns a non-falsey value


/**
 * Test a string using some criterion
 * @param   {string}                  string     String to perfrom comparisons against
 * @param   {string|RegExp|Function}  criterion  Criteria to test against the string; may be a `"string"`, `/RegExp/`, or `() => Function`
 * @returns {Boolean}
 */

function matchesCriterion (string, criterion) {
  if (typeof criterion === 'string') {
    return string === criterion
  }

  if (criterion instanceof RegExp) {
    return criterion.test(string)
  }

  if (typeof criterion === 'function') {
    return criterion(string)
  }

  throw new Error(`Criterion must be a String, Regular Expression, or Function. Instead got ${typeof criterion}, ${criterion}`)
}


/**
 * Test a page using some criteria
 * @param   {...(string|RegExp|Function)}  criteria  At least one criterion to compare against the page URL; may be a `"string"`, `/RegExp/`, or `() => Function`
 * @returns {Boolean}
 */

function pageMatches (...criteria) {
  const currentPage = window.location.pathname
  return criteria.some(criterion => matchesCriterion(currentPage, criterion))
}


export default pageMatches
