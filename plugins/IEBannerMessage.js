import onNavigate from '../lib/onNavigate'


function displayAlert (message) {
  if (!message) return

  var markup = `
  <div class="AlertBar">
    <div class="AlertBar-message">${message}</div>
  </div>`

  // Find a place to put the alert
  // Attempt to insert it above an existing alert
  const existingAlert = document.querySelector('.AlertBar')

  if (existingAlert) {
    existingAlert.insertAdjacentHTML('beforebegin', markup)
    return
  }

  // Attempt to insert it after .Page-above
  const pageAboveBlock = document.querySelector('.Page-above')

  if (pageAboveBlock) {
    pageAboveBlock.insertAdjacentHTML('afterend', markup)
    return
  }

  // Attempt to insert it after header
  const header = document.querySelector('ps-header')

  if (header) {
    header.insertAdjacentHTML('afterend', markup)
  }

  throw new Error('No locations to place an alert bar were found.')
}


export default message => {
  const userAgent = window.navigator.userAgent || ''
  const isInternetExplorer = userAgent.toLowerCase().includes('trident')

  if (isInternetExplorer) {
    displayAlert(message)
    onNavigate(() => displayAlert(message))
  }
}
