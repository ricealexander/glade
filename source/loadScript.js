/* eslint-disable unicorn/prefer-modern-dom-apis */
// loadScript (source)
// load a given script if not already present on the page

function loadScript (source, attributes = {}) {
  // Find all external scripts in the page
  const scripts = [...document.querySelectorAll('script')]
  const externalScripts = scripts.filter(script => script.src)

  // Exit silently if script is already present
  if (externalScripts.includes(source)) return

  // Create a new script and inject it into the DOM
  const newScript = document.createElement('script')
  newScript.src = source

  if (attributes.async) newScript.async = attributes.async
  if (attributes.defer) newScript.defer = attributes.defer

  const lastScript = scripts[scripts.length - 1]
  lastScript.insertAdjacentElement('afterend', newScript)
}

export default loadScript
