/* eslint-disable brace-style */

import onNavigate from '../lib/onNavigate'


// addIsolatedEventListener(element, type, callback)
// a wrapper for addEventListener which self-destructs on page navigation

function addIsolatedEventListener (element, type, callback, options) {
  // Create the event listener
  element.addEventListener(type, callback, options)

  // Clear the listener when the user navigates away
  onNavigate(
    () => { element.removeEventListener(type, callback, options) },
    { once: true }
  )
}


export default addIsolatedEventListener
