// A wrapper for window.addEventListener('grove-navigate', ...)

// The grove-navigate event is checked every 100 ms.
// Because of this, depending on how the page loads, that 100 ms gap can cause
// an event to be fired on the current page that was intended to run on the next

function pushNavigationEvent (callback, options = undefined) {
  setTimeout(() => {
    window.addEventListener('grove-navigate', callback, options)
  }, 100)

  // Keep a Navigation queue for troubleshooting purposes
  window.Glade.onNavigate.push(
    [callback.toString(), { callback, options }]
  )

  // Return a destructor function
  // Pass options because destructor will fail if options.capture doesn't match
  return () => {
    window.removeEventListener('grove-navigate', callback, options)
  }
}


export default pushNavigationEvent
