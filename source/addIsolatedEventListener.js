// addIsolatedEventListener(element, type, callback)
// a wrapper for addEventListener which self-destructs on page navigation

function addIsolatedEventListener (element, type, callback) {
  const currentPage = () => window.location.pathname
  const startingPage = currentPage()

  function isolatedCallback (event) {
    var hasChangedPages = (startingPage !== currentPage())

    if (hasChangedPages) {
      element.removeEventListener(type, isolatedCallback)
      return
    }
    callback(event)
  }

  element.addEventListener(type, isolatedCallback)
}


export default addIsolatedEventListener
