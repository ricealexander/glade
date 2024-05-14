import onNavigate from '../lib/onNavigate'
import applyAttributes from '../lib/applyAttributes'


// insertScript (attributes [, shouldPersist])
// load a given script if not already present on the page

// WARNING: insertScript has a "shouldPersist" property
//   removing a script does not cancel intervals/event Listeners set by it
//   shouldPersist is a property because insertScript fails if the script is
//   already present.

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
