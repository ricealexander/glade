function addStyles (markup) {
  // Create the styles and append them
  const styles = document.createElement('style')
  styles.prepend(markup)
  document.head.append(styles)

  // Remove stylesheet upon navigation
  function removeStyles () {
    styles.remove()
  }

  let functionIndex = window.Glade.onNavigation.length

  window.Glade.onNavigation.push(() => {
    // remove styles and then remove this function
    removeStyles()
    window.Glade.onNavigation.splice(functionIndex, 1)
  })
}

export default addStyles
