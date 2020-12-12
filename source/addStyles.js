function addStyles (markup, options) {
  // Create the styles and append them
  const styles = document.createElement('style')
  styles.prepend(markup)
  document.head.append(styles)

  // Remove styles upon navigation
  if (options?.temporary === true) {
    let functionIndex = window.Glade.onNavigation.length

    window.Glade.onNavigation.push(() => {
      // remove styles and then remove this function
      styles.remove()
      window.Glade.onNavigation.splice(functionIndex, 1)
    })
  }
}

export default addStyles
