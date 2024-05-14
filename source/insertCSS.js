import onNavigate from '../lib/onNavigate'


const stylesheets = []

// insertCSS (markup [, shouldPersist])
// inserts a style tag with raw CSS

function insertCSS (markup, shouldPersist = false) {
  // Fail silently if styles already exist
  for (let stylesheet of stylesheets) {
    if (stylesheet.textContent == markup) return
  }

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
