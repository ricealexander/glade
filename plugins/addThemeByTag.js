import onNavigate from '../lib/onNavigate'


function applyTheme (tags, theme) {
  const dataLayer = Glade.getMetadata()

  if (tags.some(tag => dataLayer.tags.includes(tag))) {
    Glade.insertCSS(theme)
  }
}


export default (...parameters) => {
  applyTheme()
  onNavigate(() => applyTheme(...parameters))
}
