import onNavigate from '../lib/onNavigate'


const themeCSS = `
.stlpr-logo .logo-bar {
  stroke-width: 0.5px;
  stroke: currentColor;
}

.stlpr-logo .logo-bar-1 { color: #d62021; fill: #d62021 !important; }
.stlpr-logo .logo-bar-2 { color: #faa21b; fill: #faa21b !important; }
.stlpr-logo .logo-bar-3 { color: #006b71; fill: #006b71 !important; }
.stlpr-logo .logo-bar-4 { color: #234093; fill: #234093 !important; }
`


function applyTheme () {
  if (!brightspotDataLayer) {
    throw new ReferenceError('Could not read Brightspot Data Layer.')
  }

  if (!brightspotDataLayer.keywords || !brightspotDataLayer.keywords.trim()) {
    throw new ReferenceError (`Could not read Tags from Data Layer, "${brightspotDataLayer.keywords}".`)
  }

  const tags = brightspotDataLayer.keywords.trim().split(',')

  if (tags.includes('LGBT') || tags.includes('LGBTQ')) {
    Glade.insertCSS(themeCSS)
  }
}


export default () => {
  applyTheme()
  onNavigate(() => applyTheme())
}
