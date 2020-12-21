/* eslint-disable unicorn/prefer-modern-dom-apis */

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

  // Fail loudly if script was not provided
  if (!attributes.href) {
    throw new Error('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})')
  }
  // Fail silently if script is already present
  if (stylesheets.includes(attributes.href)) {
    return
  }

  // Create a new stylesheet and inject it into the DOM
  var sheet = document.createElement('link')
  addAttributes(sheet, attributes)
  sheet.rel = 'stylesheet'

  var lastLink = links[links.length - 1]
  lastLink.insertAdjacentElement('afterend', sheet)

  // Remove script if set not to persist
  if (!shouldPersist) {
    window.addEventListener('grove-navigation', () => {
      sheet.remove()
    }, { once: true })
  }
}

export default insertStylesheet
