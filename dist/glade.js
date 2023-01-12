(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _source = _interopRequireDefault(require("./source"));
var _plugins = _interopRequireDefault(require("./plugins"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
window.Glade = _source.default;

// Run Plugins
document.addEventListener('DOMContentLoaded', () => {
  for (const plugin of _plugins.default) {
    const isEnabled = plugin.enabled;
    const pluginFunction = plugin.fn;
    const args = plugin.args || [];
    try {
      if (isEnabled) pluginFunction(...args);
    } catch (error) {
      console.error(error);
    }
  }
});

},{"./plugins":10,"./source":18}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// A wrapper for window.addEventListener('grove-navigate', ...)

// The grove-navigate event is checked every 100 ms.
// Because of this, depending on how the page loads, that 100 ms gap can cause
// an event to be fired on the current page that was intended to run on the next

function pushNavigationEvent(callback) {
  let properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  setTimeout(() => {
    window.addEventListener('grove-navigate', callback, properties);
  }, 100);
}
var _default = pushNavigationEvent;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function displayAlert(message) {
  if (!message) return;
  var markup = `
  <div class="AlertBar">
    <div class="AlertBar-message">${message}</div>
  </div>`;

  // Find a place to put the alert
  // Attempt to insert it above an existing alert
  const existingAlert = document.querySelector('.AlertBar');
  if (existingAlert) {
    existingAlert.insertAdjacentHTML('beforebegin', markup);
    return;
  }

  // Attempt to insert it after .Page-above
  const pageAboveBlock = document.querySelector('.Page-above');
  if (pageAboveBlock) {
    pageAboveBlock.insertAdjacentHTML('afterend', markup);
    return;
  }

  // Attempt to insert it after header
  const header = document.querySelector('ps-header');
  if (header) {
    header.insertAdjacentHTML('afterend', markup);
  }
  throw new Error('No locations to place an alert bar were found.');
}
var _default = message => {
  const userAgent = window.navigator.userAgent || '';
  const isInternetExplorer = userAgent.toLowerCase().includes('trident');
  if (isInternetExplorer) {
    displayAlert(message);
    (0, _onNavigate.default)(() => displayAlert(message));
  }
};
exports.default = _default;

},{"../lib/onNavigate":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function applyTheme(tags, theme) {
  if (!brightspotDataLayer) {
    throw new ReferenceError('Could not read Brightspot Data Layer.');
  }
  if (!brightspotDataLayer.keywords || !brightspotDataLayer.keywords.trim()) {
    throw new ReferenceError(`Could not read Tags from Data Layer, "${brightspotDataLayer.keywords}".`);
  }
  const storyTags = brightspotDataLayer.keywords.trim().split(',');
  if (tags.any(tag => storyTags.includes(tag))) {
    Glade.insertCSS(theme);
  }
}
var _default = function _default() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  applyTheme();
  (0, _onNavigate.default)(() => applyTheme(...parameters));
};
exports.default = _default;

},{"../lib/onNavigate":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable max-len */

const UMSLLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 296.4">
  <path d="M648 255.8v38.9c-1 .3-120 .4-122.3.1V1.3h58.9v254.4c2 .2 3.9.1 5.8.1H648zM445.3 0l1.5.2c5.4.3 10.7.5 16 1 7.4.7 14.7 1.8 21.5 4.6a31.7 31.7 0 0 1 7.2 4 26.3 26.3 0 0 1 9.3 13.6 61.3 61.3 0 0 1 2.3 12.3c.7 6.9.8 13.7.8 20.6v45h-59v-1.9-57.1a25 25 0 0 0-.4-4.5 7.4 7.4 0 0 0-6.4-6.3 17.3 17.3 0 0 0-7.3.1 6.3 6.3 0 0 0-5 5.3 27.6 27.6 0 0 0-.6 5.1v60.5a44.7 44.7 0 0 0 .4 5.6 7.6 7.6 0 0 0 3 5 24.4 24.4 0 0 0 4.4 3q6.4 3 12.9 5.7l30.2 12.5a64.1 64.1 0 0 1 15.5 8.6 30.4 30.4 0 0 1 11.6 20.4 81.8 81.8 0 0 1 .7 11.5V241c0 5.7-.3 11.3-.6 17a66.2 66.2 0 0 1-2.2 14.2 26.6 26.6 0 0 1-17 18.7 69.3 69.3 0 0 1-15.3 3.7 217.7 217.7 0 0 1-30 1.8c-7.6 0-15.1 0-22.6-.4a107.7 107.7 0 0 1-25-3.4 57 57 0 0 1-5.6-1.9 26.5 26.5 0 0 1-16.6-18.6 67.3 67.3 0 0 1-2-11.5c-.6-6.2-.7-12.4-.7-18.7v-71h58.8l.1 1.7v81.2a32.2 32.2 0 0 0 .4 5.4c.7 3.8 2.6 5.7 6.3 6.2a20.3 20.3 0 0 0 5.7 0c4.2-.6 6.5-3.3 7-7.6a28.2 28.2 0 0 0 .3-3.5v-78c0-1.3 0-2.6-.2-4a8.3 8.3 0 0 0-3.5-6.4 32.5 32.5 0 0 0-5.3-3.2c-6-2.7-12-5.2-18.1-7.8l-24.3-10a64.5 64.5 0 0 1-13.1-7 47.4 47.4 0 0 1-5.5-4.6c-4.7-4.5-7-10.2-8-16.5a76.7 76.7 0 0 1-.7-11V54c0-6 .1-12 .7-18a56.8 56.8 0 0 1 3-14.8 25.3 25.3 0 0 1 13-14.3 52.3 52.3 0 0 1 13.5-4.2 134 134 0 0 1 18.6-2l7.8-.4 1.7-.3zM297.8 117.7H292l-25 177.1h-28l-25-177.1h-5.7c-.3 1 .6 31.4 1 44.3.6 14.7.9 29.5 1.4 44.2l1.3 44.3 1.3 44.1c-1 .4-48.3.6-51.7.2-.3-1-.3-291.7 0-293.5h65.1l24.1 134h4.3l24.6-134h65.2c.2 1 .3 292 0 293.5H293l2.5-88.5 2.3-88.6zM0 1.2h59a8.3 8.3 0 0 1 .1 1v251.1a31.5 31.5 0 0 0 .4 5.4c.7 4 2.8 6 6.7 6.7a20.2 20.2 0 0 0 5.8 0c3.9-.6 6-3 6.6-7.2a31.8 31.8 0 0 0 .2-4V1.3h59.5v241.2c0 6-.1 12-.7 18.1a60.9 60.9 0 0 1-2.5 13 26.3 26.3 0 0 1-14.8 16.5 57 57 0 0 1-13.4 4 151.5 151.5 0 0 1-20.3 2.1c-9.5.4-19 .4-28.5.2a189.4 189.4 0 0 1-23.2-1.7 66.8 66.8 0 0 1-15.9-4 25.6 25.6 0 0 1-15.7-17 67.7 67.7 0 0 1-1.6-6.6c-1-5-1-10-1.4-15l-.3-1.7V1.2z"></path>
</svg>`;
const menuAttributionHTML = `
<div class="hamburger-menu-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${UMSLLogo}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`;
const footerAttributionHTML = `
<div class="footer-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${UMSLLogo}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`;
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

.footer-UMSL-attribution {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
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
`;
function addUMSLFooterAttribution() {
  const footerNavigation = document.querySelector('footer nav.FooterNavigation, footer nav.SectionNavigation');
  if (!footerNavigation) {
    throw new Error('Could not find footer navigation for UMSL Attribution.');
  }
  footerNavigation.insertAdjacentHTML('beforeend', footerAttributionHTML);
}
var _default = () => {
  Glade.insertCSS(attributionCSS, true); // true: CSS should persist on navigation

  // Add the hamburger-menu attribution
  const menuContainer = document.querySelector('.PH-ham-m-wrapper');
  if (!menuContainer) {
    throw new Error('Could not find menu container for UMSL Attribution.');
  }
  menuContainer.insertAdjacentHTML('beforeend', menuAttributionHTML);

  // Add the footer attirubtion
  addUMSLFooterAttribution();
  // Unlike the nav, which persists in Grove, the footer refreshes each page load
  (0, _onNavigate.default)(() => addUMSLFooterAttribution());
};
exports.default = _default;

},{"../lib/onNavigate":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const stlprLogo = `
<svg
  class="stlpr-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 90 35.47"
  preserveAspectRatio="xMinYMin meet"
>
  <defs>
    <linearGradient id="gradient-fill" x2="0" y2="1">
      <stop offset="0%" stop-color="#237bbd" />
      <stop offset="50%" stop-color="#234093" />
    </linearGradient>
  </defs>
  <g fill="url(#gradient-fill)">
    <polygon class="logo-bar logo-bar-1" points="16.44 10.64 16.44 17.74 16.44 24.83 17.62 24.83 17.62 17.74 17.62 10.64 16.44 10.64" />
    <polygon class="logo-bar logo-bar-2" points="36.16 7.1 36.16 17.73 36.16 28.38 37.35 28.38 37.35 17.73 37.35 7.1 36.16 7.1" />
    <polygon class="logo-bar logo-bar-3" points="51.54 0 51.54 17.75 51.54 35.47 52.72 35.47 52.72 17.75 52.72 0 51.54 0" />
    <polygon class="logo-bar logo-bar-4" points="74.02 7.1 74.02 17.73 74.02 28.38 75.21 28.38 75.21 17.73 75.21 7.1 74.02 7.1" />
  </g>
  <path d="M42.72 3.55h3.47v21.28h-3.47V3.55zM60.83 23.45v4.95h-3.47V10.65h2.83l.31 1.85a4.8 4.8 0 014.3-2.22c4.08 0 5.58 3.09 5.58 7.37v.18c0 4.25-1.5 7.37-5.58 7.37a4.85 4.85 0 01-3.97-1.75zm0-3.51c.45.7 1.38 2 2.93 2 2.08 0 3.14-1.55 3.14-4.16v-.18c0-2.62-1.06-4.19-3.14-4.19a3.32 3.32 0 00-2.93 2.09zM6.38 22.06a4.21 4.21 0 01-4-2.08L0 22a7.13 7.13 0 006.21 3.21c4.11 0 6.18-2.24 6.18-5 0-2.15-1.52-3.61-4.72-4.31l-1.54-.38c-1.38-.32-1.78-.92-1.78-1.41 0-1 1.15-1.31 2-1.31a4.13 4.13 0 013.5 1.58l2.17-2.17a7.51 7.51 0 00-5.54-2.53c-3.44 0-5.7 2-5.7 4.65 0 2.28 1.39 3.73 4.73 4.41l1.34.26c1.45.32 2 .95 2 1.46 0 1-.9 1.58-2.43 1.58M90 11.38a4.9 4.9 0 00-3-1.1 4.77 4.77 0 00-4 2.17l-.31-1.8h-2.84v14.18h3.47v-8.67a3.63 3.63 0 013.49-2.47 3.47 3.47 0 012 .47zM31.35 21.88a6.55 6.55 0 01-1.71.3c-1.52 0-2.42-.25-2.42-2.42v-5.91h4.18v-3.2h-4.18V7.1h-2.36l-1.12 3.55-2.59.74v2.46h2.59V20c0 3.85 2 5.23 5 5.23a10.35 10.35 0 003.26-.7z" />
</svg>`;
const nprLogo = `
<svg class="stlpr-logo-lockup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.1 178.4">
  <path d="M69.6 69.5a22.5 22.5 0 018.1-6.4 22 22 0 019.8-2.5q9.8 0 14.2 5.2t4.3 16.5v51h20.7V79c0-11.3-3-20.1-9.2-26.4s-14.4-9.5-25-9.5q-16.4 0-24.9 9.8l-3.8-8.3H49v88.7h20.6z"/>
  <path d="M242.8 131.2a40.5 40.5 0 0017.8 3.9q20.3 0 32-11.8t11.7-33.5q0-46.7-42.4-46.7a26.6 26.6 0 00-19.1 7.5v-6H222V164h20.7zm0-64.6a18.2 18.2 0 0113.2-5.8q14.3 0 20.5 6.4t6.2 22.1q0 14.7-6.3 21.5t-20.5 6.8a20.2 20.2 0 01-13.1-4.5z"/>
  <path d="M427.8 83a23.6 23.6 0 015.5-16c3.7-4.3 8-6.4 12.7-6.4a22.2 22.2 0 0112.1 3.5l8.8-17.7q-5.6-3.3-16.2-3.3-14.3 0-23 10v-8.5h-20.6v88.7h20.7z"/>
  <path
    stroke="white" stroke-width="2"
    d="M351.4 0H0v178.4h524.1V0zM173 173H5.4V5.4H173zm172.7 0H178.4V5.4h167.3zm173 0H351.4V5.4h167.3z"
  />
</svg>`;
const logosCSS = `
.PH-logo {
  display: flex !important;
}

.PH-top-bar .stlpr-logo {
  fill: white;
  height: 30px;
}

.PH-top-bar .stlpr-logo .logo-bar {
  fill: white;
}

.stlpr-logo-lockup {
  display: block;
  align-self: center;
  fill: white;
  margin-left: 17px;
  height: 19px;
}

.PH-ham-m-top .stlpr-logo {
  fill: black;
  height: 40px;
}


/* Adjust Logo sizes */

@media only screen and (min-width: 460px) {
  .PH-top-bar .stlpr-logo {
    height: 40px;
  }

  .stlpr-logo-lockup {
    margin-left: 22px;
    height: 25px;
  }
}

@media only screen and (min-width: 1240px) {
  /* At full header width, increase logo size by +33% */
  .PH-logo .stlpr-logo {
    height: 53px;
  }
  .PH-logo .stlpr-logo-lockup {
    margin-left: 29px;
    height: 33px;
  }

  /* Reset these heights when collapsed */
  [data-header-sticky] .PH-logo .stlpr-logo {
    height: 40px;
  }
  [data-header-sticky] .PH-logo .stlpr-logo-lockup {
    margin-left: 22px;
    height: 25px;
  }
}


/* Logo Animations */

@keyframes stagger-bar1 {
  0%  { transform: rotateX(90deg); }
  9%  { transform: rotateX(0deg);  }
}
@keyframes stagger-bar2 {
  0%  { transform: rotateX(90deg); }
  4%  { transform: rotateX(90deg); }
  23% { transform: rotateX(0deg);  }
}
@keyframes stagger-bar3 {
  0%  { transform: rotateX(90deg); }
  23% { transform: rotateX(90deg); }
  41% { transform: rotateX(0deg);  }
}
@keyframes stagger-bar4 {
  0%  { transform: rotateX(90deg); }
  36% { transform: rotateX(90deg); }
  60% { transform: rotateX(0deg);  }
}

.stlpr-logo:hover .logo-bar {
  animation-direction: alternate-reverse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;

  transform-origin: center center;
}

.stlpr-logo:hover .logo-bar-1 { animation-name: stagger-bar1; }
.stlpr-logo:hover .logo-bar-2 { animation-name: stagger-bar2; }
.stlpr-logo:hover .logo-bar-3 { animation-name: stagger-bar3; }
.stlpr-logo:hover .logo-bar-4 { animation-name: stagger-bar4; }
`;
var _default = () => {
  const headerContainer = document.querySelector('.PH-top-bar .PH-logo > a[aria-label="home page"]');
  const menuContainer = document.querySelector('.PH-ham-m .PH-logo > a[aria-label="home page"]');
  if (!headerContainer || !menuContainer) {
    throw new Error('Could not find logo containers.');
  }
  Glade.insertCSS(logosCSS, true); // true: CSS should persist on navigation

  menuContainer.innerHTML = stlprLogo;
  headerContainer.innerHTML = stlprLogo;
  headerContainer.insertAdjacentHTML('afterend', nprLogo);
};
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// We'll need to detect whether a transcript is present.
// Look for a RichText Module with a Subhead containing the word "Transcript"

function findTranscripts() {
  let transcripts = [];
  let richTextModules = document.querySelectorAll('.RichTextModule');
  for (let module of richTextModules) {
    let subhead = module.querySelector('h2');
    if (!subhead) continue;
    let title = subhead.textContent.toLowerCase();
    if (title.includes('transcript')) {
      transcripts.push(module);
    }
  }
  return transcripts;
}
function formatTranscripts() {
  let transcriptModules = findTranscripts();
  for (let module of transcriptModules) {
    let subhead = module.querySelector('h2');

    // Scrape the content from the module
    let heading = subhead.innerHTML;
    subhead.remove();
    let body = module.innerHTML;

    // Create the new Transcript widget
    let transcriptMarkup = `
    <section>
      <h2 id="transcript">${heading}</h2>

      <details class="collapseable-transcript">
        <summary tabindex="0" role="button">Show/Hide Transcript</summary>
        ${body}
      </details>
    </section>`;
    module.insertAdjacentHTML('afterend', transcriptMarkup);
    module.remove();
  }
}
var _default = () => {
  formatTranscripts();
  (0, _onNavigate.default)(() => formatTranscripts());
};
exports.default = _default;

},{"../lib/onNavigate":2}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = () => {
  const prefersGroveSearch = /[&?]search=grove/.test(window.location.search);
  const searchForms = document.querySelectorAll('form.PH-search-form');
  if (searchForms.length === 0) {
    throw new Error('Could not locate site search forms');
  }
  if (!prefersGroveSearch) {
    for (let form of searchForms) form.action = '/search';
  }
};
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function identifyCurrentPage() {
  if (!document.body) {
    throw new ReferenceError('Could not locate document.body');
  }
  document.body.dataset.page = window.location.pathname;
}
var _default = () => {
  identifyCurrentPage();
  (0, _onNavigate.default)(() => identifyCurrentPage());
};
exports.default = _default;

},{"../lib/onNavigate":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _addThemeByTag = _interopRequireDefault(require("./addThemeByTag"));
var _addUMSLAttribution = _interopRequireDefault(require("./addUMSLAttribution"));
var _animateLogos = _interopRequireDefault(require("./animateLogos"));
var _identifyCurrentPage = _interopRequireDefault(require("./identifyCurrentPage"));
var _IEBannerMessage = _interopRequireDefault(require("./IEBannerMessage"));
var _formatTranscripts = _interopRequireDefault(require("./formatTranscripts"));
var _googleCustomSearch = _interopRequireDefault(require("./googleCustomSearch"));
var _makePlaceholder = _interopRequireDefault(require("./makePlaceholder"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LGBTTheme = `
.stlpr-logo .logo-bar {
  stroke-width: 0.5px;
  stroke: currentColor;
}

.stlpr-logo .logo-bar-1 { color: #d62021; fill: #d62021 !important; }
.stlpr-logo .logo-bar-2 { color: #faa21b; fill: #faa21b !important; }
.stlpr-logo .logo-bar-3 { color: #006b71; fill: #006b71 !important; }
.stlpr-logo .logo-bar-4 { color: #234093; fill: #234093 !important; }
`;

// Plugin
// fn:      plugin function.
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin
// A plugin can be used multiple times with different arguments

const plugins = [{
  fn: _addUMSLAttribution.default,
  enabled: true
}, {
  fn: _animateLogos.default,
  enabled: true
}, {
  fn: _identifyCurrentPage.default,
  enabled: true
}, {
  fn: _formatTranscripts.default,
  enabled: true
}, {
  fn: _googleCustomSearch.default,
  enabled: true
}, {
  fn: _makePlaceholder.default,
  enabled: true
}, {
  fn: _addThemeByTag.default,
  enabled: true,
  args: [['LGBT', 'LGBTQ'], LGBTTheme]
}, {
  fn: _IEBannerMessage.default,
  enabled: false,
  args: ['Not all features may be supported in Internet Explorer']
}];
var _default = plugins;
exports.default = _default;

},{"./IEBannerMessage":3,"./addThemeByTag":4,"./addUMSLAttribution":5,"./animateLogos":6,"./formatTranscripts":7,"./googleCustomSearch":8,"./identifyCurrentPage":9,"./makePlaceholder":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Given an aspect ratio, as a string of width:height (e.g. "16:9"),
// return a HTML markup that satisfies the Aspect Ratio
// padding is Height / Width

const aspectRatioPattern = /^(\d+):(\d+)$/;
function round(number) {
  let places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.round(number * 10 ** places) / 10 ** places;
}
const styles = `
.placeholder-frame {
  border: 3px solid currentColor;
  margin-bottom: 1rem;

  /* Aspect Ratio Hack */
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.placeholder-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  /* http://projects.verou.me/css3patterns/#zig-zag */
  --stripe-color: #f5f5f5;
  background:
    linear-gradient(135deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(225deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(315deg, var(--stripe-color) 25%, transparent 25%),
    linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%);
  background-size: 50px 50px;
  background-clip: content-box;

  color: black;
  font-size: 20px;
  font-weight: bold;

  /* Aspect Ratio Hack */
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
let placeholderStyles;
function makePlaceholder() {
  let aspectRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '4:3';
  let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : `Placeholder ${aspectRatio}`;
  if (typeof aspectRatio !== 'string') {
    throw new TypeError(`expected String. Instead got ${typeof aspectRatio}, ${aspectRatio}`);
  }
  if (!aspectRatioPattern.test(aspectRatio)) {
    throw new Error(`aspectRatio must be in format width:height (e.g. "16:9"). Instead got ${aspectRatio}`);
  }

  // Load styles ONLY if not already present
  if (!placeholderStyles) {
    placeholderStyles = Glade.insertCSS(styles);
  }
  const [, width, height] = aspectRatio.match(aspectRatioPattern);
  const paddingTop = Number(height) / Number(width);
  const placeholder = document.createElement('div');
  placeholder.className = 'placeholder-frame';
  placeholder.style = `padding-top: ${round(paddingTop * 100, 5)}%`;
  placeholder.innerHTML = `<div class="placeholder-inner">${text}</div>`;
  return placeholder;
}
var _default = () => {
  Glade.makePlaceholder = makePlaceholder;
};
exports.default = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// addIsolatedEventListener(element, type, callback)
// a wrapper for addEventListener which self-destructs on page navigation

function addIsolatedEventListener(element, type, callback) {
  const currentPage = () => window.location.pathname;
  const startingPage = currentPage();
  function isolatedCallback(event) {
    var hasChangedPages = startingPage !== currentPage();
    if (hasChangedPages) {
      element.removeEventListener(type, isolatedCallback);
      return;
    }
    callback(event);
  }
  element.addEventListener(type, isolatedCallback);
}
var _default = addIsolatedEventListener;
exports.default = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function ListB() {
  let dataset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let listTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const firstItem = dataset[0];
  const itemsMarkup = dataset.map(_ref => {
    let {
      title,
      link,
      display
    } = _ref;
    if (display === false) return '';
    return `
      <li class="ListB-items-item">
        <a
          class="PromoLink"
          aria-label="${title || ''}"
          ${link ? `href="${link}"` : ''}
        >
          ${title || ''}
        </a>
      </li>`;
  }).join('');
  return `
  <div class="ListB">
    <div class="ListB-header">
      ${listTitle ? `<div class="ListB-header-title">${listTitle}</div>` : '<div class="ListB-header-title" data-no-title=""></div>'}
    </div>

    <div class="ListB-items-first">
      <ps-promo class="PromoB" data-content-type="">
        <div class="PromoB-content">
          <div class="PromoB-media">
            ${firstItem && firstItem.image ? `
              <a class="List" ${firstItem.link ? `href="${firstItem.link}"` : ''}>
                <img
                  class="Image"
                  data-src="${firstItem.image}"
                  alt="${firstItem.title || ''}"
                  src="${firstItem.image}"
                >
              </a>` : ''}
          </div>
        </div>
      </ps-promo>
    </div>

    <ol class="ListB-items">${itemsMarkup}</ol>
  </div>`;
}
var _default = ListB;
exports.default = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function formatTimestamp(stamp) {
  if (!stamp) return '';
  const date = new Date(stamp);
  const dateStamp = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const timeStamp = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });

  // TODO: textContent should return in format "2 hours ago"
  return `
  <div
    class="PromoXSmall-timestamp"
    data-timestamp="${Number(date)}"
    data-date="${dateStamp} at ${timeStamp}"
    data-promo-date="${dateStamp}"
    data-show-timestamp="true"
  >
    ${dateStamp}
  </div>`;
}
function ListC() {
  let dataset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let listTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const itemsMarkup = dataset.map(_ref => {
    let {
      title,
      link,
      image,
      timestamp,
      display
    } = _ref;
    if (display === false) return '';
    return `
      <li class="ListC-items-item">
        <ps-promo class="PromoXSmall" data-content-type="" ${!image ? 'data-no-media=""' : ''}>
          ${image ? `
            <div class="PromoXSmall-media">
              <a
                class="Link"
                aria-label="${title || ''}"
                ${link ? `href="${link}"` : ''}
              >
                <img
                  class="Image"
                  alt="${title || ''}"
                  data-src="${image}"
                  src="${image}"
                >
              </a>
            </div>` : ''}

          <div class="PromoXSmall-content">
            <div class="PromoXSmall-title">
              <a class="Link" ${link ? `href="${link}"` : ''}>${title || ''}</a>
            </div>
            <div class="PromoXSmall-byline">
              <div class="PromoXSmall-date">
                ${formatTimestamp(timestamp)}
              </div>
            </div>
          </div>
        </ps-promo>
      </li>`;
  }).join('');
  return `
  <div class="ListC">
    <div class="ListC-header">
      ${listTitle ? `<div class="ListC-header-title">${listTitle}</div>` : '<div class="ListC-header-title" data-no-title=""></div>'}
    </div>

    <ul class="ListC-items">${itemsMarkup}</ul>
  </div>`;
}
var _default = ListC;
exports.default = _default;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable max-len */

function formatTimestamp(stamp) {
  if (!stamp) return '';
  const date = new Date(stamp);
  const dateStamp = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const timeStamp = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });

  // TODO: textContent should return in format "2 hours ago"
  return `
  <div
    class="PromoB-timestamp"
    data-timestamp="${Number(date)}"
    data-date="${dateStamp} at ${timeStamp}"
    data-promo-date="${dateStamp}"
    data-show-timestamp="true"
  >
    ${dateStamp}
  </div>`;
}
function ListD(dataset, listTitle) {
  const itemsMarkup = dataset.map(_ref => {
    let {
      title,
      link,
      image,
      description,
      audio,
      authors,
      timestamp,
      display
    } = _ref;
    if (display === false) return '';
    return `
      <li class="ListD-items-item">
        <ps-promo class="PromoB" data-content-type="" data-image-align="top">
          <div class="PromoB-content" ${!image ? 'data-no-media=""' : ''}>
            ${image ? `<div class="PromoB-media">
                   <a
                     class="Link"
                     aria-label="${title || ''}"
                     ${link ? `href="${link}"` : ''}
                   >
                     <img
                       class="Image"
                       alt="${title}"
                       data-src="${image}"
                       src="${image}"
                     >
                   </a>
                 </div>` : ''}

            <div class="PromoB-title">
              <a class="Link" ${link ? `href="${link}"` : ''}>
                ${title || ''}
              </a>
            </div>

            <div class="PromoB-byline">
              <div class="PromoB-authorName">
                ${(authors || []).join(', ')}
              </div>
              ${authors ? '<span class="PromoB-byline-divider">,</span>' : ''}
              <div class="PromoB-date">
                ${formatTimestamp(timestamp)}
              </div>
            </div>

            ${description ? `<div class="PromoB-description">${description}</div>` : ''}
          </div>

          <div class="PromoB-audio-label">
          ${audio ? `<ps-stream
                 data-stream-program-name="${title || ''}"
                 on-demand=""
                 small=""
                 external=""
               >
                 <ps-stream-url data-stream-url="${audio}"></ps-stream-url>

                 <button class="StreamPill">
                   <span class="StreamPill-iconWrapper">
                     <svg class="StreamPill-icon">
                       <use xlink:href="#play-icon"></use>
                     </svg>
                     <svg class="StreamPill-iconPause">
                       <use xlink:href="#pause-icon"></use>
                     </svg>
                   </span>

                   <span class="StreamPill-text">
                    <span class="StreamPill-duration">Listen</span>
                   </span>
                 </button>
               </ps-stream>` : ''}
          </div>
        </ps-promo>
      </li>`;
  }).join('');
  return `
  <div class="ListD">
    <div class="ListD-header">
      ${listTitle ? `<div class="ListD-header-title">${listTitle}</div>` : '<div class="ListD-header-title" data-no-title=""></div>'}
    </div>

    <ul class="ListD-items">${itemsMarkup}</ul>
  </div>`;
}
var _default = ListD;
exports.default = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable max-len */

// config
//  program: 'St. Louis on the Air',
//  episodeID: '00000174-2231-dd1b-a77f-3bf1a5c60000',
//  episodeTitle: '‘Summer Of Violence’ Keeps Stray Rescue’s Donna Lochman Busy Saving Dogs',
//  audioFormat: 'audio/mpeg',
//  audio: 'https://kwmu-adswizz.streamguys1.com/wake_up_to_politics/20200124005720-1_IOWA_CAUCUSES.mp3',
//  small: true,

const StreamPill = config => {
  const {
    audio,
    audioFormat,
    episodeID,
    episodeTitle,
    program,
    small
  } = config;
  if (!audio) {
    throw new Error('Could not create Audio Button because audio file is missing');
  }
  const button = document.createElement('div');
  button.innerHTML = `
  <ps-stream
    ${program ? `data-stream-name="${program}"` : ''}
    ${episodeID ? `data-stream-id="${episodeID}"` : ''}
    ${episodeTitle ? `data-stream-program-name="${episodeTitle}"` : ''}
    ${small ? 'small' : ''}
    on-demand
    external
  >
    <ps-stream-url
      data-stream-format="${audioFormat || 'audio/mpeg'}"
      data-stream-url="${audio}"
    >
    </ps-stream-url>

    <button class="StreamPill">
      <span class="StreamPill-iconWrapper">
        <svg class="StreamPill-icon"><use xlink:href="#play-icon"></use></svg>
        <svg class="StreamPill-iconPause"><use xlink:href="#pause-icon"></use></svg>
      </span>

      <span class="StreamPill-text">
        <span class="StreamPill-duration">Listen</span>
      </span>
    </button>
  </ps-stream>`;
  return button;
};
var _default = StreamPill;
exports.default = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const splitString = string => string ? string.split(/,\b/) : [];
function getMetadata() {
  if (!brightspotDataLayer) {
    throw new ReferenceError('Could not read Brightspot Data Layer.');
  }
  if (!brightspotDataLayer.keywords || !brightspotDataLayer.keywords.trim()) {
    throw new ReferenceError(`Could not read Tags from Data Layer, "${brightspotDataLayer.keywords}".`);
  }
  const metadata = {
    storyTitle: brightspotDataLayer.storyTitle || document.querySelector('h1')?.textContent || document.title,
    pageType: brightspotDataLayer.pageType || '',
    program: brightspotDataLayer.program || '',
    timezone: brightspotDataLayer.timezone || 'US/Central',
    hasInlineAudio: !!(brightspotDataLayer.inlineAudio || 0),
    publishedDate: brightspotDataLayer.publishedDate ? new Date(brightspotDataLayer.publishedDate) : '',
    authors: splitString(brightspotDataLayer.author || ''),
    categories: splitString(brightspotDataLayer.category || ''),
    tags: splitString(brightspotDataLayer.keywords || ''),
    brightspotStoryID: brightspotDataLayer.bspStoryId || null,
    NPRStoryID: brightspotDataLayer.nprStoryId || null,
    stationID: brightspotDataLayer.stationOrgId || null,
    station: brightspotDataLayer.station || 'St. Louis Public Radio',
    siteName: brightspotDataLayer.siteName || 'STLPR',
    isNPRStation: brightspotDataLayer.nprCmsSite || false

    // storyOrgId: displays 0 on story pages
    // storyTheme: duplicate of pageType
    // wordcount: displays 0 on story pages
  };

  return metadata;
}
var _default = getMetadata;
exports.default = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _addIsolatedEventListener = _interopRequireDefault(require("./addIsolatedEventListener"));
var _getMetadata = _interopRequireDefault(require("./getMetadata"));
var _insertCSS = _interopRequireDefault(require("./insertCSS"));
var _insertScript = _interopRequireDefault(require("./insertScript"));
var _insertStylesheet = _interopRequireDefault(require("./insertStylesheet"));
var _pageMatches = _interopRequireDefault(require("./pageMatches"));
var _setIsolatedInterval = _interopRequireDefault(require("./setIsolatedInterval"));
var _ListB = _interopRequireDefault(require("./components/ListB"));
var _ListC = _interopRequireDefault(require("./components/ListC"));
var _ListD = _interopRequireDefault(require("./components/ListD"));
var _StreamPill = _interopRequireDefault(require("./components/StreamPill"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Utilities

// Components

const Glade = {
  // Dynamically insert scripts and styles
  insertCSS: _insertCSS.default,
  insertScript: _insertScript.default,
  insertStylesheet: _insertStylesheet.default,
  // Make non-safe JavaScript features safe
  addIsolatedEventListener: _addIsolatedEventListener.default,
  setIsolatedInterval: _setIsolatedInterval.default,
  // Other helper functions
  getMetadata: _getMetadata.default,
  pageMatches: _pageMatches.default,
  // Recreate Grove componenets with custom data
  components: {
    ListB: _ListB.default,
    ListC: _ListC.default,
    ListD: _ListD.default,
    StreamPill: _StreamPill.default
  }
};

// Hook into Grove Navigation
Glade.currentPage = window.location.pathname;
setInterval(() => {
  const currentPage = window.location.pathname;
  const previousPage = Glade.currentPage;

  // dispatch Grove Navigate Event
  if (currentPage !== previousPage) {
    const navigateEvent = new CustomEvent('grove-navigate', {
      detail: {
        page: currentPage,
        previousPage: previousPage
      }
    });
    window.dispatchEvent(navigateEvent);
    Glade.currentPage = currentPage;
  }
}, 100);
var _default = Glade;
exports.default = _default;

},{"./addIsolatedEventListener":12,"./components/ListB":13,"./components/ListC":14,"./components/ListD":15,"./components/StreamPill":16,"./getMetadata":17,"./insertCSS":19,"./insertScript":20,"./insertStylesheet":21,"./pageMatches":22,"./setIsolatedInterval":23}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// insertCSS (markup [, shouldPersist])
// inserts a style tag with raw CSS

function insertCSS(markup) {
  let shouldPersist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Create the styles and append them
  const styles = document.createElement('style');
  styles.textContent = markup;
  document.head.insertAdjacentElement('beforeend', styles);

  // Remove styles unless set to persist
  if (!shouldPersist) {
    (0, _onNavigate.default)(() => styles.remove(), {
      once: true
    });
  }

  // Pass an HTML Reference to the loaded CSS
  return styles;
}
var _default = insertCSS;
exports.default = _default;

},{"../lib/onNavigate":2}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// insertScript (attributes [, shouldPersist])
// load a given script if not already present on the page

// WARNING: insertScript has a "shouldPersist" property
//   removing a script does not cancel intervals/event Listeners set by it
//   shouldPersist is a property because insertScript fails if the script is
//   already present.

function addAttributes(element) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (const [attribute, value] of Object.entries(attributes)) {
    // support Boolean Attributes
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(attribute, '');
    } else {
      element.setAttribute(attribute, value);
    }
  }
}
function insertScript() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let shouldPersist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Find all external scripts on the page
  const scripts = [...document.querySelectorAll('script')];
  const externalScripts = scripts.filter(script => script.src);

  // Fail loudly if script was not provided
  if (!attributes.src) {
    throw new Error('Script src is required. Use syntax Glade.insertScript({src: "PATH"})');
  }
  // Fail silently if script is already present
  if (externalScripts.includes(attributes.src)) {
    return;
  }

  // Create a new script and inject it into the DOM
  const newScript = document.createElement('script');
  addAttributes(newScript, attributes);
  const lastScript = scripts[scripts.length - 1];
  lastScript.after(newScript);

  // Remove script if set not to persist
  // WARNING! removing the script does not cancel intervals/eventListeners
  if (!shouldPersist) {
    (0, _onNavigate.default)(() => newScript.remove(), {
      once: true
    });
  }

  // Pass an HTML Reference to the script
  return newScript;
}
var _default = insertScript;
exports.default = _default;

},{"../lib/onNavigate":2}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onNavigate = _interopRequireDefault(require("../lib/onNavigate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// insertStylesheet (attributes [, shouldPersist])
// load a given stylesheet if not already present on the page

function addAttributes(element) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (const [attribute, value] of Object.entries(attributes)) {
    // support Boolean Attributes
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(attribute, '');
    } else {
      element.setAttribute(attribute, value);
    }
  }
}
function insertStylesheet() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let shouldPersist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Find all stylesheets in the page
  var links = [...document.querySelectorAll('link')];
  var stylesheets = links.filter(link => link.rel === 'stylesheet');
  if (!attributes.href) {
    throw new Error('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})');
  }
  if (stylesheets.includes(attributes.href)) {
    throw new Error('Refused to Load Stylesheet: already present in the page source');
  }

  // Create a new stylesheet and inject it into the DOM
  var sheet = document.createElement('link');
  addAttributes(sheet, attributes);
  sheet.rel = 'stylesheet';
  var lastLink = links[links.length - 1];
  lastLink.after(sheet);

  // Remove script if set not to persist
  if (!shouldPersist) {
    (0, _onNavigate.default)(() => sheet.remove(), {
      once: true
    });
  }

  // Pass an HTML Reference to the stylesheet
  return sheet;
}
var _default = insertStylesheet;
exports.default = _default;

},{"../lib/onNavigate":2}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// compare a page using some criteria
// String criteria: "/we-live-here/awards"
// RegExp criteria: /\/we-live-here\/awards/
// Function criteria: (page) => page.startsWith('/we-live-here/awards')

function matchesCriteria(page, criteria) {
  if (typeof criteria === 'string') {
    return page === criteria;
  }
  if (criteria instanceof RegExp) {
    return criteria.test(page);
  }
  if (typeof criteria === 'function') {
    return criteria(page);
  }
  throw new Error(`Criteria must be a String, Regular Expression, or Function. Instead got ${typeof criteria}, ${criteria}`);
}
function pageMatches() {
  const currentPage = window.location.pathname;
  for (var _len = arguments.length, criterias = new Array(_len), _key = 0; _key < _len; _key++) {
    criterias[_key] = arguments[_key];
  }
  return criterias.some(criteria => matchesCriteria(currentPage, criteria));
}
var _default = pageMatches;
exports.default = _default;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// setIsolatedInterval(callback, milliseconds)
// a wrapper for setInterval which self-destructs on page navigation

function setIsolatedInterval(callback, milliseconds) {
  const currentPage = () => window.location.pathname;
  const startingPage = currentPage();
  let interval;
  function isolatedCallback() {
    var hasChangedPages = startingPage !== currentPage();
    if (hasChangedPages) {
      clearInterval(interval);
      return;
    }
    callback();
  }
  interval = setInterval(isolatedCallback, milliseconds);
  return interval;
}
var _default = setIsolatedInterval;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9vbk5hdmlnYXRlLmpzIiwicGx1Z2lucy9JRUJhbm5lck1lc3NhZ2UuanMiLCJwbHVnaW5zL2FkZFRoZW1lQnlUYWcuanMiLCJwbHVnaW5zL2FkZFVNU0xBdHRyaWJ1dGlvbi5qcyIsInBsdWdpbnMvYW5pbWF0ZUxvZ29zLmpzIiwicGx1Z2lucy9mb3JtYXRUcmFuc2NyaXB0cy5qcyIsInBsdWdpbnMvZ29vZ2xlQ3VzdG9tU2VhcmNoLmpzIiwicGx1Z2lucy9pZGVudGlmeUN1cnJlbnRQYWdlLmpzIiwicGx1Z2lucy9pbmRleC5qcyIsInBsdWdpbnMvbWFrZVBsYWNlaG9sZGVyLmpzIiwic291cmNlL2FkZElzb2xhdGVkRXZlbnRMaXN0ZW5lci5qcyIsInNvdXJjZS9jb21wb25lbnRzL0xpc3RCLmpzIiwic291cmNlL2NvbXBvbmVudHMvTGlzdEMuanMiLCJzb3VyY2UvY29tcG9uZW50cy9MaXN0RC5qcyIsInNvdXJjZS9jb21wb25lbnRzL1N0cmVhbVBpbGwuanMiLCJzb3VyY2UvZ2V0TWV0YWRhdGEuanMiLCJzb3VyY2UvaW5kZXguanMiLCJzb3VyY2UvaW5zZXJ0Q1NTLmpzIiwic291cmNlL2luc2VydFNjcmlwdC5qcyIsInNvdXJjZS9pbnNlcnRTdHlsZXNoZWV0LmpzIiwic291cmNlL3BhZ2VNYXRjaGVzLmpzIiwic291cmNlL3NldElzb2xhdGVkSW50ZXJ2YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFBOEM7QUFHOUMsTUFBTSxDQUFDLEtBQUssR0FBRyxlQUFLOztBQUdwQjtBQUNBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELEtBQUssTUFBTSxNQUFNLElBQUksZ0JBQU8sRUFBRTtJQUM1QixNQUFNLFNBQVMsR0FBUSxNQUFNLENBQUMsT0FBTztJQUNyQyxNQUFNLGNB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QVc7QUFBQTs7Ozs7Ozs7O0FDNUIxQjtBQUNBOztBQUVBLFNBQVMsbUJBQW1CLENBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtFQUNwRCxNQUFNLFdBQVcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtFQUVsRCxNQUFNLFlBQVksR0FBRyxXQUFXLEVBQUU7RUFDbEMsSUFBSSxRQUFRO0VBRVosU0FBUyxnQkFBZ0IsR0FBSTtJQUMzQixJQUFJLGVBQWUsR0FBSSxZQUFZLEtBQUssV0FBVyxFQUFHO0lBRXRELElBQUksZUFBZSxFQUFFO01BQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDdkI7SUFDRjtJQUNBLFFBQVEsRUFBRTtFQUNaO0VBRUEsUUFBUSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7RUFDdEQsT0FBTyxRQUFRO0FBQ2pCO0FBQUMsZUFHYyxtQkFBbUI7QUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IGRlZmF1bHQgYXMgR2xhZGUgfSBmcm9tICcuL3NvdXJjZSdcbmltcG9ydCB7IGRlZmF1bHQgYXMgcGx1Z2lucyB9IGZyb20gJy4vcGx1Z2lucydcblxuXG53aW5kb3cuR2xhZGUgPSBHbGFkZVxuXG5cbi8vIFJ1biBQbHVnaW5zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgaXNFbmFibGVkICAgICAgPSBwbHVnaW4uZW5hYmxlZFxuICAgIGNvbnN0IHBsdWdpbkZ1bmN0aW9uID0gcGx1Z2luLmZuXG4gICAgY29uc3QgYXJncyAgICAgICAgICAgPSBwbHVnaW4uYXJncyB8fCBbXVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc0VuYWJsZWQpIHBsdWdpbkZ1bmN0aW9uKC4uLmFyZ3MpXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbn0pXG4iLCIvLyBBIHdyYXBwZXIgZm9yIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdncm92ZS1uYXZpZ2F0ZScsIC4uLilcblxuLy8gVGhlIGdyb3ZlLW5hdmlnYXRlIGV2ZW50IGlzIGNoZWNrZWQgZXZlcnkgMTAwIG1zLlxuLy8gQmVjYXVzZSBvZiB0aGlzLCBkZXBlbmRpbmcgb24gaG93IHRoZSBwYWdlIGxvYWRzLCB0aGF0IDEwMCBtcyBnYXAgY2FuIGNhdXNlXG4vLyBhbiBldmVudCB0byBiZSBmaXJlZCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2FzIGludGVuZGVkIHRvIHJ1biBvbiB0aGUgbmV4dFxuXG5mdW5jdGlvbiBwdXNoTmF2aWdhdGlvbkV2ZW50IChjYWxsYmFjaywgcHJvcGVydGllcyA9IHVuZGVmaW5lZCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ3JvdmUtbmF2aWdhdGUnLCBjYWxsYmFjaywgcHJvcGVydGllcylcbiAgfSwgMTAwKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHB1c2hOYXZpZ2F0aW9uRXZlbnRcbiIsImltcG9ydCBvbk5hdmlnYXRlIGZyb20gJy4uL2xpYi9vbk5hdmlnYXRlJ1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGVydCAobWVzc2FnZSkge1xuICBpZiAoIW1lc3NhZ2UpIHJldHVyblxuXG4gIHZhciBtYXJrdXAgPSBgXG4gIDxkaXYgY2xhc3M9XCJBbGVydEJhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJBbGVydEJhci1tZXNzYWdlXCI+JHttZXNzYWdlfTwvZGl2PlxuICA8L2Rpdj5gXG5cbiAgLy8gRmluZCBhIHBsYWNlIHRvIHB1dCB0aGUgYWxlcnRcbiAgLy8gQXR0ZW1wdCB0byBpbnNlcnQgaXQgYWJvdmUgYW4gZXhpc3RpbmcgYWxlcnRcbiAgY29uc3QgZXhpc3RpbmdBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BbGVydEJhcicpXG5cbiAgaWYgKGV4aXN0aW5nQWxlcnQpIHtcbiAgICBleGlzdGluZ0FsZXJ0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBtYXJrdXApXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBBdHRlbXB0IHRvIGluc2VydCBpdCBhZnRlciAuUGFnZS1hYm92ZVxuICBjb25zdCBwYWdlQWJvdmVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5QYWdlLWFib3ZlJylcblxuICBpZiAocGFnZUFib3ZlQmxvY2spIHtcbiAgICBwYWdlQWJvdmVCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbWFya3VwKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQXR0ZW1wdCB0byBpbnNlcnQgaXQgYWZ0ZXIgaGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BzLWhlYWRlcicpXG5cbiAgaWYgKGhlYWRlcikge1xuICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbWFya3VwKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdObyBsb2NhdGlvbnMgdG8gcGxhY2UgYW4gYWxlcnQgYmFyIHdlcmUgZm91bmQuJylcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlID0+IHtcbiAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJydcbiAgY29uc3QgaXNJbnRlcm5ldEV4cGxvcmVyID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RyaWRlbnQnKVxuXG4gIGlmIChpc0ludGVybmV0RXhwbG9yZXIpIHtcbiAgICBkaXNwbGF5QWxlcnQobWVzc2FnZSlcbiAgICBvbk5hdmlnYXRlKCgpID0+IGRpc3BsYXlBbGVydChtZXNzYWdlKSlcbiAgfVxufVxuIiwiaW1wb3J0IG9uTmF2aWdhdGUgZnJvbSAnLi4vbGliL29uTmF2aWdhdGUnXG5cblxuZnVuY3Rpb24gYXBwbHlUaGVtZSAodGFncywgdGhlbWUpIHtcbiAgaWYgKCFicmlnaHRzcG90RGF0YUxheWVyKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdDb3VsZCBub3QgcmVhZCBCcmlnaHRzcG90IERhdGEgTGF5ZXIuJylcbiAgfVxuXG4gIGlmICghYnJpZ2h0c3BvdERhdGFMYXllci5rZXl3b3JkcyB8fCAhYnJpZ2h0c3BvdERhdGFMYXllci5rZXl3b3Jkcy50cmltKCkpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IgKGBDb3VsZCBub3QgcmVhZCBUYWdzIGZyb20gRGF0YSBMYXllciwgXCIke2JyaWdodHNwb3REYXRhTGF5ZXIua2V5d29yZHN9XCIuYClcbiAgfVxuXG4gIGNvbnN0IHN0b3J5VGFncyA9IGJyaWdodHNwb3REYXRhTGF5ZXIua2V5d29yZHMudHJpbSgpLnNwbGl0KCcsJylcblxuICBpZiAodGFncy5hbnkodGFnID0+IHN0b3J5VGFncy5pbmNsdWRlcyh0YWcpKSkge1xuICAgIEdsYWRlLmluc2VydENTUyh0aGVtZSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0ICguLi5wYXJhbWV0ZXJzKSA9PiB7XG4gIGFwcGx5VGhlbWUoKVxuICBvbk5hdmlnYXRlKCgpID0+IGFwcGx5VGhlbWUoLi4ucGFyYW1ldGVycykpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCBvbk5hdmlnYXRlIGZyb20gJy4uL2xpYi9vbk5hdmlnYXRlJ1xuXG5cbmNvbnN0IFVNU0xMb2dvID0gYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDggMjk2LjRcIj5cbiAgPHBhdGggZD1cIk02NDggMjU1Ljh2MzguOWMtMSAuMy0xMjAgLjQtMTIyLjMuMVYxLjNoNTguOXYyNTQuNGMyIC4yIDMuOS4xIDUuOC4xSDY0OHpNNDQ1LjMgMGwxLjUuMmM1LjQuMyAxMC43LjUgMTYgMSA3LjQuNyAxNC43IDEuOCAyMS41IDQuNmEzMS43IDMxLjcgMCAwIDEgNy4yIDQgMjYuMyAyNi4zIDAgMCAxIDkuMyAxMy42IDYxLjMgNjEuMyAwIDAgMSAyLjMgMTIuM2MuNyA2LjkuOCAxMy43LjggMjAuNnY0NWgtNTl2LTEuOS01Ny4xYTI1IDI1IDAgMCAwLS40LTQuNSA3LjQgNy40IDAgMCAwLTYuNC02LjMgMTcuMyAxNy4zIDAgMCAwLTcuMy4xIDYuMyA2LjMgMCAwIDAtNSA1LjMgMjcuNiAyNy42IDAgMCAwLS42IDUuMXY2MC41YTQ0LjcgNDQuNyAwIDAgMCAuNCA1LjYgNy42IDcuNiAwIDAgMCAzIDUgMjQuNCAyNC40IDAgMCAwIDQuNCAzcTYuNCAzIDEyLjkgNS43bDMwLjIgMTIuNWE2NC4xIDY0LjEgMCAwIDEgMTUuNSA4LjYgMzAuNCAzMC40IDAgMCAxIDExLjYgMjAuNCA4MS44IDgxLjggMCAwIDEgLjcgMTEuNVYyNDFjMCA1LjctLjMgMTEuMy0uNiAxN2E2Ni4yIDY2LjIgMCAwIDEtMi4yIDE0LjIgMjYuNiAyNi42IDAgMCAxLTE3IDE4LjcgNjkuMyA2OS4zIDAgMCAxLTE1LjMgMy43IDIxNy43IDIxNy43IDAgMCAxLTMwIDEuOGMtNy42IDAtMTUuMSAwLTIyLjYtLjRhMTA3LjcgMTA3LjcgMCAwIDEtMjUtMy40IDU3IDU3IDAgMCAxLTUuNi0xLjkgMjYuNSAyNi41IDAgMCAxLTE2LjYtMTguNiA2Ny4zIDY3LjMgMCAwIDEtMi0xMS41Yy0uNi02LjItLjctMTIuNC0uNy0xOC43di03MWg1OC44bC4xIDEuN3Y4MS4yYTMyLjIgMzIuMiAwIDAgMCAuNCA1LjRjLjcgMy44IDIuNiA1LjcgNi4zIDYuMmEyMC4zIDIwLjMgMCAwIDAgNS43IDBjNC4yLS42IDYuNS0zLjMgNy03LjZhMjguMiAyOC4yIDAgMCAwIC4zLTMuNXYtNzhjMC0xLjMgMC0yLjYtLjItNGE4LjMgOC4zIDAgMCAwLTMuNS02LjQgMzIuNSAzMi41IDAgMCAwLTUuMy0zLjJjLTYtMi43LTEyLTUuMi0xOC4xLTcuOGwtMjQuMy0xMGE2NC41IDY0LjUgMCAwIDEtMTMuMS03IDQ3LjQgNDcuNCAwIDAgMS01LjUtNC42Yy00LjctNC41LTctMTAuMi04LTE2LjVhNzYuNyA3Ni43IDAgMCAxLS43LTExVjU0YzAtNiAuMS0xMiAuNy0xOGE1Ni44IDU2LjggMCAwIDEgMy0xNC44IDI1LjMgMjUuMyAwIDAgMSAxMy0xNC4zIDUyLjMgNTIuMyAwIDAgMSAxMy41LTQuMiAxMzQgMTM0IDAgMCAxIDE4LjYtMmw3LjgtLjQgMS43LS4zek0yOTcuOCAxMTcuN0gyOTJsLTI1IDE3Ny4xaC0yOGwtMjUtMTc3LjFoLTUuN2MtLjMgMSAuNiAzMS40IDEgNDQuMy42IDE0LjcuOSAyOS41IDEuNCA0NC4ybDEuMyA0NC4zIDEuMyA0NC4xYy0xIC40LTQ4LjMuNi01MS43LjItLjMtMS0uMy0yOTEuNyAwLTI5My41aDY1LjFsMjQuMSAxMzRoNC4zbDI0LjYtMTM0aDY1LjJjLjIgMSAuMyAyOTIgMCAyOTMuNUgyOTNsMi41LTg4LjUgMi4zLTg4LjZ6TTAgMS4yaDU5YTguMyA4LjMgMCAwIDEgLjEgMXYyNTEuMWEzMS41IDMxLjUgMCAwIDAgLjQgNS40Yy43IDQgMi44IDYgNi43IDYuN2EyMC4yIDIwLjIgMCAwIDAgNS44IDBjMy45LS42IDYtMyA2LjYtNy4yYTMxLjggMzEuOCAwIDAgMCAuMi00VjEuM2g1OS41djI0MS4yYzAgNi0uMSAxMi0uNyAxOC4xYTYwLjkgNjAuOSAwIDAgMS0yLjUgMTMgMjYuMyAyNi4zIDAgMCAxLTE0LjggMTYuNSA1NyA1NyAwIDAgMS0xMy40IDQgMTUxLjUgMTUxLjUgMCAwIDEtMjAuMyAyLjFjLTkuNS40LTE5IC40LTI4LjUuMmExODkuNCAxODkuNCAwIDAgMS0yMy4yLTEuNyA2Ni44IDY2LjggMCAwIDEtMTUuOS00IDI1LjYgMjUuNiAwIDAgMS0xNS43LTE3IDY3LjcgNjcuNyAwIDAgMS0xLjYtNi42Yy0xLTUtMS0xMC0xLjQtMTVsLS4zLTEuN1YxLjJ6XCI+PC9wYXRoPlxuPC9zdmc+YFxuXG5cbmNvbnN0IG1lbnVBdHRyaWJ1dGlvbkhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyLW1lbnUtVU1TTC1hdHRyaWJ1dGlvblwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudW1zbC5lZHVcIj5cbiAgICAke1VNU0xMb2dvfVxuICA8L2E+XG4gIDxzbWFsbD5cbiAgICBTdC4gTG91aXMgUHVibGljIFJhZGlvIGlzIGEgbGlzdGVuZXItc3VwcG9ydGVkIHNlcnZpY2Ugb2YgdGhlXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnVtc2wuZWR1XCI+VW5pdmVyc2l0eSBvZiBNaXNzb3VyaeKAk1N0LiBMb3VpczwvYT4uXG4gIDwvc21hbGw+XG48L2Rpdj5gXG5cblxuY29uc3QgZm9vdGVyQXR0cmlidXRpb25IVE1MID0gYFxuPGRpdiBjbGFzcz1cImZvb3Rlci1VTVNMLWF0dHJpYnV0aW9uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy51bXNsLmVkdVwiPlxuICAgICR7VU1TTExvZ299XG4gIDwvYT5cbiAgPHNtYWxsPlxuICAgIFN0LiBMb3VpcyBQdWJsaWMgUmFkaW8gaXMgYSBsaXN0ZW5lci1zdXBwb3J0ZWQgc2VydmljZSBvZiB0aGVcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudW1zbC5lZHVcIj5Vbml2ZXJzaXR5IG9mIE1pc3NvdXJp4oCTU3QuIExvdWlzPC9hPi5cbiAgPC9zbWFsbD5cbjwvZGl2PmBcblxuXG5jb25zdCBhdHRyaWJ1dGlvbkNTUyA9IGBcbi5oYW1idXJnZXItbWVudS1VTVNMLWF0dHJpYnV0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5oYW1idXJnZXItbWVudS1VTVNMLWF0dHJpYnV0aW9uIHN2ZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYW1idXJnZXItbWVudS1VTVNMLWF0dHJpYnV0aW9uIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG5cbi5oYW1idXJnZXItbWVudS1VTVNMLWF0dHJpYnV0aW9uIGEge1xuICBjb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4vKiBKdXN0IHRoZSBsaW5rIGFyb3VuZCB0aGUgbG9nbyAqL1xuLmhhbWJ1cmdlci1tZW51LVVNU0wtYXR0cmlidXRpb24gPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmhhbWJ1cmdlci1tZW51LVVNU0wtYXR0cmlidXRpb24gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1saW5rSG92ZXJDb2xvcik7XG59XG5cbi5oYW1idXJnZXItbWVudS1VTVNMLWF0dHJpYnV0aW9uIHNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvb3Rlci1VTVNMLWF0dHJpYnV0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uZm9vdGVyLVVNU0wtYXR0cmlidXRpb24gc3ZnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4uZm9vdGVyLVVNU0wtYXR0cmlidXRpb24gc21hbGwge1xuICBtYXgtd2lkdGg6IDQ2Y2g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvb3Rlci1VTVNMLWF0dHJpYnV0aW9uIGEge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mb290ZXItVU1TTC1hdHRyaWJ1dGlvbiBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm9vdGVyLVVNU0wtYXR0cmlidXRpb24gc21hbGwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyLVVNU0wtYXR0cmlidXRpb24gc21hbGwgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cbmBcblxuXG5mdW5jdGlvbiBhZGRVTVNMRm9vdGVyQXR0cmlidXRpb24gKCkge1xuICBjb25zdCBmb290ZXJOYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIG5hdi5Gb290ZXJOYXZpZ2F0aW9uLCBmb290ZXIgbmF2LlNlY3Rpb25OYXZpZ2F0aW9uJylcblxuICBpZiAoIWZvb3Rlck5hdmlnYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGZvb3RlciBuYXZpZ2F0aW9uIGZvciBVTVNMIEF0dHJpYnV0aW9uLicpXG4gIH1cblxuICBmb290ZXJOYXZpZ2F0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZm9vdGVyQXR0cmlidXRpb25IVE1MKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgR2xhZGUuaW5zZXJ0Q1NTKGF0dHJpYnV0aW9uQ1NTLCB0cnVlKSAvLyB0cnVlOiBDU1Mgc2hvdWxkIHBlcnNpc3Qgb24gbmF2aWdhdGlvblxuXG4gIC8vIEFkZCB0aGUgaGFtYnVyZ2VyLW1lbnUgYXR0cmlidXRpb25cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5QSC1oYW0tbS13cmFwcGVyJylcblxuICBpZiAoIW1lbnVDb250YWluZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIG1lbnUgY29udGFpbmVyIGZvciBVTVNMIEF0dHJpYnV0aW9uLicpXG4gIH1cblxuICBtZW51Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWVudUF0dHJpYnV0aW9uSFRNTClcblxuICAvLyBBZGQgdGhlIGZvb3RlciBhdHRpcnVidGlvblxuICBhZGRVTVNMRm9vdGVyQXR0cmlidXRpb24oKVxuICAvLyBVbmxpa2UgdGhlIG5hdiwgd2hpY2ggcGVyc2lzdHMgaW4gR3JvdmUsIHRoZSBmb290ZXIgcmVmcmVzaGVzIGVhY2ggcGFnZSBsb2FkXG4gIG9uTmF2aWdhdGUoKCkgPT4gYWRkVU1TTEZvb3RlckF0dHJpYnV0aW9uKCkpXG59XG4iLCJjb25zdCBzdGxwckxvZ28gPSBgXG48c3ZnXG4gIGNsYXNzPVwic3RscHItbG9nb1wiXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB2aWV3Qm94PVwiMCAwIDkwIDM1LjQ3XCJcbiAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIlxuPlxuICA8ZGVmcz5cbiAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudC1maWxsXCIgeDI9XCIwXCIgeTI9XCIxXCI+XG4gICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3AtY29sb3I9XCIjMjM3YmJkXCIgLz5cbiAgICAgIDxzdG9wIG9mZnNldD1cIjUwJVwiIHN0b3AtY29sb3I9XCIjMjM0MDkzXCIgLz5cbiAgICA8L2xpbmVhckdyYWRpZW50PlxuICA8L2RlZnM+XG4gIDxnIGZpbGw9XCJ1cmwoI2dyYWRpZW50LWZpbGwpXCI+XG4gICAgPHBvbHlnb24gY2xhc3M9XCJsb2dvLWJhciBsb2dvLWJhci0xXCIgcG9pbnRzPVwiMTYuNDQgMTAuNjQgMTYuNDQgMTcuNzQgMTYuNDQgMjQuODMgMTcuNjIgMjQuODMgMTcuNjIgMTcuNzQgMTcuNjIgMTAuNjQgMTYuNDQgMTAuNjRcIiAvPlxuICAgIDxwb2x5Z29uIGNsYXNzPVwibG9nby1iYXIgbG9nby1iYXItMlwiIHBvaW50cz1cIjM2LjE2IDcuMSAzNi4xNiAxNy43MyAzNi4xNiAyOC4zOCAzNy4zNSAyOC4zOCAzNy4zNSAxNy43MyAzNy4zNSA3LjEgMzYuMTYgNy4xXCIgLz5cbiAgICA8cG9seWdvbiBjbGFzcz1cImxvZ28tYmFyIGxvZ28tYmFyLTNcIiBwb2ludHM9XCI1MS41NCAwIDUxLjU0IDE3Ljc1IDUxLjU0IDM1LjQ3IDUyLjcyIDM1LjQ3IDUyLjcyIDE3Ljc1IDUyLjcyIDAgNTEuNTQgMFwiIC8+XG4gICAgPHBvbHlnb24gY2xhc3M9XCJsb2dvLWJhciBsb2dvLWJhci00XCIgcG9pbnRzPVwiNzQuMDIgNy4xIDc0LjAyIDE3LjczIDc0LjAyIDI4LjM4IDc1LjIxIDI4LjM4IDc1LjIxIDE3LjczIDc1LjIxIDcuMSA3NC4wMiA3LjFcIiAvPlxuICA8L2c+XG4gIDxwYXRoIGQ9XCJNNDIuNzIgMy41NWgzLjQ3djIxLjI4aC0zLjQ3VjMuNTV6TTYwLjgzIDIzLjQ1djQuOTVoLTMuNDdWMTAuNjVoMi44M2wuMzEgMS44NWE0LjggNC44IDAgMDE0LjMtMi4yMmM0LjA4IDAgNS41OCAzLjA5IDUuNTggNy4zN3YuMThjMCA0LjI1LTEuNSA3LjM3LTUuNTggNy4zN2E0Ljg1IDQuODUgMCAwMS0zLjk3LTEuNzV6bTAtMy41MWMuNDUuNyAxLjM4IDIgMi45MyAyIDIuMDggMCAzLjE0LTEuNTUgMy4xNC00LjE2di0uMThjMC0yLjYyLTEuMDYtNC4xOS0zLjE0LTQuMTlhMy4zMiAzLjMyIDAgMDAtMi45MyAyLjA5ek02LjM4IDIyLjA2YTQuMjEgNC4yMSAwIDAxLTQtMi4wOEwwIDIyYTcuMTMgNy4xMyAwIDAwNi4yMSAzLjIxYzQuMTEgMCA2LjE4LTIuMjQgNi4xOC01IDAtMi4xNS0xLjUyLTMuNjEtNC43Mi00LjMxbC0xLjU0LS4zOGMtMS4zOC0uMzItMS43OC0uOTItMS43OC0xLjQxIDAtMSAxLjE1LTEuMzEgMi0xLjMxYTQuMTMgNC4xMyAwIDAxMy41IDEuNThsMi4xNy0yLjE3YTcuNTEgNy41MSAwIDAwLTUuNTQtMi41M2MtMy40NCAwLTUuNyAyLTUuNyA0LjY1IDAgMi4yOCAxLjM5IDMuNzMgNC43MyA0LjQxbDEuMzQuMjZjMS40NS4zMiAyIC45NSAyIDEuNDYgMCAxLS45IDEuNTgtMi40MyAxLjU4TTkwIDExLjM4YTQuOSA0LjkgMCAwMC0zLTEuMSA0Ljc3IDQuNzcgMCAwMC00IDIuMTdsLS4zMS0xLjhoLTIuODR2MTQuMThoMy40N3YtOC42N2EzLjYzIDMuNjMgMCAwMTMuNDktMi40NyAzLjQ3IDMuNDcgMCAwMTIgLjQ3ek0zMS4zNSAyMS44OGE2LjU1IDYuNTUgMCAwMS0xLjcxLjNjLTEuNTIgMC0yLjQyLS4yNS0yLjQyLTIuNDJ2LTUuOTFoNC4xOHYtMy4yaC00LjE4VjcuMWgtMi4zNmwtMS4xMiAzLjU1LTIuNTkuNzR2Mi40NmgyLjU5VjIwYzAgMy44NSAyIDUuMjMgNSA1LjIzYTEwLjM1IDEwLjM1IDAgMDAzLjI2LS43elwiIC8+XG48L3N2Zz5gXG5cblxuY29uc3QgbnByTG9nbyA9IGBcbjxzdmcgY2xhc3M9XCJzdGxwci1sb2dvLWxvY2t1cFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUyNC4xIDE3OC40XCI+XG4gIDxwYXRoIGQ9XCJNNjkuNiA2OS41YTIyLjUgMjIuNSAwIDAxOC4xLTYuNCAyMiAyMiAwIDAxOS44LTIuNXE5LjggMCAxNC4yIDUuMnQ0LjMgMTYuNXY1MWgyMC43Vjc5YzAtMTEuMy0zLTIwLjEtOS4yLTI2LjRzLTE0LjQtOS41LTI1LTkuNXEtMTYuNCAwLTI0LjkgOS44bC0zLjgtOC4zSDQ5djg4LjdoMjAuNnpcIi8+XG4gIDxwYXRoIGQ9XCJNMjQyLjggMTMxLjJhNDAuNSA0MC41IDAgMDAxNy44IDMuOXEyMC4zIDAgMzItMTEuOHQxMS43LTMzLjVxMC00Ni43LTQyLjQtNDYuN2EyNi42IDI2LjYgMCAwMC0xOS4xIDcuNXYtNkgyMjJWMTY0aDIwLjd6bTAtNjQuNmExOC4yIDE4LjIgMCAwMTEzLjItNS44cTE0LjMgMCAyMC41IDYuNHQ2LjIgMjIuMXEwIDE0LjctNi4zIDIxLjV0LTIwLjUgNi44YTIwLjIgMjAuMiAwIDAxLTEzLjEtNC41elwiLz5cbiAgPHBhdGggZD1cIk00MjcuOCA4M2EyMy42IDIzLjYgMCAwMTUuNS0xNmMzLjctNC4zIDgtNi40IDEyLjctNi40YTIyLjIgMjIuMiAwIDAxMTIuMSAzLjVsOC44LTE3LjdxLTUuNi0zLjMtMTYuMi0zLjMtMTQuMyAwLTIzIDEwdi04LjVoLTIwLjZ2ODguN2gyMC43elwiLz5cbiAgPHBhdGhcbiAgICBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgIGQ9XCJNMzUxLjQgMEgwdjE3OC40aDUyNC4xVjB6TTE3MyAxNzNINS40VjUuNEgxNzN6bTE3Mi43IDBIMTc4LjRWNS40aDE2Ny4zem0xNzMgMEgzNTEuNFY1LjRoMTY3LjN6XCJcbiAgLz5cbjwvc3ZnPmBcblxuXG5jb25zdCBsb2dvc0NTUyA9IGBcbi5QSC1sb2dvIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uUEgtdG9wLWJhciAuc3RscHItbG9nbyB7XG4gIGZpbGw6IHdoaXRlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5QSC10b3AtYmFyIC5zdGxwci1sb2dvIC5sb2dvLWJhciB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4uc3RscHItbG9nby1sb2NrdXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmaWxsOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIGhlaWdodDogMTlweDtcbn1cblxuLlBILWhhbS1tLXRvcCAuc3RscHItbG9nbyB7XG4gIGZpbGw6IGJsYWNrO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cblxuLyogQWRqdXN0IExvZ28gc2l6ZXMgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NjBweCkge1xuICAuUEgtdG9wLWJhciAuc3RscHItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLnN0bHByLWxvZ28tbG9ja3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjQwcHgpIHtcbiAgLyogQXQgZnVsbCBoZWFkZXIgd2lkdGgsIGluY3JlYXNlIGxvZ28gc2l6ZSBieSArMzMlICovXG4gIC5QSC1sb2dvIC5zdGxwci1sb2dvIHtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gIH1cbiAgLlBILWxvZ28gLnN0bHByLWxvZ28tbG9ja3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMjlweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gIH1cblxuICAvKiBSZXNldCB0aGVzZSBoZWlnaHRzIHdoZW4gY29sbGFwc2VkICovXG4gIFtkYXRhLWhlYWRlci1zdGlja3ldIC5QSC1sb2dvIC5zdGxwci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgW2RhdGEtaGVhZGVyLXN0aWNreV0gLlBILWxvZ28gLnN0bHByLWxvZ28tbG9ja3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cblxuXG4vKiBMb2dvIEFuaW1hdGlvbnMgKi9cblxuQGtleWZyYW1lcyBzdGFnZ2VyLWJhcjEge1xuICAwJSAgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyB9XG4gIDklICB7IHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTsgIH1cbn1cbkBrZXlmcmFtZXMgc3RhZ2dlci1iYXIyIHtcbiAgMCUgIHsgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTsgfVxuICA0JSAgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyB9XG4gIDIzJSB7IHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTsgIH1cbn1cbkBrZXlmcmFtZXMgc3RhZ2dlci1iYXIzIHtcbiAgMCUgIHsgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTsgfVxuICAyMyUgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyB9XG4gIDQxJSB7IHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTsgIH1cbn1cbkBrZXlmcmFtZXMgc3RhZ2dlci1iYXI0IHtcbiAgMCUgIHsgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTsgfVxuICAzNiUgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyB9XG4gIDYwJSB7IHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTsgIH1cbn1cblxuLnN0bHByLWxvZ286aG92ZXIgLmxvZ28tYmFyIHtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnN0bHByLWxvZ286aG92ZXIgLmxvZ28tYmFyLTEgeyBhbmltYXRpb24tbmFtZTogc3RhZ2dlci1iYXIxOyB9XG4uc3RscHItbG9nbzpob3ZlciAubG9nby1iYXItMiB7IGFuaW1hdGlvbi1uYW1lOiBzdGFnZ2VyLWJhcjI7IH1cbi5zdGxwci1sb2dvOmhvdmVyIC5sb2dvLWJhci0zIHsgYW5pbWF0aW9uLW5hbWU6IHN0YWdnZXItYmFyMzsgfVxuLnN0bHByLWxvZ286aG92ZXIgLmxvZ28tYmFyLTQgeyBhbmltYXRpb24tbmFtZTogc3RhZ2dlci1iYXI0OyB9XG5gXG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUEgtdG9wLWJhciAuUEgtbG9nbyA+IGFbYXJpYS1sYWJlbD1cImhvbWUgcGFnZVwiXScpXG4gIGNvbnN0IG1lbnVDb250YWluZXIgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5QSC1oYW0tbSAuUEgtbG9nbyA+IGFbYXJpYS1sYWJlbD1cImhvbWUgcGFnZVwiXScpXG5cbiAgaWYgKCFoZWFkZXJDb250YWluZXIgfHwgIW1lbnVDb250YWluZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGxvZ28gY29udGFpbmVycy4nKVxuICB9XG5cbiAgR2xhZGUuaW5zZXJ0Q1NTKGxvZ29zQ1NTLCB0cnVlKSAvLyB0cnVlOiBDU1Mgc2hvdWxkIHBlcnNpc3Qgb24gbmF2aWdhdGlvblxuXG4gIG1lbnVDb250YWluZXIuaW5uZXJIVE1MICAgPSBzdGxwckxvZ29cbiAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IHN0bHByTG9nb1xuICBoZWFkZXJDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIG5wckxvZ28pXG59XG4iLCJpbXBvcnQgb25OYXZpZ2F0ZSBmcm9tICcuLi9saWIvb25OYXZpZ2F0ZSdcblxuXG4vLyBXZSdsbCBuZWVkIHRvIGRldGVjdCB3aGV0aGVyIGEgdHJhbnNjcmlwdCBpcyBwcmVzZW50LlxuLy8gTG9vayBmb3IgYSBSaWNoVGV4dCBNb2R1bGUgd2l0aCBhIFN1YmhlYWQgY29udGFpbmluZyB0aGUgd29yZCBcIlRyYW5zY3JpcHRcIlxuXG5mdW5jdGlvbiBmaW5kVHJhbnNjcmlwdHMgKCkge1xuICBsZXQgdHJhbnNjcmlwdHMgPSBbXVxuICBsZXQgcmljaFRleHRNb2R1bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlJpY2hUZXh0TW9kdWxlJylcblxuICBmb3IgKGxldCBtb2R1bGUgb2YgcmljaFRleHRNb2R1bGVzKSB7XG4gICAgbGV0IHN1YmhlYWQgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignaDInKVxuICAgIGlmICghc3ViaGVhZCkgY29udGludWVcblxuICAgIGxldCB0aXRsZSA9IHN1YmhlYWQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgIGlmICh0aXRsZS5pbmNsdWRlcygndHJhbnNjcmlwdCcpKSB7XG4gICAgICB0cmFuc2NyaXB0cy5wdXNoKG1vZHVsZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJhbnNjcmlwdHNcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRUcmFuc2NyaXB0cyAoKSB7XG4gIGxldCB0cmFuc2NyaXB0TW9kdWxlcyA9IGZpbmRUcmFuc2NyaXB0cygpXG5cbiAgZm9yIChsZXQgbW9kdWxlIG9mIHRyYW5zY3JpcHRNb2R1bGVzKSB7XG4gICAgbGV0IHN1YmhlYWQgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignaDInKVxuXG4gICAgLy8gU2NyYXBlIHRoZSBjb250ZW50IGZyb20gdGhlIG1vZHVsZVxuICAgIGxldCBoZWFkaW5nID0gc3ViaGVhZC5pbm5lckhUTUxcbiAgICBzdWJoZWFkLnJlbW92ZSgpXG4gICAgbGV0IGJvZHkgPSBtb2R1bGUuaW5uZXJIVE1MXG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBUcmFuc2NyaXB0IHdpZGdldFxuICAgIGxldCB0cmFuc2NyaXB0TWFya3VwID0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyIGlkPVwidHJhbnNjcmlwdFwiPiR7aGVhZGluZ308L2gyPlxuXG4gICAgICA8ZGV0YWlscyBjbGFzcz1cImNvbGxhcHNlYWJsZS10cmFuc2NyaXB0XCI+XG4gICAgICAgIDxzdW1tYXJ5IHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5TaG93L0hpZGUgVHJhbnNjcmlwdDwvc3VtbWFyeT5cbiAgICAgICAgJHtib2R5fVxuICAgICAgPC9kZXRhaWxzPlxuICAgIDwvc2VjdGlvbj5gXG5cbiAgICBtb2R1bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIHRyYW5zY3JpcHRNYXJrdXApXG4gICAgbW9kdWxlLnJlbW92ZSgpXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGZvcm1hdFRyYW5zY3JpcHRzKClcbiAgb25OYXZpZ2F0ZSgoKSA9PiBmb3JtYXRUcmFuc2NyaXB0cygpKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBwcmVmZXJzR3JvdmVTZWFyY2ggPSAvWyY/XXNlYXJjaD1ncm92ZS8udGVzdCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICBjb25zdCBzZWFyY2hGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0uUEgtc2VhcmNoLWZvcm0nKVxuXG4gIGlmIChzZWFyY2hGb3Jtcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2NhdGUgc2l0ZSBzZWFyY2ggZm9ybXMnKVxuICB9XG5cbiAgaWYgKCFwcmVmZXJzR3JvdmVTZWFyY2gpIHtcbiAgICBmb3IgKGxldCBmb3JtIG9mIHNlYXJjaEZvcm1zKSBmb3JtLmFjdGlvbiA9ICcvc2VhcmNoJ1xuICB9XG59XG4iLCJpbXBvcnQgb25OYXZpZ2F0ZSBmcm9tICcuLi9saWIvb25OYXZpZ2F0ZSdcblxuXG5mdW5jdGlvbiBpZGVudGlmeUN1cnJlbnRQYWdlICgpIHtcbiAgaWYgKCFkb2N1bWVudC5ib2R5KSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdDb3VsZCBub3QgbG9jYXRlIGRvY3VtZW50LmJvZHknKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5kYXRhc2V0LnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGlkZW50aWZ5Q3VycmVudFBhZ2UoKVxuICBvbk5hdmlnYXRlKCgpID0+IGlkZW50aWZ5Q3VycmVudFBhZ2UoKSlcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgYWRkVGhlbWVCeVRhZyAgICAgICB9IGZyb20gJy4vYWRkVGhlbWVCeVRhZydcbmltcG9ydCB7IGRlZmF1bHQgYXMgYWRkVU1TTEF0dHJpYnV0aW9uICB9IGZyb20gJy4vYWRkVU1TTEF0dHJpYnV0aW9uJ1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBhbmltYXRlTG9nb3MgICAgICAgIH0gZnJvbSAnLi9hbmltYXRlTG9nb3MnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aWZ5Q3VycmVudFBhZ2UgfSBmcm9tICcuL2lkZW50aWZ5Q3VycmVudFBhZ2UnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIElFQmFubmVyTWVzc2FnZSAgICAgfSBmcm9tICcuL0lFQmFubmVyTWVzc2FnZSdcbmltcG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0VHJhbnNjcmlwdHMgICB9IGZyb20gJy4vZm9ybWF0VHJhbnNjcmlwdHMnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGdvb2dsZUN1c3RvbVNlYXJjaCAgfSBmcm9tICcuL2dvb2dsZUN1c3RvbVNlYXJjaCdcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWFrZVBsYWNlaG9sZGVyICAgICB9IGZyb20gJy4vbWFrZVBsYWNlaG9sZGVyJ1xuXG5cbmNvbnN0IExHQlRUaGVtZSA9IGBcbi5zdGxwci1sb2dvIC5sb2dvLWJhciB7XG4gIHN0cm9rZS13aWR0aDogMC41cHg7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xufVxuXG4uc3RscHItbG9nbyAubG9nby1iYXItMSB7IGNvbG9yOiAjZDYyMDIxOyBmaWxsOiAjZDYyMDIxICFpbXBvcnRhbnQ7IH1cbi5zdGxwci1sb2dvIC5sb2dvLWJhci0yIHsgY29sb3I6ICNmYWEyMWI7IGZpbGw6ICNmYWEyMWIgIWltcG9ydGFudDsgfVxuLnN0bHByLWxvZ28gLmxvZ28tYmFyLTMgeyBjb2xvcjogIzAwNmI3MTsgZmlsbDogIzAwNmI3MSAhaW1wb3J0YW50OyB9XG4uc3RscHItbG9nbyAubG9nby1iYXItNCB7IGNvbG9yOiAjMjM0MDkzOyBmaWxsOiAjMjM0MDkzICFpbXBvcnRhbnQ7IH1cbmBcblxuXG4vLyBQbHVnaW5cbi8vIGZuOiAgICAgIHBsdWdpbiBmdW5jdGlvbi5cbi8vIGVuYWJsZWQ6IHdoZXRoZXIgb3Igbm90IHBsdWdpbiBzaG91bGQgcnVuXG4vLyBhcmdzIFtvcHRpb25hbF06IGFyZ3VtZW50cyB0byBwYXNzIGludG8gcGx1Z2luXG4vLyBBIHBsdWdpbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBhcmd1bWVudHNcblxuY29uc3QgcGx1Z2lucyA9IFtcbiAgeyBmbjogYWRkVU1TTEF0dHJpYnV0aW9uLCAgZW5hYmxlZDogdHJ1ZSB9LFxuICB7IGZuOiBhbmltYXRlTG9nb3MsICAgICAgICBlbmFibGVkOiB0cnVlIH0sXG4gIHsgZm46IGlkZW50aWZ5Q3VycmVudFBhZ2UsIGVuYWJsZWQ6IHRydWUgfSxcbiAgeyBmbjogZm9ybWF0VHJhbnNjcmlwdHMsICAgZW5hYmxlZDogdHJ1ZSB9LFxuICB7IGZuOiBnb29nbGVDdXN0b21TZWFyY2gsICBlbmFibGVkOiB0cnVlIH0sXG4gIHsgZm46IG1ha2VQbGFjZWhvbGRlciwgICAgIGVuYWJsZWQ6IHRydWUgfSxcblxuICB7IGZuOiBhZGRUaGVtZUJ5VGFnLCAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgIGFyZ3M6IFtbJ0xHQlQnLCAnTEdCVFEnXSwgTEdCVFRoZW1lXSxcbiAgfSxcblxuICB7IGZuOiBJRUJhbm5lck1lc3NhZ2UsICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBhcmdzOiBbJ05vdCBhbGwgZmVhdHVyZXMgbWF5IGJlIHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciddLFxuICB9LFxuXVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpbnNcbiIsIi8vIEdpdmVuIGFuIGFzcGVjdCByYXRpbywgYXMgYSBzdHJpbmcgb2Ygd2lkdGg6aGVpZ2h0IChlLmcuIFwiMTY6OVwiKSxcbi8vIHJldHVybiBhIEhUTUwgbWFya3VwIHRoYXQgc2F0aXNmaWVzIHRoZSBBc3BlY3QgUmF0aW9cbi8vIHBhZGRpbmcgaXMgSGVpZ2h0IC8gV2lkdGhcblxuY29uc3QgYXNwZWN0UmF0aW9QYXR0ZXJuID0gL14oXFxkKyk6KFxcZCspJC9cblxuXG5mdW5jdGlvbiByb3VuZCAobnVtYmVyLCBwbGFjZXMgPSAwKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqICgxMCAqKiBwbGFjZXMpKSAvICgxMCAqKiBwbGFjZXMpXG59XG5cblxuY29uc3Qgc3R5bGVzID0gYFxuLnBsYWNlaG9sZGVyLWZyYW1lIHtcbiAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIC8qIEFzcGVjdCBSYXRpbyBIYWNrICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGxhY2Vob2xkZXItaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcblxuICAvKiBodHRwOi8vcHJvamVjdHMudmVyb3UubWUvY3NzM3BhdHRlcm5zLyN6aWctemFnICovXG4gIC0tc3RyaXBlLWNvbG9yOiAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXN0cmlwZS1jb2xvcikgMjUlLCB0cmFuc3BhcmVudCAyNSUpIC0yNXB4IDAsXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tc3RyaXBlLWNvbG9yKSAyNSUsIHRyYW5zcGFyZW50IDI1JSkgLTI1cHggMCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCB2YXIoLS1zdHJpcGUtY29sb3IpIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXN0cmlwZS1jb2xvcikgMjUlLCB0cmFuc3BhcmVudCAyNSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgLyogQXNwZWN0IFJhdGlvIEhhY2sgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYFxuXG5cbmxldCBwbGFjZWhvbGRlclN0eWxlc1xuXG5cbmZ1bmN0aW9uIG1ha2VQbGFjZWhvbGRlciAoYXNwZWN0UmF0aW8gPSAnNDozJywgdGV4dCA9IGBQbGFjZWhvbGRlciAke2FzcGVjdFJhdGlvfWApIHtcbiAgaWYgKHR5cGVvZiBhc3BlY3RSYXRpbyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBleHBlY3RlZCBTdHJpbmcuIEluc3RlYWQgZ290ICR7dHlwZW9mIGFzcGVjdFJhdGlvfSwgJHthc3BlY3RSYXRpb31gKVxuICB9XG4gIGlmICghYXNwZWN0UmF0aW9QYXR0ZXJuLnRlc3QoYXNwZWN0UmF0aW8pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBhc3BlY3RSYXRpbyBtdXN0IGJlIGluIGZvcm1hdCB3aWR0aDpoZWlnaHQgKGUuZy4gXCIxNjo5XCIpLiBJbnN0ZWFkIGdvdCAke2FzcGVjdFJhdGlvfWApXG4gIH1cblxuICAvLyBMb2FkIHN0eWxlcyBPTkxZIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcbiAgaWYgKCFwbGFjZWhvbGRlclN0eWxlcykge1xuICAgIHBsYWNlaG9sZGVyU3R5bGVzID0gR2xhZGUuaW5zZXJ0Q1NTKHN0eWxlcylcbiAgfVxuXG4gIGNvbnN0IFssIHdpZHRoLCBoZWlnaHRdID0gYXNwZWN0UmF0aW8ubWF0Y2goYXNwZWN0UmF0aW9QYXR0ZXJuKVxuICBjb25zdCBwYWRkaW5nVG9wID0gTnVtYmVyKGhlaWdodCkgLyBOdW1iZXIod2lkdGgpXG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIHBsYWNlaG9sZGVyLmNsYXNzTmFtZSA9ICdwbGFjZWhvbGRlci1mcmFtZSdcbiAgcGxhY2Vob2xkZXIuc3R5bGUgPSBgcGFkZGluZy10b3A6ICR7cm91bmQocGFkZGluZ1RvcCAqIDEwMCwgNSl9JWBcbiAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbm5lclwiPiR7dGV4dH08L2Rpdj5gXG5cbiAgcmV0dXJuIHBsYWNlaG9sZGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBHbGFkZS5tYWtlUGxhY2Vob2xkZXIgPSBtYWtlUGxhY2Vob2xkZXJcbn1cbiIsIi8vIGFkZElzb2xhdGVkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBjYWxsYmFjaylcbi8vIGEgd3JhcHBlciBmb3IgYWRkRXZlbnRMaXN0ZW5lciB3aGljaCBzZWxmLWRlc3RydWN0cyBvbiBwYWdlIG5hdmlnYXRpb25cblxuZnVuY3Rpb24gYWRkSXNvbGF0ZWRFdmVudExpc3RlbmVyIChlbGVtZW50LCB0eXBlLCBjYWxsYmFjaykge1xuICBjb25zdCBjdXJyZW50UGFnZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCBzdGFydGluZ1BhZ2UgPSBjdXJyZW50UGFnZSgpXG5cbiAgZnVuY3Rpb24gaXNvbGF0ZWRDYWxsYmFjayAoZXZlbnQpIHtcbiAgICB2YXIgaGFzQ2hhbmdlZFBhZ2VzID0gKHN0YXJ0aW5nUGFnZSAhPT0gY3VycmVudFBhZ2UoKSlcblxuICAgIGlmIChoYXNDaGFuZ2VkUGFnZXMpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBpc29sYXRlZENhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKGV2ZW50KVxuICB9XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGlzb2xhdGVkQ2FsbGJhY2spXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXNvbGF0ZWRFdmVudExpc3RlbmVyXG4iLCJmdW5jdGlvbiBMaXN0QiAoZGF0YXNldCA9IHt9LCBsaXN0VGl0bGUgPSAnJykge1xuICBjb25zdCBmaXJzdEl0ZW0gPSBkYXRhc2V0WzBdXG5cbiAgY29uc3QgaXRlbXNNYXJrdXAgPSBkYXRhc2V0XG4gICAgLm1hcCgoe3RpdGxlLCBsaW5rLCBkaXNwbGF5fSkgPT4ge1xuICAgICAgaWYgKGRpc3BsYXkgPT09IGZhbHNlKSByZXR1cm4gJydcblxuICAgICAgcmV0dXJuIGBcbiAgICAgIDxsaSBjbGFzcz1cIkxpc3RCLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzcz1cIlByb21vTGlua1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGl0bGUgfHwgJyd9XCJcbiAgICAgICAgICAke2xpbmsgPyBgaHJlZj1cIiR7bGlua31cImAgOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgICR7dGl0bGUgfHwgJyd9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+YFxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgcmV0dXJuIGBcbiAgPGRpdiBjbGFzcz1cIkxpc3RCXCI+XG4gICAgPGRpdiBjbGFzcz1cIkxpc3RCLWhlYWRlclwiPlxuICAgICAgJHtsaXN0VGl0bGVcbiAgICAgICAgPyBgPGRpdiBjbGFzcz1cIkxpc3RCLWhlYWRlci10aXRsZVwiPiR7bGlzdFRpdGxlfTwvZGl2PmBcbiAgICAgICAgOiAnPGRpdiBjbGFzcz1cIkxpc3RCLWhlYWRlci10aXRsZVwiIGRhdGEtbm8tdGl0bGU9XCJcIj48L2Rpdj4nXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiTGlzdEItaXRlbXMtZmlyc3RcIj5cbiAgICAgIDxwcy1wcm9tbyBjbGFzcz1cIlByb21vQlwiIGRhdGEtY29udGVudC10eXBlPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItbWVkaWFcIj5cbiAgICAgICAgICAgICR7KGZpcnN0SXRlbSAmJiBmaXJzdEl0ZW0uaW1hZ2UpXG4gICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cIkxpc3RcIiAke2ZpcnN0SXRlbS5saW5rID8gYGhyZWY9XCIke2ZpcnN0SXRlbS5saW5rfVwiYCA6ICcnfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIkltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiJHtmaXJzdEl0ZW0uaW1hZ2V9XCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIiR7Zmlyc3RJdGVtLnRpdGxlIHx8ICcnfVwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke2ZpcnN0SXRlbS5pbWFnZX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9hPmBcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcHMtcHJvbW8+XG4gICAgPC9kaXY+XG5cbiAgICA8b2wgY2xhc3M9XCJMaXN0Qi1pdGVtc1wiPiR7aXRlbXNNYXJrdXB9PC9vbD5cbiAgPC9kaXY+YFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCXG4iLCJmdW5jdGlvbiBmb3JtYXRUaW1lc3RhbXAgKHN0YW1wKSB7XG4gIGlmICghc3RhbXApIHJldHVybiAnJ1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdGFtcClcblxuICBjb25zdCBkYXRlU3RhbXAgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLFxuICAgIHttb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgeWVhcjogJ251bWVyaWMnfVxuICApXG4gIGNvbnN0IHRpbWVTdGFtcCA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsXG4gICAgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnIH1cbiAgKVxuXG4gIC8vIFRPRE86IHRleHRDb250ZW50IHNob3VsZCByZXR1cm4gaW4gZm9ybWF0IFwiMiBob3VycyBhZ29cIlxuICByZXR1cm4gYFxuICA8ZGl2XG4gICAgY2xhc3M9XCJQcm9tb1hTbWFsbC10aW1lc3RhbXBcIlxuICAgIGRhdGEtdGltZXN0YW1wPVwiJHtOdW1iZXIoZGF0ZSl9XCJcbiAgICBkYXRhLWRhdGU9XCIke2RhdGVTdGFtcH0gYXQgJHt0aW1lU3RhbXB9XCJcbiAgICBkYXRhLXByb21vLWRhdGU9XCIke2RhdGVTdGFtcH1cIlxuICAgIGRhdGEtc2hvdy10aW1lc3RhbXA9XCJ0cnVlXCJcbiAgPlxuICAgICR7ZGF0ZVN0YW1wfVxuICA8L2Rpdj5gXG59XG5cblxuZnVuY3Rpb24gTGlzdEMgKGRhdGFzZXQgPSB7fSwgbGlzdFRpdGxlID0gJycpIHtcbiAgY29uc3QgaXRlbXNNYXJrdXAgPSBkYXRhc2V0XG4gICAgLm1hcCgoe3RpdGxlLCBsaW5rLCBpbWFnZSwgdGltZXN0YW1wLCBkaXNwbGF5fSkgPT4ge1xuICAgICAgaWYgKGRpc3BsYXkgPT09IGZhbHNlKSByZXR1cm4gJydcblxuICAgICAgcmV0dXJuIGBcbiAgICAgIDxsaSBjbGFzcz1cIkxpc3RDLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgPHBzLXByb21vIGNsYXNzPVwiUHJvbW9YU21hbGxcIiBkYXRhLWNvbnRlbnQtdHlwZT1cIlwiICR7IWltYWdlID8gJ2RhdGEtbm8tbWVkaWE9XCJcIicgOiAnJ30+XG4gICAgICAgICAgJHtpbWFnZVxuICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHJvbW9YU21hbGwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzcz1cIkxpbmtcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RpdGxlIHx8ICcnfVwiXG4gICAgICAgICAgICAgICAgJHtsaW5rID8gYGhyZWY9XCIke2xpbmt9XCJgIDogJyd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIkltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIiR7dGl0bGUgfHwgJyd9XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiJHtpbWFnZX1cIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiJHtpbWFnZX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb1hTbWFsbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHJvbW9YU21hbGwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJMaW5rXCIgJHtsaW5rID8gYGhyZWY9XCIke2xpbmt9XCJgIDogJyd9PiR7dGl0bGUgfHwgJyd9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHJvbW9YU21hbGwtYnlsaW5lXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb1hTbWFsbC1kYXRlXCI+XG4gICAgICAgICAgICAgICAgJHtmb3JtYXRUaW1lc3RhbXAodGltZXN0YW1wKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wcy1wcm9tbz5cbiAgICAgIDwvbGk+YFxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgcmV0dXJuIGBcbiAgPGRpdiBjbGFzcz1cIkxpc3RDXCI+XG4gICAgPGRpdiBjbGFzcz1cIkxpc3RDLWhlYWRlclwiPlxuICAgICAgJHtsaXN0VGl0bGVcbiAgICAgICAgPyBgPGRpdiBjbGFzcz1cIkxpc3RDLWhlYWRlci10aXRsZVwiPiR7bGlzdFRpdGxlfTwvZGl2PmBcbiAgICAgICAgOiAnPGRpdiBjbGFzcz1cIkxpc3RDLWhlYWRlci10aXRsZVwiIGRhdGEtbm8tdGl0bGU9XCJcIj48L2Rpdj4nXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8dWwgY2xhc3M9XCJMaXN0Qy1pdGVtc1wiPiR7aXRlbXNNYXJrdXB9PC91bD5cbiAgPC9kaXY+YFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWVzdGFtcCAoc3RhbXApIHtcbiAgaWYgKCFzdGFtcCkgcmV0dXJuICcnXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YW1wKVxuXG4gIGNvbnN0IGRhdGVTdGFtcCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsXG4gICAge21vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCB5ZWFyOiAnbnVtZXJpYyd9XG4gIClcbiAgY29uc3QgdGltZVN0YW1wID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyxcbiAgICB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycgfVxuICApXG5cbiAgLy8gVE9ETzogdGV4dENvbnRlbnQgc2hvdWxkIHJldHVybiBpbiBmb3JtYXQgXCIyIGhvdXJzIGFnb1wiXG4gIHJldHVybiBgXG4gIDxkaXZcbiAgICBjbGFzcz1cIlByb21vQi10aW1lc3RhbXBcIlxuICAgIGRhdGEtdGltZXN0YW1wPVwiJHtOdW1iZXIoZGF0ZSl9XCJcbiAgICBkYXRhLWRhdGU9XCIke2RhdGVTdGFtcH0gYXQgJHt0aW1lU3RhbXB9XCJcbiAgICBkYXRhLXByb21vLWRhdGU9XCIke2RhdGVTdGFtcH1cIlxuICAgIGRhdGEtc2hvdy10aW1lc3RhbXA9XCJ0cnVlXCJcbiAgPlxuICAgICR7ZGF0ZVN0YW1wfVxuICA8L2Rpdj5gXG59XG5cblxuZnVuY3Rpb24gTGlzdEQgKGRhdGFzZXQsIGxpc3RUaXRsZSkge1xuICBjb25zdCBpdGVtc01hcmt1cCA9IGRhdGFzZXRcbiAgICAubWFwKCh7dGl0bGUsIGxpbmssIGltYWdlLCBkZXNjcmlwdGlvbiwgYXVkaW8sIGF1dGhvcnMsIHRpbWVzdGFtcCwgZGlzcGxheX0pID0+IHtcbiAgICAgIGlmIChkaXNwbGF5ID09PSBmYWxzZSkgcmV0dXJuICcnXG5cbiAgICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3M9XCJMaXN0RC1pdGVtcy1pdGVtXCI+XG4gICAgICAgIDxwcy1wcm9tbyBjbGFzcz1cIlByb21vQlwiIGRhdGEtY29udGVudC10eXBlPVwiXCIgZGF0YS1pbWFnZS1hbGlnbj1cInRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItY29udGVudFwiICR7IWltYWdlID8gJ2RhdGEtbm8tbWVkaWE9XCJcIicgOiAnJ30+XG4gICAgICAgICAgICAke2ltYWdlXG4gICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJQcm9tb0ItbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RpdGxlIHx8ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAke2xpbmsgPyBgaHJlZj1cIiR7bGlua31cImAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIke3RpdGxlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiJHtpbWFnZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke2ltYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlByb21vQi10aXRsZVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cIkxpbmtcIiAke2xpbmsgPyBgaHJlZj1cIiR7bGlua31cImAgOiAnJ30+XG4gICAgICAgICAgICAgICAgJHt0aXRsZSB8fCAnJ31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItYnlsaW5lXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItYXV0aG9yTmFtZVwiPlxuICAgICAgICAgICAgICAgICR7KGF1dGhvcnMgfHwgW10pLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAke2F1dGhvcnMgPyAnPHNwYW4gY2xhc3M9XCJQcm9tb0ItYnlsaW5lLWRpdmlkZXJcIj4sPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlByb21vQi1kYXRlXCI+XG4gICAgICAgICAgICAgICAgJHtmb3JtYXRUaW1lc3RhbXAodGltZXN0YW1wKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiUHJvbW9CLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5gXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJQcm9tb0ItYXVkaW8tbGFiZWxcIj5cbiAgICAgICAgICAke2F1ZGlvXG4gICAgICAgICAgICA/IGA8cHMtc3RyZWFtXG4gICAgICAgICAgICAgICAgIGRhdGEtc3RyZWFtLXByb2dyYW0tbmFtZT1cIiR7dGl0bGUgfHwgJyd9XCJcbiAgICAgICAgICAgICAgICAgb24tZGVtYW5kPVwiXCJcbiAgICAgICAgICAgICAgICAgc21hbGw9XCJcIlxuICAgICAgICAgICAgICAgICBleHRlcm5hbD1cIlwiXG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgIDxwcy1zdHJlYW0tdXJsIGRhdGEtc3RyZWFtLXVybD1cIiR7YXVkaW99XCI+PC9wcy1zdHJlYW0tdXJsPlxuXG4gICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJTdHJlYW1QaWxsXCI+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJTdHJlYW1QaWxsLWljb25XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiU3RyZWFtUGlsbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwbGF5LWljb25cIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIlN0cmVhbVBpbGwtaWNvblBhdXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYXVzZS1pY29uXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlN0cmVhbVBpbGwtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlN0cmVhbVBpbGwtZHVyYXRpb25cIj5MaXN0ZW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvcHMtc3RyZWFtPmBcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcHMtcHJvbW8+XG4gICAgICA8L2xpPmBcbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJMaXN0RFwiPlxuICAgIDxkaXYgY2xhc3M9XCJMaXN0RC1oZWFkZXJcIj5cbiAgICAgICR7bGlzdFRpdGxlXG4gICAgICAgID8gYDxkaXYgY2xhc3M9XCJMaXN0RC1oZWFkZXItdGl0bGVcIj4ke2xpc3RUaXRsZX08L2Rpdj5gXG4gICAgICAgIDogJzxkaXYgY2xhc3M9XCJMaXN0RC1oZWFkZXItdGl0bGVcIiBkYXRhLW5vLXRpdGxlPVwiXCI+PC9kaXY+J1xuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPHVsIGNsYXNzPVwiTGlzdEQtaXRlbXNcIj4ke2l0ZW1zTWFya3VwfTwvdWw+XG4gIDwvZGl2PmBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RFxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG4vLyBjb25maWdcbi8vICBwcm9ncmFtOiAnU3QuIExvdWlzIG9uIHRoZSBBaXInLFxuLy8gIGVwaXNvZGVJRDogJzAwMDAwMTc0LTIyMzEtZGQxYi1hNzdmLTNiZjFhNWM2MDAwMCcsXG4vLyAgZXBpc29kZVRpdGxlOiAn4oCYU3VtbWVyIE9mIFZpb2xlbmNl4oCZIEtlZXBzIFN0cmF5IFJlc2N1ZeKAmXMgRG9ubmEgTG9jaG1hbiBCdXN5IFNhdmluZyBEb2dzJyxcbi8vICBhdWRpb0Zvcm1hdDogJ2F1ZGlvL21wZWcnLFxuLy8gIGF1ZGlvOiAnaHR0cHM6Ly9rd211LWFkc3dpenouc3RyZWFtZ3V5czEuY29tL3dha2VfdXBfdG9fcG9saXRpY3MvMjAyMDAxMjQwMDU3MjAtMV9JT1dBX0NBVUNVU0VTLm1wMycsXG4vLyAgc21hbGw6IHRydWUsXG5cbmNvbnN0IFN0cmVhbVBpbGwgPSBjb25maWcgPT4ge1xuICBjb25zdCB7XG4gICAgYXVkaW8sXG4gICAgYXVkaW9Gb3JtYXQsXG4gICAgZXBpc29kZUlELFxuICAgIGVwaXNvZGVUaXRsZSxcbiAgICBwcm9ncmFtLFxuICAgIHNtYWxsLFxuICB9ID0gY29uZmlnXG5cbiAgaWYgKCFhdWRpbykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNyZWF0ZSBBdWRpbyBCdXR0b24gYmVjYXVzZSBhdWRpbyBmaWxlIGlzIG1pc3NpbmcnKVxuICB9XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBidXR0b24uaW5uZXJIVE1MID0gYFxuICA8cHMtc3RyZWFtXG4gICAgJHtwcm9ncmFtID8gYGRhdGEtc3RyZWFtLW5hbWU9XCIke3Byb2dyYW19XCJgIDogJyd9XG4gICAgJHtlcGlzb2RlSUQgPyBgZGF0YS1zdHJlYW0taWQ9XCIke2VwaXNvZGVJRH1cImAgOiAnJ31cbiAgICAke2VwaXNvZGVUaXRsZSA/IGBkYXRhLXN0cmVhbS1wcm9ncmFtLW5hbWU9XCIke2VwaXNvZGVUaXRsZX1cImAgOiAnJ31cbiAgICAke3NtYWxsID8gJ3NtYWxsJyA6ICcnfVxuICAgIG9uLWRlbWFuZFxuICAgIGV4dGVybmFsXG4gID5cbiAgICA8cHMtc3RyZWFtLXVybFxuICAgICAgZGF0YS1zdHJlYW0tZm9ybWF0PVwiJHthdWRpb0Zvcm1hdCB8fCAnYXVkaW8vbXBlZyd9XCJcbiAgICAgIGRhdGEtc3RyZWFtLXVybD1cIiR7YXVkaW99XCJcbiAgICA+XG4gICAgPC9wcy1zdHJlYW0tdXJsPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cIlN0cmVhbVBpbGxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiU3RyZWFtUGlsbC1pY29uV3JhcHBlclwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiU3RyZWFtUGlsbC1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiI3BsYXktaWNvblwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiU3RyZWFtUGlsbC1pY29uUGF1c2VcIj48dXNlIHhsaW5rOmhyZWY9XCIjcGF1c2UtaWNvblwiPjwvdXNlPjwvc3ZnPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cIlN0cmVhbVBpbGwtdGV4dFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIlN0cmVhbVBpbGwtZHVyYXRpb25cIj5MaXN0ZW48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvcHMtc3RyZWFtPmBcblxuICByZXR1cm4gYnV0dG9uXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtUGlsbFxuIiwiY29uc3Qgc3BsaXRTdHJpbmcgID0gc3RyaW5nID0+IHN0cmluZyA/IHN0cmluZy5zcGxpdCgvLFxcYi8pIDogW11cblxuXG5mdW5jdGlvbiBnZXRNZXRhZGF0YSAoKSB7XG4gIGlmICghYnJpZ2h0c3BvdERhdGFMYXllcikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcignQ291bGQgbm90IHJlYWQgQnJpZ2h0c3BvdCBEYXRhIExheWVyLicpXG4gIH1cblxuICBpZiAoIWJyaWdodHNwb3REYXRhTGF5ZXIua2V5d29yZHMgfHwgIWJyaWdodHNwb3REYXRhTGF5ZXIua2V5d29yZHMudHJpbSgpKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yIChgQ291bGQgbm90IHJlYWQgVGFncyBmcm9tIERhdGEgTGF5ZXIsIFwiJHticmlnaHRzcG90RGF0YUxheWVyLmtleXdvcmRzfVwiLmApXG4gIH1cblxuICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICBzdG9yeVRpdGxlOiAgICAgICAgYnJpZ2h0c3BvdERhdGFMYXllci5zdG9yeVRpdGxlICAgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKT8udGV4dENvbnRlbnQgfHwgZG9jdW1lbnQudGl0bGUsXG4gICAgcGFnZVR5cGU6ICAgICAgICAgIGJyaWdodHNwb3REYXRhTGF5ZXIucGFnZVR5cGUgICAgIHx8ICcnLFxuICAgIHByb2dyYW06ICAgICAgICAgICBicmlnaHRzcG90RGF0YUxheWVyLnByb2dyYW0gICAgICB8fCAnJyxcbiAgICB0aW1lem9uZTogICAgICAgICAgYnJpZ2h0c3BvdERhdGFMYXllci50aW1lem9uZSAgICAgfHwgJ1VTL0NlbnRyYWwnLFxuICAgIGhhc0lubGluZUF1ZGlvOiAgICAhIShicmlnaHRzcG90RGF0YUxheWVyLmlubGluZUF1ZGlvIHx8IDApLFxuICAgIHB1Ymxpc2hlZERhdGU6ICAgICBicmlnaHRzcG90RGF0YUxheWVyLnB1Ymxpc2hlZERhdGUgPyBuZXcgRGF0ZShicmlnaHRzcG90RGF0YUxheWVyLnB1Ymxpc2hlZERhdGUpIDogJycsXG5cbiAgICBhdXRob3JzOiAgICAgICAgICAgc3BsaXRTdHJpbmcoYnJpZ2h0c3BvdERhdGFMYXllci5hdXRob3IgICB8fCAnJyksXG4gICAgY2F0ZWdvcmllczogICAgICAgIHNwbGl0U3RyaW5nKGJyaWdodHNwb3REYXRhTGF5ZXIuY2F0ZWdvcnkgfHwgJycpLFxuICAgIHRhZ3M6ICAgICAgICAgICAgICBzcGxpdFN0cmluZyhicmlnaHRzcG90RGF0YUxheWVyLmtleXdvcmRzIHx8ICcnKSxcblxuICAgIGJyaWdodHNwb3RTdG9yeUlEOiBicmlnaHRzcG90RGF0YUxheWVyLmJzcFN0b3J5SWQgICB8fCBudWxsLFxuICAgIE5QUlN0b3J5SUQ6ICAgICAgICBicmlnaHRzcG90RGF0YUxheWVyLm5wclN0b3J5SWQgICB8fCBudWxsLFxuICAgIHN0YXRpb25JRDogICAgICAgICBicmlnaHRzcG90RGF0YUxheWVyLnN0YXRpb25PcmdJZCB8fCBudWxsLFxuICAgIHN0YXRpb246ICAgICAgICAgICBicmlnaHRzcG90RGF0YUxheWVyLnN0YXRpb24gICAgICB8fCAnU3QuIExvdWlzIFB1YmxpYyBSYWRpbycsXG4gICAgc2l0ZU5hbWU6ICAgICAgICAgIGJyaWdodHNwb3REYXRhTGF5ZXIuc2l0ZU5hbWUgICAgIHx8ICdTVExQUicsXG4gICAgaXNOUFJTdGF0aW9uOiAgICAgIGJyaWdodHNwb3REYXRhTGF5ZXIubnByQ21zU2l0ZSAgIHx8IGZhbHNlLFxuXG4gICAgLy8gc3RvcnlPcmdJZDogZGlzcGxheXMgMCBvbiBzdG9yeSBwYWdlc1xuICAgIC8vIHN0b3J5VGhlbWU6IGR1cGxpY2F0ZSBvZiBwYWdlVHlwZVxuICAgIC8vIHdvcmRjb3VudDogZGlzcGxheXMgMCBvbiBzdG9yeSBwYWdlc1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWV0YWRhdGFcbiIsIi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBhZGRJc29sYXRlZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2FkZElzb2xhdGVkRXZlbnRMaXN0ZW5lcidcbmltcG9ydCB7IGRlZmF1bHQgYXMgZ2V0TWV0YWRhdGEgICAgICAgICAgICAgIH0gZnJvbSAnLi9nZXRNZXRhZGF0YSdcbmltcG9ydCB7IGRlZmF1bHQgYXMgaW5zZXJ0Q1NTICAgICAgICAgICAgICAgIH0gZnJvbSAnLi9pbnNlcnRDU1MnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGluc2VydFNjcmlwdCAgICAgICAgICAgICB9IGZyb20gJy4vaW5zZXJ0U2NyaXB0J1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBpbnNlcnRTdHlsZXNoZWV0ICAgICAgICAgfSBmcm9tICcuL2luc2VydFN0eWxlc2hlZXQnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBhZ2VNYXRjaGVzICAgICAgICAgICAgICB9IGZyb20gJy4vcGFnZU1hdGNoZXMnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNldElzb2xhdGVkSW50ZXJ2YWwgICAgICB9IGZyb20gJy4vc2V0SXNvbGF0ZWRJbnRlcnZhbCdcblxuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBkZWZhdWx0IGFzIExpc3RCICAgICAgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlzdEInXG5pbXBvcnQgeyBkZWZhdWx0IGFzIExpc3RDICAgICAgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlzdEMnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIExpc3REICAgICAgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlzdEQnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN0cmVhbVBpbGwgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RyZWFtUGlsbCdcblxuXG5jb25zdCBHbGFkZSA9IHtcbiAgLy8gRHluYW1pY2FsbHkgaW5zZXJ0IHNjcmlwdHMgYW5kIHN0eWxlc1xuICBpbnNlcnRDU1MsXG4gIGluc2VydFNjcmlwdCxcbiAgaW5zZXJ0U3R5bGVzaGVldCxcblxuICAvLyBNYWtlIG5vbi1zYWZlIEphdmFTY3JpcHQgZmVhdHVyZXMgc2FmZVxuICBhZGRJc29sYXRlZEV2ZW50TGlzdGVuZXIsXG4gIHNldElzb2xhdGVkSW50ZXJ2YWwsXG5cbiAgLy8gT3RoZXIgaGVscGVyIGZ1bmN0aW9uc1xuICBnZXRNZXRhZGF0YSxcbiAgcGFnZU1hdGNoZXMsXG5cbiAgLy8gUmVjcmVhdGUgR3JvdmUgY29tcG9uZW5ldHMgd2l0aCBjdXN0b20gZGF0YVxuICBjb21wb25lbnRzOiB7XG4gICAgTGlzdEIsXG4gICAgTGlzdEMsXG4gICAgTGlzdEQsXG4gICAgU3RyZWFtUGlsbCxcbiAgfSxcbn1cblxuXG4vLyBIb29rIGludG8gR3JvdmUgTmF2aWdhdGlvblxuR2xhZGUuY3VycmVudFBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IEdsYWRlLmN1cnJlbnRQYWdlXG5cbiAgLy8gZGlzcGF0Y2ggR3JvdmUgTmF2aWdhdGUgRXZlbnRcbiAgaWYgKGN1cnJlbnRQYWdlICE9PSBwcmV2aW91c1BhZ2UpIHtcbiAgICBjb25zdCBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdncm92ZS1uYXZpZ2F0ZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgcHJldmlvdXNQYWdlOiBwcmV2aW91c1BhZ2UsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuYXZpZ2F0ZUV2ZW50KVxuICAgIEdsYWRlLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2VcbiAgfVxufSwgMTAwKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdsYWRlXG4iLCJpbXBvcnQgb25OYXZpZ2F0ZSBmcm9tICcuLi9saWIvb25OYXZpZ2F0ZSdcblxuXG4vLyBpbnNlcnRDU1MgKG1hcmt1cCBbLCBzaG91bGRQZXJzaXN0XSlcbi8vIGluc2VydHMgYSBzdHlsZSB0YWcgd2l0aCByYXcgQ1NTXG5cbmZ1bmN0aW9uIGluc2VydENTUyAobWFya3VwLCBzaG91bGRQZXJzaXN0ID0gZmFsc2UpIHtcbiAgLy8gQ3JlYXRlIHRoZSBzdHlsZXMgYW5kIGFwcGVuZCB0aGVtXG4gIGNvbnN0IHN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVzLnRleHRDb250ZW50ID0gbWFya3VwXG5cbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHN0eWxlcylcblxuICAvLyBSZW1vdmUgc3R5bGVzIHVubGVzcyBzZXQgdG8gcGVyc2lzdFxuICBpZiAoIXNob3VsZFBlcnNpc3QpIHtcbiAgICBvbk5hdmlnYXRlKCgpID0+IHN0eWxlcy5yZW1vdmUoKSwgeyBvbmNlOiB0cnVlIH0pXG4gIH1cblxuICAvLyBQYXNzIGFuIEhUTUwgUmVmZXJlbmNlIHRvIHRoZSBsb2FkZWQgQ1NTXG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRDU1NcbiIsImltcG9ydCBvbk5hdmlnYXRlIGZyb20gJy4uL2xpYi9vbk5hdmlnYXRlJ1xuXG5cbi8vIGluc2VydFNjcmlwdCAoYXR0cmlidXRlcyBbLCBzaG91bGRQZXJzaXN0XSlcbi8vIGxvYWQgYSBnaXZlbiBzY3JpcHQgaWYgbm90IGFscmVhZHkgcHJlc2VudCBvbiB0aGUgcGFnZVxuXG4vLyBXQVJOSU5HOiBpbnNlcnRTY3JpcHQgaGFzIGEgXCJzaG91bGRQZXJzaXN0XCIgcHJvcGVydHlcbi8vICAgcmVtb3ZpbmcgYSBzY3JpcHQgZG9lcyBub3QgY2FuY2VsIGludGVydmFscy9ldmVudCBMaXN0ZW5lcnMgc2V0IGJ5IGl0XG4vLyAgIHNob3VsZFBlcnNpc3QgaXMgYSBwcm9wZXJ0eSBiZWNhdXNlIGluc2VydFNjcmlwdCBmYWlscyBpZiB0aGUgc2NyaXB0IGlzXG4vLyAgIGFscmVhZHkgcHJlc2VudC5cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gIGZvciAoY29uc3QgW2F0dHJpYnV0ZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgLy8gc3VwcG9ydCBCb29sZWFuIEF0dHJpYnV0ZXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJylcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gaW5zZXJ0U2NyaXB0IChhdHRyaWJ1dGVzID0ge30sIHNob3VsZFBlcnNpc3QgPSBmYWxzZSkge1xuICAvLyBGaW5kIGFsbCBleHRlcm5hbCBzY3JpcHRzIG9uIHRoZSBwYWdlXG4gIGNvbnN0IHNjcmlwdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JyldXG4gIGNvbnN0IGV4dGVybmFsU2NyaXB0cyA9IHNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiBzY3JpcHQuc3JjKVxuXG4gIC8vIEZhaWwgbG91ZGx5IGlmIHNjcmlwdCB3YXMgbm90IHByb3ZpZGVkXG4gIGlmICghYXR0cmlidXRlcy5zcmMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjcmlwdCBzcmMgaXMgcmVxdWlyZWQuIFVzZSBzeW50YXggR2xhZGUuaW5zZXJ0U2NyaXB0KHtzcmM6IFwiUEFUSFwifSknKVxuICB9XG4gIC8vIEZhaWwgc2lsZW50bHkgaWYgc2NyaXB0IGlzIGFscmVhZHkgcHJlc2VudFxuICBpZiAoZXh0ZXJuYWxTY3JpcHRzLmluY2x1ZGVzKGF0dHJpYnV0ZXMuc3JjKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHNjcmlwdCBhbmQgaW5qZWN0IGl0IGludG8gdGhlIERPTVxuICBjb25zdCBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBhZGRBdHRyaWJ1dGVzKG5ld1NjcmlwdCwgYXR0cmlidXRlcylcblxuICBjb25zdCBsYXN0U2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdXG4gIGxhc3RTY3JpcHQuYWZ0ZXIobmV3U2NyaXB0KVxuXG4gIC8vIFJlbW92ZSBzY3JpcHQgaWYgc2V0IG5vdCB0byBwZXJzaXN0XG4gIC8vIFdBUk5JTkchIHJlbW92aW5nIHRoZSBzY3JpcHQgZG9lcyBub3QgY2FuY2VsIGludGVydmFscy9ldmVudExpc3RlbmVyc1xuICBpZiAoIXNob3VsZFBlcnNpc3QpIHtcbiAgICBvbk5hdmlnYXRlKCgpID0+IG5ld1NjcmlwdC5yZW1vdmUoKSwgeyBvbmNlOiB0cnVlIH0pXG4gIH1cblxuICAvLyBQYXNzIGFuIEhUTUwgUmVmZXJlbmNlIHRvIHRoZSBzY3JpcHRcbiAgcmV0dXJuIG5ld1NjcmlwdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydFNjcmlwdFxuIiwiaW1wb3J0IG9uTmF2aWdhdGUgZnJvbSAnLi4vbGliL29uTmF2aWdhdGUnXG5cblxuLy8gaW5zZXJ0U3R5bGVzaGVldCAoYXR0cmlidXRlcyBbLCBzaG91bGRQZXJzaXN0XSlcbi8vIGxvYWQgYSBnaXZlbiBzdHlsZXNoZWV0IGlmIG5vdCBhbHJlYWR5IHByZXNlbnQgb24gdGhlIHBhZ2VcblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gIGZvciAoY29uc3QgW2F0dHJpYnV0ZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgLy8gc3VwcG9ydCBCb29sZWFuIEF0dHJpYnV0ZXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJylcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCAoYXR0cmlidXRlcyA9IHt9LCBzaG91bGRQZXJzaXN0ID0gZmFsc2UpIHtcbiAgLy8gRmluZCBhbGwgc3R5bGVzaGVldHMgaW4gdGhlIHBhZ2VcbiAgdmFyIGxpbmtzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmsnKV1cbiAgdmFyIHN0eWxlc2hlZXRzID0gbGlua3MuZmlsdGVyKGxpbmsgPT4gbGluay5yZWwgPT09ICdzdHlsZXNoZWV0JylcblxuICBpZiAoIWF0dHJpYnV0ZXMuaHJlZikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3R5bGVzaGVldCBocmVmIGlzIHJlcXVpcmVkLiBVc2Ugc3ludGF4IEdsYWRlLmluc2VydFN0eWxlc2hlZXQoe2hyZWY6IFwiUEFUSFwifSknKVxuICB9XG5cbiAgaWYgKHN0eWxlc2hlZXRzLmluY2x1ZGVzKGF0dHJpYnV0ZXMuaHJlZikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZnVzZWQgdG8gTG9hZCBTdHlsZXNoZWV0OiBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhZ2Ugc291cmNlJylcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG5ldyBzdHlsZXNoZWV0IGFuZCBpbmplY3QgaXQgaW50byB0aGUgRE9NXG4gIHZhciBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICBhZGRBdHRyaWJ1dGVzKHNoZWV0LCBhdHRyaWJ1dGVzKVxuICBzaGVldC5yZWwgPSAnc3R5bGVzaGVldCdcblxuICB2YXIgbGFzdExpbmsgPSBsaW5rc1tsaW5rcy5sZW5ndGggLSAxXVxuICBsYXN0TGluay5hZnRlcihzaGVldClcblxuICAvLyBSZW1vdmUgc2NyaXB0IGlmIHNldCBub3QgdG8gcGVyc2lzdFxuICBpZiAoIXNob3VsZFBlcnNpc3QpIHtcbiAgICBvbk5hdmlnYXRlKCgpID0+IHNoZWV0LnJlbW92ZSgpLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIC8vIFBhc3MgYW4gSFRNTCBSZWZlcmVuY2UgdG8gdGhlIHN0eWxlc2hlZXRcbiAgcmV0dXJuIHNoZWV0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0U3R5bGVzaGVldFxuIiwiLy8gY29tcGFyZSBhIHBhZ2UgdXNpbmcgc29tZSBjcml0ZXJpYVxuLy8gU3RyaW5nIGNyaXRlcmlhOiBcIi93ZS1saXZlLWhlcmUvYXdhcmRzXCJcbi8vIFJlZ0V4cCBjcml0ZXJpYTogL1xcL3dlLWxpdmUtaGVyZVxcL2F3YXJkcy9cbi8vIEZ1bmN0aW9uIGNyaXRlcmlhOiAocGFnZSkgPT4gcGFnZS5zdGFydHNXaXRoKCcvd2UtbGl2ZS1oZXJlL2F3YXJkcycpXG5cbmZ1bmN0aW9uIG1hdGNoZXNDcml0ZXJpYSAocGFnZSwgY3JpdGVyaWEpIHtcbiAgaWYgKHR5cGVvZiBjcml0ZXJpYSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFnZSA9PT0gY3JpdGVyaWFcbiAgfVxuXG4gIGlmIChjcml0ZXJpYSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBjcml0ZXJpYS50ZXN0KHBhZ2UpXG4gIH1cblxuICBpZiAodHlwZW9mIGNyaXRlcmlhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNyaXRlcmlhKHBhZ2UpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYENyaXRlcmlhIG11c3QgYmUgYSBTdHJpbmcsIFJlZ3VsYXIgRXhwcmVzc2lvbiwgb3IgRnVuY3Rpb24uIEluc3RlYWQgZ290ICR7dHlwZW9mIGNyaXRlcmlhfSwgJHtjcml0ZXJpYX1gKVxufVxuXG5cbmZ1bmN0aW9uIHBhZ2VNYXRjaGVzICguLi5jcml0ZXJpYXMpIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgcmV0dXJuIGNyaXRlcmlhcy5zb21lKGNyaXRlcmlhID0+IG1hdGNoZXNDcml0ZXJpYShjdXJyZW50UGFnZSwgY3JpdGVyaWEpKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VNYXRjaGVzXG4iLCIvLyBzZXRJc29sYXRlZEludGVydmFsKGNhbGxiYWNrLCBtaWxsaXNlY29uZHMpXG4vLyBhIHdyYXBwZXIgZm9yIHNldEludGVydmFsIHdoaWNoIHNlbGYtZGVzdHJ1Y3RzIG9uIHBhZ2UgbmF2aWdhdGlvblxuXG5mdW5jdGlvbiBzZXRJc29sYXRlZEludGVydmFsIChjYWxsYmFjaywgbWlsbGlzZWNvbmRzKSB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cbiAgY29uc3Qgc3RhcnRpbmdQYWdlID0gY3VycmVudFBhZ2UoKVxuICBsZXQgaW50ZXJ2YWxcblxuICBmdW5jdGlvbiBpc29sYXRlZENhbGxiYWNrICgpIHtcbiAgICB2YXIgaGFzQ2hhbmdlZFBhZ2VzID0gKHN0YXJ0aW5nUGFnZSAhPT0gY3VycmVudFBhZ2UoKSlcblxuICAgIGlmIChoYXNDaGFuZ2VkUGFnZXMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGJhY2soKVxuICB9XG5cbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChpc29sYXRlZENhbGxiYWNrLCBtaWxsaXNlY29uZHMpXG4gIHJldHVybiBpbnRlcnZhbFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHNldElzb2xhdGVkSW50ZXJ2YWxcbiJdfQ==
