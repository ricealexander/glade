import onNavigate from '../lib/onNavigate'


function identifyCurrentPage () {
  if (!document.body) {
    throw new ReferenceError('Could not locate document.body')
  }

  document.body.dataset.page = window.location.pathname
}


export default () => {
  identifyCurrentPage()
  onNavigate(() => identifyCurrentPage())
}
