/**
 * Replace Grove site search with Google Custom Search form
 */

export default function googleCustomSearch () {
  const prefersGroveSearch = /[&?]search=grove/.test(window.location.search)
  const searchForms = document.querySelectorAll('form.PH-search-form')

  if (searchForms.length === 0) {
    throw new Error('Could not locate site search forms')
  }

  if (!prefersGroveSearch) {
    for (let form of searchForms) form.action = '/search'
  }
}
