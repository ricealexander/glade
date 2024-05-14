/* eslint-disable brace-style */

import onNavigate from '../lib/onNavigate'


// setIsolatedInterval(callback, milliseconds)
// a wrapper for setInterval which self-destructs on page navigation

function setIsolatedInterval (callback, milliseconds) {
  // Create the interval
  const interval = setInterval(callback, milliseconds)

  // Clear interval when the user navigates
  onNavigate(
    () => { clearInterval(interval) },
    { once: true }
  )

  // Return a reference to the interval
  return interval
}


export default setIsolatedInterval
