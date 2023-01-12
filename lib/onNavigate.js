// A wrapper for window.addEventListener('grove-navigate', ...)

// The grove-navigate event is checked every 100 ms.
// Because of this, depending on how the page loads, that 100 ms gap can cause
// an event to be fired on the current page that was intended to run on the next

function pushNavigationEvent (callback, properties = undefined) {
  setTimeout(() => {
    window.addEventListener('grove-navigate', callback, properties)
  }, 100)
}

export default pushNavigationEvent
