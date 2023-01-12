// setIsolatedInterval(callback, milliseconds)
// a wrapper for setInterval which self-destructs on page navigation

function setIsolatedInterval (callback, milliseconds) {
  const currentPage = () => window.location.pathname

  const startingPage = currentPage()
  let interval

  function isolatedCallback () {
    var hasChangedPages = (startingPage !== currentPage())

    if (hasChangedPages) {
      clearInterval(interval)
      return
    }
    callback()
  }

  interval = setInterval(isolatedCallback, milliseconds)
  return interval
}


export default setIsolatedInterval
