function identifyCurrentPage () {
  if (document.body) {
    document.body.dataset.page = Glade.currentPage
  }
}

export default () => {
  identifyCurrentPage()

  window.addEventListener('grove-navigate', () => {
    identifyCurrentPage()
  })
}
