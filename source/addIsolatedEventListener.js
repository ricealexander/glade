/* eslint-disable brace-style */

import onNavigate from '../lib/onNavigate'

/**
 * A wrapper for addEventListener which self-destructs on page navigation
 * @param {Element}   element   Element to apply the window to; this may be `window`, `body`, or an `HTMLElement`
 * @param {string}    type      Event [type 🡥](https://developer.mozilla.org/en-US/docs/Web/Events) such as `click`, `mouseover`, and `scroll`
 * @param {Function}  callback  A function to execute on each page the user navigates to
 * @param {Object}    options   Event Listener [options 🡥](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options) such as `capture` or `once`
 */

function addIsolatedEventListener (element, type, callback, options) {
  // Create the event listener
  element.addEventListener(type, callback, options)

  // Clear the listener when the user navigates away
  onNavigate(
    () => { element.removeEventListener(type, callback, options) },
    { once: true }
  )
}


export default addIsolatedEventListener
