/* eslint-disable brace-style */

import onNavigate from '../lib/onNavigate'


const DONATION_EXPIRATION    = 90            // time (days) the popup should be suppressed after visiting Donate page
const OPTOUT_EXPIRATION      = 7             // time (days) the popup should be suppressed after opting out
const LAUNCH_DELAY           = 3             // seconds to wait before launching the ask
const ANIMATION_DELAY        = (0.75) + 0.33 // duration (seconds) of the closing animation
const WOBBLE_INTERVAL        = 3.5 * 60      // seconds to wait before wobbling the ask
const WOBBLE_ANIMATION_DELAY = 2             // duration (seconds) of the wobble animation


const popupStyles = `
#nonintrusive-donate-ask {
  --ask-bottom-margin: 60px;

  background-color: #234093;
  background-color: rgba(35, 64, 147, 95%);
  background-image: linear-gradient(30deg, transparent, rgba(0, 0, 0, 33%));
  backdrop-filter: blur(1px);
  border: none;
  color: #ffffff;
  font-family: "acumin-pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* font-family: var(--bodyFont); */
  font-size: 10px;
  margin: 0;
  padding: 2.5em;
  position: fixed;
  top: auto; right: 0; bottom: 60px; left: 0;
  bottom: var(--ask-bottom-margin);
  z-index: 1000000;
  text-align: center;
}

#nonintrusive-donate-ask h2 {
  font-family: "utopia-std", Georgia, serif;
  /* font-family: var(--secHlFont); */
  font-size: 1.75em;
  font-weight: 100;
}

#nonintrusive-donate-ask p {
  font-size: 1.375em;
  line-height: 1.375;
  margin-bottom: 1.5em;
}

#nonintrusive-donate-ask a {
  color: inherit;
  text-decoration: none;
}

#nonintrusive-donate-ask button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
}

#nonintrusive-donate-ask svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}


/* Responsive Positioning
   The donate ask should appear in the right side rail,
   even as the page size and padding changes
*/

#nonintrusive-donate-ask {
  margin-left: 2em;
  margin-right: 2em;
  left: 0;
  width: fit-content;

  /* Hide donate ask by default */
  transform: translateX(120%);
}

/* Alignment is different on different types of pages and whether or not there is a side rail */
@media (min-width: 1024px) {
  #nonintrusive-donate-ask,
  .OneOffPage[data-columns="1"] #nonintrusive-donate-ask {
    margin-right: 40px;
  }

  html[data-columns="1"] #nonintrusive-donate-ask
  .OneOffPage[data-columns="2"] #nonintrusive-donate-ask {
    margin-right: 20px;
  }
}

@media (min-width: 1231px) {
  #nonintrusive-donate-ask,
  .OneOffPage[data-columns="1"] #nonintrusive-donate-ask {
    margin-right: calc(50% - 600px);
    transform: translateX(calc(100% + 260px));
    animation-duration: 1s;
  }

  html[data-columns="1"] #nonintrusive-donate-ask,
  .OneOffPage[data-columns="2"] #nonintrusive-donate-ask {
    /* ((100% width - 1200px container) / 2) + 20px padding */
    margin-right: calc(50% - 580px);
  }
}

#nonintrusive-donate-ask[data-state="open"],
.OneOffPage[data-columns="1"] #nonintrusive-donate-ask[data-state="open"] {
  transform: translateX(0%);
}

#nonintrusive-donate-ask.loading[data-state="open"] {
  animation: slide-in 0.75s forwards ease-out;
}

#nonintrusive-donate-ask[data-state="close"] {
  animation: slide-out 0.75s forwards ease-in;
}

@media (min-width: 768px) {
  #nonintrusive-donate-ask {
    --ask-bottom-margin: 20px;

    left: auto;
    width: 300px;
  }
}


/* Close Button */

#nonintrusive-donate-ask button[aria-label="Close"] {
  color: rgba(255, 255, 255, 50%);
  padding: 1.375em;
  position: absolute;
  stroke: currentColor;
  top: 0; right: 0px;
}

#nonintrusive-donate-ask button[aria-label="Close"]:hover {
  transform: rotate(90deg);
  transition: 0.3s transform;
}

#nonintrusive-donate-ask button[aria-label="Close"]:hover,
#nonintrusive-donate-ask button[aria-label="Close"]:focus,
#nonintrusive-donate-ask button[aria-label="Close"]:active {
  color: rgba(255, 255, 255, 100%);
  stroke-width: 2px;
}


/* Donate Button */

#nonintrusive-donate-ask .Button\\(white\\) {
  background: white;
  border-radius: 3px;
  color: #231f20;
  /* color: var(--primaryTextColor); */
  display: flex; /* "flex" aligns the SVG icon better than "block" */
  justify-content: center;
  font-size: 1.25em;
  font-weight: bold;
  padding: 0.625em 1em;
  text-transform: uppercase;
}

#nonintrusive-donate-ask .Button\\(white\\):hover,
#nonintrusive-donate-ask .Button\\(white\\):focus {
  animation: double-pulse 2s linear infinite;
}

#nonintrusive-donate-ask .Button\\(white\\) svg {
  margin-top: 0.1em;
  margin-right: 0.25em;
  position: relative;
}


/* Animations
   We must separate slide-in and slide-out animations or slide-out will fail
   This is because slide-in with reverse increments our animation-count, which is capped to 1
*/

@keyframes slide-in {
  0%   { transform: translateX(120%); }
  70%  { transform:  translateX(-5%); }
  100% { transform:   translateX(0%); }
}

@keyframes slide-out {
  0%   { transform:   translateX(0%); }
  30%  { transform:  translateX(-5%); }
  100% { transform: translateX(120%); }
}

@media (min-width: 1231px) {
  @keyframes slide-in {
    0%   { transform: translateX(calc(100% + 260px)); }
    75%  { transform:  translateX(-5%); }
    100% { transform:   translateX(0%); }
  }

  @keyframes slide-out {
    0%   { transform:   translateX(0%); }
    25%  { transform:  translateX(-5%); }
    100% { transform: translateX(calc(100% + 260px)); }
  }
}

@keyframes double-pulse {
  0%   { transform: scale(1);      }
  33%  { transform: scale(1.0375); }
  50%  { transform: scale(1.0250); }
  66%  { transform: scale(1.0625); }
  100% { transform: scale(1);      }
}

@keyframes wobble {
  0%, 100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% { transform: translateX(-2px)              rotate(-5deg);             }
  30% { transform: translateX(calc(2px / 2))     rotate(5deg);              }
  45% { transform: translateX(calc(-2px / 2))    rotate(calc(-5deg / 1.8)); }
  60% { transform: translateX(calc(2px / 3.3))   rotate(calc(5deg / 3));    }
  75% { transform: translateX(calc(-2px / 5.5))  rotate(calc(-5deg / 5));   }
}

#nonintrusive-donate-ask.ask-wobble {
  animation: wobble 1s ease infinite;
}

/* Cancel Animations if user device settings are set to reduced motion */

@media (prefers-reduced-motion) {
  /* Donate Ask "Slide-In", "Slide-Out" */
  #nonintrusive-donate-ask.loading[data-state="open"] {
    animation: none !important;
    transform: translateX(0%);
  }
  #nonintrusive-donate-ask[data-state="close"] {
    animation: none !important;
    transform: translateX(120%);
  }

  /* Close Button */
  #nonintrusive-donate-ask button[aria-label="Close"]:hover {
    transition: none !important;
  }

  /* Donate Button "Pulse", Popup "Wobble" */
  #nonintrusive-donate-ask .Button\\(white\\):hover,
  #nonintrusive-donate-ask .Button\\(white\\):focus,
  #nonintrusive-donate-ask.ask-wobble {
    animation: none !important;
  }
}
`


function buildNonintrusivePopup () {
  // Popup Container temporarily holds the popup
  const popupContainer = document.createElement('div')

  // aria-modal="false"  Donate Ask does not prevent the page from being interacted with
  // autofocus           Prevent accidental clicks by setting default focus to the entire ask, rather than the close or donate buttons
  // open                Dialogs must contain the open attribute to display

  popupContainer.innerHTML = `
  <dialog id="nonintrusive-donate-ask" class="loading" style="margin: 0" aria-modal="false" open>
    <button aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" role="img" aria-hidden="true">
        <desc>Close</desc>
        <path d="M6.336 7L0 .664.664 0 7 6.336 13.336 0 14 .664 7.664 7 14 13.336l-.664.664L7 7.664.664 14 0 13.336 6.336 7z"></path>
      </svg>
    </button>

    <h2>Were you expecting a paywall? Not&nbsp;our&nbsp;style.</h2>
    <p>We are on a mission to create a more informed public. To make that happen, we need you to do something extraordinary: donate. Your contribution will sustain trustworthy journalism, available to everyone. Can you help?</p>

    <a class="Button(white)" href="https://stlpr.org/popup-donate" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <desc>Pulsing Heart</desc>
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"></path>
      </svg>
      Yes, I’ll Donate
    </a>
  </dialog>
  `

  const popup = popupContainer.querySelector('#nonintrusive-donate-ask')

  if (!popup) {
    throw new ReferenceError(`The Nonintrusive Donate Ask ${popup} could not be found`)
  }

  const closeButton = popup.querySelector('button[aria-label="Close"]')
  const donateButton = popup.querySelector('a.Button\\(white\\)')


  // LAUNCH the popup
  setTimeout(() => {
    // 1. Set to open, launching the opening animation
    popup.dataset.state = 'open'

    // 2. Reset margin; this was set to 0 to avoid issues with positioning during the loading animation
    popup.style.margin = ''

    // 3. Remove loading class, cancelling animation on subsequent pages
    setTimeout(() => { popup.classList.remove('loading') }, ANIMATION_DELAY * 1000)
  }, LAUNCH_DELAY * 1000)


  // CLOSE the popup
  closeButton.addEventListener('click', () => {
    // 1. Set to closed, launching the closing animation
    popup.dataset.state = 'close'

    // 2. Store the date of the opt-out into localStorage
    window.localStorage.setItem('popupOptOutDate', Date.now())

    // 3. Close the popup using <dialog>.close() so it goes away in an accessible way
    setTimeout(() => { popup.close() }, ANIMATION_DELAY * 1000)
  })


  // INTERCEPT DONATE button click
  donateButton.addEventListener('click', () => {
    window.localStorage.setItem('popupDonateDate', Date.now())
  })


  // WOBBLE the popup after some time has passed
  const wobbleInterval = setInterval(() => {
    // 1. Check whether popup has closed and animation should stop
    if (!popup.open) {
      clearInterval(wobbleInterval)
      return
    }

    // 2. Apply wobble class and remove after the animation completes
    popup.classList.add('ask-wobble')
    setTimeout(() => { popup.classList.remove('ask-wobble') }, WOBBLE_ANIMATION_DELAY * 1000)
  }, WOBBLE_INTERVAL * 1000)


  // Vertical Positioning
  // affix to the bottom of the page but never overlap the footer
  function positionOnScroll () {
    if (!popup.open) return

    const footer = document.querySelector('footer.Page-footer')

    // Prefer scrollHeight over offsetHeight: on most content-types, both scrollHeight and offsetHeight
    // are the height of the document. On RadioShow and Podcast landing page types, offsetHeight = clientHeight = window.innerHeight
    let pageHeight   = document.body.scrollHeight
    let windowHeight = window.innerHeight
    let scrollDepth  = window.pageYOffset + windowHeight
    let askHeight    = popup.clientHeight
    let footerHeight = footer ? footer.clientHeight : 0

    let isOverlappingFooter  = (pageHeight - scrollDepth) < footerHeight
    let hasEnoughSpaceForAsk = (footerHeight + askHeight + 40) < windowHeight

    if (isOverlappingFooter && hasEnoughSpaceForAsk) {
      popup.style.bottom = `${(scrollDepth + footerHeight) - pageHeight + 20}px`
    }
    else {
      popup.style.bottom = 'var(--ask-bottom-margin)'
    }
  }

  window.addEventListener('scroll', positionOnScroll)
  onNavigate(() => window.addEventListener('scroll', positionOnScroll))

  return popup
}


/**
 * Launch a non-intrusive donate pop-up in the bottom corner of the page
 */

export default function loadDonatePopUp () {
  const _shouldDisplayPopup = /[&?]popup=true/.test(window.location.search)
  // checking MSStream prevents false positives with Internet Explorer 11
  const shouldBypassStorage = /[&?]reset=true/.test(window.location.search)

  // Read localStorage to see if user has opted out
  const popupOptOutDate = window.localStorage.getItem('popupOptOutDate')
  const popupDonateDate = window.localStorage.getItem('popupDonateDate')

  // 1. Check whether to suppress popup because user has visited Donate page from the popup
  if (popupDonateDate) {
    const daysPassed = (Date.now() - popupDonateDate) / (1000 * 60 * 60 * 24)

    // If donate period has expired, remove the donate record
    if (daysPassed >= DONATION_EXPIRATION || shouldBypassStorage) {
      window.localStorage.removeItem('popupDonateDate')
    }
    // If donate period has not expired, exit the function without launching popup.
    else {
      return
    }
  }

  // 2. Check whether to suppress popup because user has Closed the popup recently
  if (popupOptOutDate) {
    const daysPassed = (Date.now() - popupOptOutDate) / (1000 * 60 * 60 * 24)

    // If optout period has expired, remove the optout record
    if (daysPassed >= OPTOUT_EXPIRATION || shouldBypassStorage) {
      window.localStorage.removeItem('popupOptOutDate')
    }
    // If optout period has not expired, exit the function without launching popup.
    else {
      return
    }
  }


  // Build the Popup
  Glade.insertCSS(popupStyles, true)
  const popup = buildNonintrusivePopup()

  document.body.prepend(popup)
  onNavigate(() => { document.body.prepend(popup) })
}
