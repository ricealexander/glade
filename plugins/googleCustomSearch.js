export default () => {
  const prefersGroveSearch = /[&?]search=grove/.test(window.location.search)
  const searchForms = document.querySelectorAll('form.PH-search-form')

  if (searchForms.length === 0) {
    console.error('Glade: could not locate Search Form')
    return
  }

  if (!prefersGroveSearch) {
    for (let form of searchForms) form.action = '/search'
  }
}
