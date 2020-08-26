function identifyCurrentPage () {
  if (document.body) {
    document.body.dataset.page = window.STLPR.currentPage
  }
}

export default () => {
  window.STLPR.onNavigation.push(identifyCurrentPage)
  identifyCurrentPage()
}
