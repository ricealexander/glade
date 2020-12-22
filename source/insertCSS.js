/* eslint-disable unicorn/prefer-modern-dom-apis */

// insertCSS (markup [, shouldPersist])
// inserts a style tag with raw CSS

function insertCSS (markup, shouldPersist = false) {
  // Create the styles and append them
  const styles = document.createElement('style')
  styles.textContent = markup

  document.head.insertAdjacentElement('beforeend', styles)

  // Remove styles unless set to persist
  if (!shouldPersist) {
    window.addEventListener('grove-navigate', () => {
      styles.remove()
    }, { once: true })
  }
}

export default insertCSS
