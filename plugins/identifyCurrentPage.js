function identifyCurrentPage () {
  if (document.body) {
    document.body.dataset.page = window.Glade.currentPage
  }
}

export default () => {
  identifyCurrentPage()

  window.addEventListener('grove-navigation', () => {
    identifyCurrentPage()
  })
}
