import onNavigate from '../lib/onNavigate'

/**
 * Apply CSS to story pages that contain specified tags
 * @param {string[]} tags   An array of story tags the theme should appear on
 * @param {string}   rules  CSS rules as they would appear in a stylesheet
 */

function applyTheme (tags, rules) {
  const dataLayer = Glade.getDataLayer()

  if (tags.some(tag => dataLayer.tags.includes(tag))) {
    Glade.insertCSS(rules)
  }
}


/**
 * Apply CSS to story pages that contain specified tags
 * @param  {(string|string[])[]} parameters
 */

export default function applyThemeByTag (...parameters) {
  applyTheme(...parameters)
  onNavigate(() => applyTheme(...parameters))
}
