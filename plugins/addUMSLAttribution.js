import onNavigate from '../lib/onNavigate'


const UMSLLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 296.4">
  <path d="M648 255.8v38.9c-1 .3-120 .4-122.3.1V1.3h58.9v254.4c2 .2 3.9.1 5.8.1H648zM445.3 0l1.5.2c5.4.3 10.7.5 16 1 7.4.7 14.7 1.8 21.5 4.6a31.7 31.7 0 0 1 7.2 4 26.3 26.3 0 0 1 9.3 13.6 61.3 61.3 0 0 1 2.3 12.3c.7 6.9.8 13.7.8 20.6v45h-59v-1.9-57.1a25 25 0 0 0-.4-4.5 7.4 7.4 0 0 0-6.4-6.3 17.3 17.3 0 0 0-7.3.1 6.3 6.3 0 0 0-5 5.3 27.6 27.6 0 0 0-.6 5.1v60.5a44.7 44.7 0 0 0 .4 5.6 7.6 7.6 0 0 0 3 5 24.4 24.4 0 0 0 4.4 3q6.4 3 12.9 5.7l30.2 12.5a64.1 64.1 0 0 1 15.5 8.6 30.4 30.4 0 0 1 11.6 20.4 81.8 81.8 0 0 1 .7 11.5V241c0 5.7-.3 11.3-.6 17a66.2 66.2 0 0 1-2.2 14.2 26.6 26.6 0 0 1-17 18.7 69.3 69.3 0 0 1-15.3 3.7 217.7 217.7 0 0 1-30 1.8c-7.6 0-15.1 0-22.6-.4a107.7 107.7 0 0 1-25-3.4 57 57 0 0 1-5.6-1.9 26.5 26.5 0 0 1-16.6-18.6 67.3 67.3 0 0 1-2-11.5c-.6-6.2-.7-12.4-.7-18.7v-71h58.8l.1 1.7v81.2a32.2 32.2 0 0 0 .4 5.4c.7 3.8 2.6 5.7 6.3 6.2a20.3 20.3 0 0 0 5.7 0c4.2-.6 6.5-3.3 7-7.6a28.2 28.2 0 0 0 .3-3.5v-78c0-1.3 0-2.6-.2-4a8.3 8.3 0 0 0-3.5-6.4 32.5 32.5 0 0 0-5.3-3.2c-6-2.7-12-5.2-18.1-7.8l-24.3-10a64.5 64.5 0 0 1-13.1-7 47.4 47.4 0 0 1-5.5-4.6c-4.7-4.5-7-10.2-8-16.5a76.7 76.7 0 0 1-.7-11V54c0-6 .1-12 .7-18a56.8 56.8 0 0 1 3-14.8 25.3 25.3 0 0 1 13-14.3 52.3 52.3 0 0 1 13.5-4.2 134 134 0 0 1 18.6-2l7.8-.4 1.7-.3zM297.8 117.7H292l-25 177.1h-28l-25-177.1h-5.7c-.3 1 .6 31.4 1 44.3.6 14.7.9 29.5 1.4 44.2l1.3 44.3 1.3 44.1c-1 .4-48.3.6-51.7.2-.3-1-.3-291.7 0-293.5h65.1l24.1 134h4.3l24.6-134h65.2c.2 1 .3 292 0 293.5H293l2.5-88.5 2.3-88.6zM0 1.2h59a8.3 8.3 0 0 1 .1 1v251.1a31.5 31.5 0 0 0 .4 5.4c.7 4 2.8 6 6.7 6.7a20.2 20.2 0 0 0 5.8 0c3.9-.6 6-3 6.6-7.2a31.8 31.8 0 0 0 .2-4V1.3h59.5v241.2c0 6-.1 12-.7 18.1a60.9 60.9 0 0 1-2.5 13 26.3 26.3 0 0 1-14.8 16.5 57 57 0 0 1-13.4 4 151.5 151.5 0 0 1-20.3 2.1c-9.5.4-19 .4-28.5.2a189.4 189.4 0 0 1-23.2-1.7 66.8 66.8 0 0 1-15.9-4 25.6 25.6 0 0 1-15.7-17 67.7 67.7 0 0 1-1.6-6.6c-1-5-1-10-1.4-15l-.3-1.7V1.2z"></path>
</svg>`


const menuAttributionHTML = `
<div class="hamburger-menu-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${UMSLLogo}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`


const footerAttributionHTML = `
<div class="footer-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${UMSLLogo}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`


const attributionCSS = `
.hamburger-menu-UMSL-attribution {
  display: flex;
  margin-top: 2rem;
  padding: 0 1rem;
  font-size: 1.25rem;
}

.hamburger-menu-UMSL-attribution svg {
  height: auto;
  width: 100%;
}

.hamburger-menu-UMSL-attribution small {
  font-size: 1em;
  margin: 0 0 1rem 1rem;
  position: relative;
  top: -2px;
}

.hamburger-menu-UMSL-attribution a {
  color: currentColor;
}

/* Just the link around the logo */
.hamburger-menu-UMSL-attribution > a {
  display: block;
  width: 100px;
}

.hamburger-menu-UMSL-attribution a:hover {
  color: var(--linkHoverColor);
}

.hamburger-menu-UMSL-attribution small a {
  text-decoration: underline;
}

footer .Page-footer-columns {
  flex-wrap: wrap;
}

.footer-UMSL-attribution {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
}

@media (min-width: 768px) {
  .footer-UMSL-attribution {
    margin: 2rem 0 1rem 4rem;
  }
}

.footer-UMSL-attribution svg {
  position: relative;
  top: 3px;
  height: 3rem;
}

.footer-UMSL-attribution small {
  max-width: 46ch;
  display: block;
  margin-left: 1rem;
}

.footer-UMSL-attribution a {
  display: inline;
  opacity: 1;
}

.footer-UMSL-attribution a:hover {
  opacity: 0.8;
}

.footer-UMSL-attribution small a {
  text-decoration: underline;
}

.footer-UMSL-attribution small a:hover {
  text-decoration: none;
  opacity: 1;
}
`


function addUMSLNavAttribution () {
  const menuContainer = document.querySelector('.PH-ham-m-wrapper')

  if (!menuContainer) {
    console.error('Could not find menu container for UMSL Attribution.')
    return
  }

  menuContainer.insertAdjacentHTML('beforeend', menuAttributionHTML)
}


function addUMSLFooterAttribution () {
  const footerNavigation = document.querySelector('footer .Page-footer-columns')

  if (!footerNavigation) {
    console.error('Could not find footer navigation for UMSL Attribution.')
    return
  }

  footerNavigation.insertAdjacentHTML('beforeend', footerAttributionHTML)
}


/**
 * Add UMSL logo & credit line to the collapsible navigation menu and footer
 */

export default function addUMSLAttribution () {
  Glade.insertCSS(attributionCSS, true) // true: CSS should persist on navigation

  addUMSLNavAttribution()
  addUMSLFooterAttribution()

  // Unlike the nav, which persists in Grove, the footer refreshes each page load
  onNavigate(() => addUMSLFooterAttribution())
}
