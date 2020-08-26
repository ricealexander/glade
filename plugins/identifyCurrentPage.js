function identifyCurrentPage () {
  if (document.body) {
    document.body.dataset.page = window.Glade.currentPage
  }
}

export default () => {
  window.Glade.onNavigation.push(identifyCurrentPage)
  identifyCurrentPage()
}
