import onNavigate from '../lib/onNavigate'


function applyTheme (tags, theme) {
  const dataLayer = Glade.getDataLayer()

  if (tags.some(tag => dataLayer.tags.includes(tag))) {
    Glade.insertCSS(theme)
  }
}


export default (...parameters) => {
  applyTheme(...parameters)
  onNavigate(() => applyTheme(...parameters))
}
