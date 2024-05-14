function addAttributes (element, attributes = {}) {
  for (const [attribute, value] of Object.entries(attributes)) {
    // support Boolean Attributes
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(attribute, '')
    }
    else {
      element.setAttribute(attribute, value)
    }
  }
}


export default addAttributes
