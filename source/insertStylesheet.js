import onNavigate from '../lib/onNavigate'
import applyAttributes from '../lib/applyAttributes'


// insertStylesheet (attributes [, shouldPersist])
// load a given stylesheet if not already present on the page

function insertStylesheet (attributes = {}, shouldPersist = false) {
  // Find all stylesheets in the page
  var links = [...document.querySelectorAll('link')]
  var stylesheets = links.filter(link => link.rel === 'stylesheet')
  const stylesheetURLs = stylesheets.map(stylesheet => stylesheet.href)

  if (!attributes.href) {
    throw new Error('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})')
  }

  if (stylesheetURLs.includes(attributes.href)) return

  // Create a new stylesheet and inject it into the DOM
  var sheet = document.createElement('link')
  applyAttributes(sheet, attributes)
  sheet.rel = 'stylesheet'

  var lastLink = links[links.length - 1]
  lastLink.after(sheet)

  // Remove script if set not to persist
  if (!shouldPersist) {
    onNavigate(() => sheet.remove(), { once: true })
  }

  // Pass an HTML Reference to the stylesheet
  return sheet
}


export default insertStylesheet
