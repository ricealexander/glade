function loadStylesheet (href) {
  // Find all stylesheets in the page
  var links = [...document.querySelectorAll('link')]
  var stylesheets = links.filter(link => link.rel === 'stylesheet')

  // Exit silently if stylesheet is already present
  if (stylesheets.includes(href)) return false

  // Create a new stylesheet and inject it into the DOM
  var element = document.createElement('link')
  element.rel = 'stylesheet'
  element.href = href

  var lastLink = links[links.length - 1]
  lastLink.after(element)
}

export default loadStylesheet
