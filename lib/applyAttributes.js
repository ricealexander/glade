/**
 * Apply a list of HTML attributes to an `Element`
 * @param {Element}  element     An `HTMLElement` to apply attributes to
 * @param {Object}   attributes  Attributes to apply to the `Element`; use `true` for Boolean attributes
 */

function applyAttributes (element, attributes = {}) {
  for (const [attribute, value] of Object.entries(attributes)) {
    // Support Boolean Attributes (input { checked: true } 🡒 <input checked>)
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(attribute, '')
    }
    else {
      element.setAttribute(attribute, value)
    }
  }
}


export default applyAttributes
