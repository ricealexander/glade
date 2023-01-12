import onNavigate from '../lib/onNavigate'

function identifyCurrentPage () {
  if (document.body) {
    document.body.dataset.page = window.location.pathname
  }
}

export default () => {
  identifyCurrentPage()
  onNavigate(() => identifyCurrentPage())
}
