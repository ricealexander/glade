import onNavigate from '../lib/onNavigate'


function identifyCurrentPage () {
  const html = document.documentElement
  html.dataset.page = window.location.pathname

  let sidebar = document.querySelector('aside[class$="-aside-content"], div[class$="-aside-content"], div[class^=TwoColumnContainer]')
  if (sidebar) html.dataset.columns = 2
  else         html.dataset.columns = 1
}


export default () => {
  identifyCurrentPage()
  onNavigate(() => identifyCurrentPage())
}
