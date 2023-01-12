import onNavigate from '../lib/onNavigate'

// insertStylesheet (attributes [, shouldPersist])
// load a given stylesheet if not already present on the page

function addAttributes (element, attributes = {}) {
  for (const [attribute, value] of Object.entries(attributes)) {
    // support Boolean Attributes
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(attribute, '')
    }

    else {
      element.setAttribute(attribute, value)
    }
  }
}

function insertStylesheet (attributes = {}, shouldPersist = false) {
  // Find all stylesheets in the page
  var links = [...document.querySelectorAll('link')]
  var stylesheets = links.filter(link => link.rel === 'stylesheet')

  if (!attributes.href) {
    throw new Error('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})')
  }

  if (stylesheets.includes(attributes.href)) {
    throw new Error('Refused to Load Stylesheet: already present in the page source')
  }

  // Create a new stylesheet and inject it into the DOM
  var sheet = document.createElement('link')
  addAttributes(sheet, attributes)
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
