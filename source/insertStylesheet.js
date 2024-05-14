import onNavigate      from '../lib/onNavigate'
import applyAttributes from '../lib/applyAttributes'


/**
 * Load an external stylesheet if not already present on the page
 * @param   {Object}   attributes     Attributes to apply to a `style` element. `href` element is required
 * @param   {Boolean}  shouldPersist  Should stylesheet remain as the user navigates to another page?
 * @returns {Element}                 A reference to the external stylesheet so it can be manipulated
 */

function insertStylesheet (attributes, shouldPersist = false) {
  if (!attributes || !attributes.href) {
    throw new ReferenceError('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})')
  }

  // Find all stylesheets in the page
  const stylesheets    = [...document.querySelectorAll('link[rel=stylesheet]')]
  const stylesheetURLs = stylesheets.map(stylesheet => stylesheet.href)

  if (stylesheetURLs.includes(attributes.href)) return

  // Create a new stylesheet and inject it into the DOM
  const sheet = document.createElement('link')
  sheet.rel = 'stylesheet'
  applyAttributes(sheet, attributes)

  const lastLink = stylesheets[stylesheets.length - 1]
  lastLink.after(sheet)

  // Remove script if set not to persist
  if (!shouldPersist) {
    onNavigate(() => sheet.remove(), { once: true })
  }

  // Return an HTML Reference
  return sheet
}


export default insertStylesheet
