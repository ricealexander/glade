function addStyles (markup, options = {}) {
  // Create the styles and append them
  const styles = document.createElement('style')
  styles.prepend(markup)
  document.head.append(styles)

  // Remove styles unless set to persist
  if (!options.persist) {
    window.addEventListener('grove-navigate', () => {
      styles.remove()
    }, { once: true })
  }
}

export default addStyles
