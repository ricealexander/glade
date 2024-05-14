import onNavigate from '../lib/onNavigate'
import addAttributes from '../lib/addAttributes'


// insertScript (attributes [, shouldPersist])
// load a given script if not already present on the page

// WARNING: insertScript has a "shouldPersist" property
//   removing a script does not cancel intervals/event Listeners set by it
//   shouldPersist is a property because insertScript fails if the script is
//   already present.

function insertScript (attributes = {}, shouldPersist = false) {
  // Find all external scripts on the page
  const scripts = [...document.querySelectorAll('script')]
  const externalScripts = scripts.filter(script => script.src)

  // Fail loudly if script was not provided
  if (!attributes.src) {
    throw new Error('Script src is required. Use syntax Glade.insertScript({src: "PATH"})')
  }
  // Fail silently if script is already present
  if (externalScripts.includes(attributes.src)) {
    return
  }

  // Create a new script and inject it into the DOM
  const newScript = document.createElement('script')
  addAttributes(newScript, attributes)

  const lastScript = scripts[scripts.length - 1]
  lastScript.after(newScript)

  // Remove script if set not to persist
  // WARNING! removing the script does not cancel intervals/eventListeners
  if (!shouldPersist) {
    onNavigate(() => newScript.remove(), { once: true })
  }

  // Pass an HTML Reference to the script
  return newScript
}


export default insertScript
