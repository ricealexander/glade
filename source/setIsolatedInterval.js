/* eslint-disable brace-style */

import onNavigate from '../lib/onNavigate'


/**
 * A wrapper for setInterval which self-destructs on page navigation
 * @param   {Function}  callback      A callback function to execute at the specified interval
 * @param   {number}    milliseconds  The duration (in ms) of the interval
 * @returns {interval}                A reference to the interval so it can be manipulated
 */

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
