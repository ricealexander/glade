import onNavigate from '../lib/onNavigate'


const stylesheets = []

/**
 * Insert a style tag with raw CSS into the document head
 * @param   {string}   rules          CSS rules as they would appear in a stylesheet
 * @param   {boolean}  shouldPersist  Should styles remain as the user navigates to another page?
 * @returns {Element}                 A reference to the loaded CSS so it can be manipulated
 */

function insertCSS (rules, shouldPersist = false) {
  // Fail silently if styles already exist
  for (let stylesheet of stylesheets) {
    if (stylesheet.textContent == rules) return
  }

  // Create and append style element
  const styles = document.createElement('style')
  styles.textContent = rules
  document.head.insertAdjacentElement('beforeend', styles)

  // Remove styles unless set to persist
  if (!shouldPersist) {
    onNavigate(() => styles.remove(), { once: true })
  }

  // Return an HTML Reference to the loaded CSS
  return styles
}


export default insertCSS
