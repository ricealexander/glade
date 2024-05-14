/**
 * A wrapper for the `grove-navigate` event
 * @param   {Function}  callback  A function to execute on each page the user navigates to
 * @param   {Object}    options   Event Listener [options 🡥](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options) such as `capture` or `once`
 * @returns {Function}            A callback function that removes the navigation event
 */

function pushNavigationEvent (callback, options = undefined) {
  // `grove-navigate` is checked every 100ms
  // wait to ensure that events intended for the next page do not fire on the current one
  setTimeout(() => {
    window.addEventListener('grove-navigate', callback, options)
  }, 100)

  // Keep a Navigation queue for troubleshooting purposes
  window.Glade.onNavigate.push(
    [callback.toString(), { callback, options }]
  )

  // Return a destructor function
  // We must pass options because destructor will fail if options.capture doesn't match
  return () => {
    window.removeEventListener('grove-navigate', callback, options)
  }
}


export default pushNavigationEvent
