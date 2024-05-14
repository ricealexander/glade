import onNavigate      from '../lib/onNavigate'
import applyAttributes from '../lib/applyAttributes'


/**
 * Load an external JavaScript file if not already present on the page
 * @param   {Object}   attributes     Attributes to apply to a `script` element. `src` element is required
 * @param   {Boolean}  shouldPersist  Should script remain as the user navigates to another page? ⚠️ Removing does not cancel intervals/eventListeners
 * @returns {Element}                 A reference to the external script so it can be manipulated
 */

function insertScript (attributes, shouldPersist = false) {
  if (!attributes || !attributes.src) {
    throw new ReferenceError('Script src is required. Use syntax Glade.insertScript({src: "PATH"})')
  }

  // Find all external scripts on the page
  const scripts    = [...document.querySelectorAll('script[src]')]
  const scriptURLs = scripts.map(script => script.scr)

  if (scriptURLs.includes(attributes.src)) return

  // Create a new script and inject it into the DOM
  const newScript = document.createElement('script')
  applyAttributes(newScript, attributes)

  const lastScript = scripts[scripts.length - 1]
  lastScript.after(newScript)

  // Remove script if not set to persist
  if (!shouldPersist) {
    onNavigate(() => newScript.remove(), { once: true })
  }

  // Return an HTML Reference to the script
  return newScript
}


export default insertScript
