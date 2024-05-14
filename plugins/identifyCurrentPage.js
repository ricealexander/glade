import onNavigate from '../lib/onNavigate'


function identifyCurrentPage () {
  const html = document.documentElement
  html.dataset.page = window.location.pathname
}


export default () => {
  identifyCurrentPage()
  onNavigate(() => identifyCurrentPage())
}
