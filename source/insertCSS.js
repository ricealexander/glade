import onNavigate from '../lib/onNavigate'

// insertCSS (markup [, shouldPersist])
// inserts a style tag with raw CSS

function insertCSS (markup, shouldPersist = false) {
  // Create the styles and append them
  const styles = document.createElement('style')
  styles.textContent = markup

  document.head.insertAdjacentElement('beforeend', styles)

  // Remove styles unless set to persist
  if (!shouldPersist) {
    onNavigate(() => styles.remove(), { once: true })
  }

  // Pass an HTML Reference to the loaded CSS
  return styles
}

export default insertCSS
