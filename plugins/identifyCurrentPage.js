import onNavigate from '../lib/onNavigate'


function storePageData () {
  const html = document.documentElement
  html.dataset.page = window.location.pathname

  let sidebar = document.querySelector('aside[class$="-aside-content"], div[class$="-aside-content"], div[class^=TwoColumnContainer]')
  if (sidebar) html.dataset.columns = 2
  else         html.dataset.columns = 1
}


/**
 * Encode page path and other metadata into the HTML for targeting with CSS
 */

export default function identifyCurrentPage () {
  storePageData()
  onNavigate(() => storePageData())
}
