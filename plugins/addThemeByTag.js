import onNavigate from '../lib/onNavigate'


function applyTheme (tags, theme) {
  if (!brightspotDataLayer) {
    throw new ReferenceError('Could not read Brightspot Data Layer.')
  }

  if (!brightspotDataLayer.keywords || !brightspotDataLayer.keywords.trim()) {
    throw new ReferenceError (`Could not read Tags from Data Layer, "${brightspotDataLayer.keywords}".`)
  }

  const storyTags = brightspotDataLayer.keywords.trim().split(',')

  if (tags.any(tag => storyTags.includes(tag))) {
    Glade.insertCSS(theme)
  }
}


export default (...parameters) => {
  applyTheme()
  onNavigate(() => applyTheme(...parameters))
}
