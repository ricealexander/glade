!function o(n,i,r){function l(t,e){if(!i[t]){if(!n[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=i[t]={exports:{}},n[t][0].call(a.exports,function(e){return l(n[t][1][e]||e)},a,a.exports,o,n,i,r)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<r.length;e++)l(r[e]);return l}({1:[function(e,t,a){"use strict";var o=i(e("./source")),n=i(e("./plugins"));function i(e){return e&&e.__esModule?e:{default:e}}window.Glade=o.default,document.addEventListener("DOMContentLoaded",()=>{for(const o of n.default){var e=o.enabled,t=o.fn,a=o.args||[];try{e&&t(...a)}catch(e){console.error(e)}}})},{"./plugins":11,"./source":20}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(e){var t,a;for([t,a]of Object.entries(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}))"boolean"==typeof a?a&&e.setAttribute(t,""):e.setAttribute(t,a)}},{}],3:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(e){let t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;return setTimeout(()=>{window.addEventListener("grove-navigate",e,t)},100),window.Glade.onNavigate.push([e.toString(),{callback:e,options:t}]),()=>{window.removeEventListener("grove-navigate",e,t)}}},{}],4:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){Glade.insertCSS(r,!0),function(){var e=document.querySelector(".PH-ham-m-wrapper");e?e.insertAdjacentHTML("beforeend",n):console.error("Could not find menu container for UMSL Attribution.")}(),l(),(0,o.default)(()=>l())};var o=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};e=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 296.4">
  <path d="M648 255.8v38.9c-1 .3-120 .4-122.3.1V1.3h58.9v254.4c2 .2 3.9.1 5.8.1H648zM445.3 0l1.5.2c5.4.3 10.7.5 16 1 7.4.7 14.7 1.8 21.5 4.6a31.7 31.7 0 0 1 7.2 4 26.3 26.3 0 0 1 9.3 13.6 61.3 61.3 0 0 1 2.3 12.3c.7 6.9.8 13.7.8 20.6v45h-59v-1.9-57.1a25 25 0 0 0-.4-4.5 7.4 7.4 0 0 0-6.4-6.3 17.3 17.3 0 0 0-7.3.1 6.3 6.3 0 0 0-5 5.3 27.6 27.6 0 0 0-.6 5.1v60.5a44.7 44.7 0 0 0 .4 5.6 7.6 7.6 0 0 0 3 5 24.4 24.4 0 0 0 4.4 3q6.4 3 12.9 5.7l30.2 12.5a64.1 64.1 0 0 1 15.5 8.6 30.4 30.4 0 0 1 11.6 20.4 81.8 81.8 0 0 1 .7 11.5V241c0 5.7-.3 11.3-.6 17a66.2 66.2 0 0 1-2.2 14.2 26.6 26.6 0 0 1-17 18.7 69.3 69.3 0 0 1-15.3 3.7 217.7 217.7 0 0 1-30 1.8c-7.6 0-15.1 0-22.6-.4a107.7 107.7 0 0 1-25-3.4 57 57 0 0 1-5.6-1.9 26.5 26.5 0 0 1-16.6-18.6 67.3 67.3 0 0 1-2-11.5c-.6-6.2-.7-12.4-.7-18.7v-71h58.8l.1 1.7v81.2a32.2 32.2 0 0 0 .4 5.4c.7 3.8 2.6 5.7 6.3 6.2a20.3 20.3 0 0 0 5.7 0c4.2-.6 6.5-3.3 7-7.6a28.2 28.2 0 0 0 .3-3.5v-78c0-1.3 0-2.6-.2-4a8.3 8.3 0 0 0-3.5-6.4 32.5 32.5 0 0 0-5.3-3.2c-6-2.7-12-5.2-18.1-7.8l-24.3-10a64.5 64.5 0 0 1-13.1-7 47.4 47.4 0 0 1-5.5-4.6c-4.7-4.5-7-10.2-8-16.5a76.7 76.7 0 0 1-.7-11V54c0-6 .1-12 .7-18a56.8 56.8 0 0 1 3-14.8 25.3 25.3 0 0 1 13-14.3 52.3 52.3 0 0 1 13.5-4.2 134 134 0 0 1 18.6-2l7.8-.4 1.7-.3zM297.8 117.7H292l-25 177.1h-28l-25-177.1h-5.7c-.3 1 .6 31.4 1 44.3.6 14.7.9 29.5 1.4 44.2l1.3 44.3 1.3 44.1c-1 .4-48.3.6-51.7.2-.3-1-.3-291.7 0-293.5h65.1l24.1 134h4.3l24.6-134h65.2c.2 1 .3 292 0 293.5H293l2.5-88.5 2.3-88.6zM0 1.2h59a8.3 8.3 0 0 1 .1 1v251.1a31.5 31.5 0 0 0 .4 5.4c.7 4 2.8 6 6.7 6.7a20.2 20.2 0 0 0 5.8 0c3.9-.6 6-3 6.6-7.2a31.8 31.8 0 0 0 .2-4V1.3h59.5v241.2c0 6-.1 12-.7 18.1a60.9 60.9 0 0 1-2.5 13 26.3 26.3 0 0 1-14.8 16.5 57 57 0 0 1-13.4 4 151.5 151.5 0 0 1-20.3 2.1c-9.5.4-19 .4-28.5.2a189.4 189.4 0 0 1-23.2-1.7 66.8 66.8 0 0 1-15.9-4 25.6 25.6 0 0 1-15.7-17 67.7 67.7 0 0 1-1.6-6.6c-1-5-1-10-1.4-15l-.3-1.7V1.2z"></path>
</svg>`;const n=`
<div class="hamburger-menu-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${e}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`,i=`
<div class="footer-UMSL-attribution">
  <a href="https://www.umsl.edu">
    ${e}
  </a>
  <small>
    St. Louis Public Radio is a listener-supported service of the
    <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>.
  </small>
</div>`,r=`
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
`;function l(){var e=document.querySelector("footer .Page-footer-columns");e?e.insertAdjacentHTML("beforeend",i):console.error("Could not find footer navigation for UMSL Attribution.")}},{"../lib/onNavigate":3}],5:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){Glade.insertCSS(r,!0),l(),(0,o.default)(()=>l())};var o=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};const n=`
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
</svg>`,i=`
<svg class="stlpr-logo-lockup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.1 178.4">
  <path d="M69.6 69.5a22.5 22.5 0 018.1-6.4 22 22 0 019.8-2.5q9.8 0 14.2 5.2t4.3 16.5v51h20.7V79c0-11.3-3-20.1-9.2-26.4s-14.4-9.5-25-9.5q-16.4 0-24.9 9.8l-3.8-8.3H49v88.7h20.6z"/>
  <path d="M242.8 131.2a40.5 40.5 0 0017.8 3.9q20.3 0 32-11.8t11.7-33.5q0-46.7-42.4-46.7a26.6 26.6 0 00-19.1 7.5v-6H222V164h20.7zm0-64.6a18.2 18.2 0 0113.2-5.8q14.3 0 20.5 6.4t6.2 22.1q0 14.7-6.3 21.5t-20.5 6.8a20.2 20.2 0 01-13.1-4.5z"/>
  <path d="M427.8 83a23.6 23.6 0 015.5-16c3.7-4.3 8-6.4 12.7-6.4a22.2 22.2 0 0112.1 3.5l8.8-17.7q-5.6-3.3-16.2-3.3-14.3 0-23 10v-8.5h-20.6v88.7h20.7z"/>
  <path
    stroke="white" stroke-width="2"
    d="M351.4 0H0v178.4h524.1V0zM173 173H5.4V5.4H173zm172.7 0H178.4V5.4h167.3zm173 0H351.4V5.4h167.3z"
  />
</svg>`,r=`
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
`;function l(){var e=document.querySelector('.PH-top-bar .PH-logo a[aria-label="home page"]'),e=(e?e.innerHTML=n+i:console.error('Could not find logo container ".PH-top-bar .PH-logo a[aria-label="home page"]".'),document.querySelector('.PH-ham-m .PH-logo a[aria-label="home page"]'));e?e.innerHTML=n:console.log('Could not find logo container ".PH-ham-m .PH-logo a[aria-label="home page"]".')}},{"../lib/onNavigate":3}],6:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];n(...t),(0,o.default)(()=>n(...t))};var o=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};function n(e,t){const a=Glade.getDataLayer();e.some(e=>a.tags.includes(e))&&Glade.insertCSS(t)}},{"../lib/onNavigate":3}],7:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;const n=/^(\d+):(\d+)$/;function o(){var e,t,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"4:3",o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Placeholder "+a;if("string"==typeof a&&n.test(a))return[,e,t]=a.match(n),`
  <div class="placeholder-frame" style="padding-top: ${function(e,t){return t=1<arguments.length&&void 0!==t?t:0,Math.round(e*10**t)/10**t}(100*(Number(t)/Number(e)),5)}%">
    <div class="placeholder-inner">${o}</div>
  </div>
  `;throw new Error('aspectRatio must be in format width:height ("16:9"). Instead got '+a)}a.default=()=>{Glade.insertCSS(`
.placeholder-frame {
  border: 3px solid currentColor;
  margin-bottom: 1rem;

  /* Aspect Ratio Hack */
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.placeholder-frame .placeholder-inner {
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: center;

  /* http://projects.verou.me/css3patterns/#zig-zag */
  --stripe-color: #f5f5f5;
  background:
    linear-gradient(135deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(225deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(315deg, var(--stripe-color) 25%, transparent 25%),
    linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%);
  background-size: 50px 50px;
  background-clip: content-box;

  /* Aspect Ratio Hack */
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`),Glade.components.Placeholder=o}},{}],8:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){n(),(0,o.default)(()=>n())};var o=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};function n(){var e;for(e of document.querySelectorAll(".RichTextModule")){var t=e.querySelector("h2");t&&(t=t.innerHTML).toLowerCase().includes("transcript")&&(t=`
    <section>
      <h2 id="transcript">${t}</h2>

      <details class="collapseable-transcript">
        <summary tabindex="0" role="button">Show/Hide Transcript</summary>
        ${e.innerHTML}
      </details>
    </section>`,e.insertAdjacentHTML("afterend",t),e.remove())}}},{"../lib/onNavigate":3}],9:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){var e=/[&?]search=grove/.test(window.location.search),t=document.querySelectorAll("form.PH-search-form");if(0===t.length)throw new Error("Could not locate site search forms");if(!e)for(var a of t)a.action="/search"}},{}],10:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){n(),(0,o.default)(()=>n())};var o=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};function n(){var e=document.documentElement,t=(e.dataset.page=window.location.pathname,document.querySelector('aside[class$="-aside-content"], div[class$="-aside-content"], div[class^=TwoColumnContainer]'));e.dataset.columns=t?2:1}},{"../lib/onNavigate":3}],11:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=c(e("./applyThemeByTag")),n=c(e("./addUMSLAttribution")),i=c(e("./animateLogos")),r=c(e("./identifyCurrentPage")),l=c(e("./formatTranscripts")),s=c(e("./googleCustomSearch")),d=c(e("./loadDonateAsk")),u=c(e("./loadDonatePopUp")),e=c(e("./components.Placeholder"));function c(e){return e&&e.__esModule?e:{default:e}}n=[{fn:n.default,enabled:!0},{fn:i.default,enabled:!0},{fn:r.default,enabled:!0},{fn:l.default,enabled:!0},{fn:s.default,enabled:!0},{fn:d.default,enabled:!0},{fn:u.default,enabled:!0},{fn:e.default,enabled:!0},{fn:o.default,enabled:!0,args:[["LGBT","LGBTQ"],`
.stlpr-logo .logo-bar {
  stroke-width: 0.5px;
  stroke: currentColor;
}

.stlpr-logo .logo-bar-1 { color: #d62021; fill: #d62021 !important; }
.stlpr-logo .logo-bar-2 { color: #faa21b; fill: #faa21b !important; }
.stlpr-logo .logo-bar-3 { color: #006b71; fill: #006b71 !important; }
.stlpr-logo .logo-bar-4 { color: #234093; fill: #234093 !important; }
`]}];a.default=n},{"./addUMSLAttribution":4,"./animateLogos":5,"./applyThemeByTag":6,"./components.Placeholder":7,"./formatTranscripts":8,"./googleCustomSearch":9,"./identifyCurrentPage":10,"./loadDonateAsk":12,"./loadDonatePopUp":13}],12:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){u(),i(),(0,o.default)(()=>{u(),i()})};var o=n(e("../lib/onNavigate")),r=n(e("../source"));function n(e){return e&&e.__esModule?e:{default:e}}const l=["Missouri Independent","Capitol News Illinois","ProPublica","River City Journalism Fund","KFF Health News","KSDK","Job Listing","No Donate Ask"];function i(){var e,t,a,o,n,i=document.querySelector(".ArtP-articleBody, .RSEP-articleBody");!i||document.querySelector(".alleg-donate-embed")||r.default.getDataLayer().tags.some(e=>l.includes(e))||i.append(((i=document.createElement("figure")).classList.add("alleg-donate-embed"),i.innerHTML=`
  <!-- Standard Form Data
    <h1>Support Local Journalism</h1>
    <p>St. Louis Public Radio is a non-profit, member-supported, public media organization. Help ensure this news service remains strong and accessible to all with your contribution today.</p>
    <input type="hidden" name="P" value="WEBMAIN">
    <input type="hidden" name="PAGETYPE" value="PLG">
    <input type="hidden" name="CHECK" value="lMYXvpDIkCGB30noQ8KlKezWDeZ+eA1M">
  -->

  <h1>Support Local Journalism</h1>
  <p>St. Louis Public Radio is a non-profit, member-supported, public media organization. Help ensure this news service remains strong and accessible to all with your contribution today.</p>

  <form method="GET" action="https://stlpr.secureallegiance.com/kwmu/WebModule/Donate.aspx">
    <input type="hidden" name="P" value="WEBMAIN">
    <input type="hidden" name="PAGETYPE" value="PLG">

    <!-- value MUST be URL-Decoded: "%2b" becomes "+" https://www.urldecoder.org/ -->
    <input type="hidden" name="CHECK" value="lMYXvpDIkCGB30noQ8KlKezWDeZ+eA1M">

    <!-- Recurring vs One-Time -->
    <div class="alleg-form-group">
    <input type="radio" name="ctl00$AllegMain$MODETABLE" id="ctl00_AllegMain_MODETABLE_0" value="ctl00_AllegMain_MODETABLE_0" checked>
    <label for="ctl00_AllegMain_MODETABLE_0">
      Monthly Gift
    </label>

    <input type="radio" name="ctl00$AllegMain$MODETABLE" id="ctl00_AllegMain_MODETABLE_2" value="ctl00_AllegMain_MODETABLE_2">
    <label for="ctl00_AllegMain_MODETABLE_2">
      One-Time Gift
    </label>
    </div>

    <!-- Contribution Amount -->
    <div class="alleg-double-group">
    <div class="alleg-form-group">
      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_0" value="#ctl00_AllegMain_UPGRADETABLE_0" checked>
      <label for="ctl00_AllegMain_UPGRADETABLE_0">
        <span data-monthly="10" data-annual="120">$10/mo</span>
      </label>

      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_1" value="#ctl00_AllegMain_UPGRADETABLE_1">
      <label for="ctl00_AllegMain_UPGRADETABLE_1">
        <span data-monthly="15" data-annual="180">$15/mo</span>
      </label>

      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_3" value="#ctl00_AllegMain_UPGRADETABLE_3">
      <label for="ctl00_AllegMain_UPGRADETABLE_3">
        <span data-monthly="25" data-annual="300">$25/mo</span>
      </label>
    </div>

    <div class="alleg-form-group">
      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_6" value="#ctl00_AllegMain_UPGRADETABLE_6">
      <label for="ctl00_AllegMain_UPGRADETABLE_6">
        Other Amount
      </label>

      <input type="number" name="ctl00_AllegMain_ALLEGOTHERAMT" step="any">
    </div>
    </div>

    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
      </svg>
      Give Today!
    </button>
  </form>`,e=i.querySelector('input[value="#ctl00_AllegMain_UPGRADETABLE_6"]'),t=i.querySelector('input[name="ctl00_AllegMain_ALLEGOTHERAMT"]'),e.addEventListener("change",function(){e.checked&&t.focus()}),t.addEventListener("change",function(){""!==t.value&&(e.checked=!0)}),a=i.querySelector('input[value="ctl00_AllegMain_MODETABLE_0"]'),o=i.querySelector('input[value="ctl00_AllegMain_MODETABLE_2"]'),n=i.querySelectorAll('input[name="ctl00$AllegMain$UPGRADETABLE"] + label > span'),a.addEventListener("change",function(){if(a.checked)for(var e of n){var t=e.getAttribute("data-monthly");e.textContent="$"+t+"/mo"}}),o.addEventListener("change",function(){if(o.checked)for(var e of n){var t=e.getAttribute("data-annual");e.textContent="$"+t}}),i))}const s=["Job Listing","No Feedback Line"],d=60;function u(){var t=document.querySelector(".ArtP-articleBody, .RSEP-articleBody");if(t){var a=r.default.getDataLayer();if(a){if(!a.tags.some(e=>s.includes(e))){var o="https://stlpr.org"+window.location.pathname;let e=a.storyTitle||document.title;a=`Re: ${e=e.length>d?e.slice(0,d-1).trim()+"…":e} (${o})`,o=document.createElement("p");o.innerHTML=`
    <em>Send questions and comments about this story to <a class="Link" href="mailto:feedback@stlpublicradio.org?subject=${encodeURI(a)}">feedback@stlpublicradio.org</a>.</em>
  `,t.append(o)}}else console.error('Could not find data layer from "Glade.getDataLayer()"')}}},{"../lib/onNavigate":3,"../source":20}],13:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){/[&?]popup=true/.test(window.location.search);var e=/[&?]reset=true/.test(window.location.search),t=window.localStorage.getItem("popupOptOutDate"),a=window.localStorage.getItem("popupDonateDate");if(a){if(!((Date.now()-a)/864e5>=n||e))return;window.localStorage.removeItem("popupDonateDate")}if(t){if(!((Date.now()-t)/864e5>=r||e))return;window.localStorage.removeItem("popupOptOutDate")}Glade.insertCSS(c,!0);const o=function(){const e=document.createElement("div"),r=(e.innerHTML=`
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
  `,e.querySelector("#nonintrusive-donate-ask"));if(!r)throw new ReferenceError(`The Nonintrusive Donate Ask ${r} could not be found`);const t=r.querySelector('button[aria-label="Close"]'),a=r.querySelector("a.Button\\(white\\)"),o=(setTimeout(()=>{r.dataset.state="open",r.style.margin="",setTimeout(()=>{r.classList.remove("loading")},1e3*s)},1e3*l),t.addEventListener("click",()=>{r.dataset.state="close",window.localStorage.setItem("popupOptOutDate",Date.now()),setTimeout(()=>{r.close()},1e3*s)}),a.addEventListener("click",()=>{window.localStorage.setItem("popupDonateDate",Date.now())}),setInterval(()=>{r.open?(r.classList.add("ask-wobble"),setTimeout(()=>{r.classList.remove("ask-wobble")},1e3*u)):clearInterval(o)},1e3*d));function n(){var e,t,a,o,n,i;r.open&&(o=document.querySelector("footer.Page-footer"),e=document.body.scrollHeight,t=window.innerHeight,a=window.pageYOffset+t,i=r.clientHeight,n=e-a<(o=o?o.clientHeight:0),i=o+i+40<t,r.style.bottom=n&&i?a+o-e+20+"px":"var(--ask-bottom-margin)")}return window.addEventListener("scroll",n),(0,i.default)(()=>window.addEventListener("scroll",n)),r}();document.body.prepend(o),(0,i.default)(()=>{document.body.prepend(o)})};var i=(a=e("../lib/onNavigate"))&&a.__esModule?a:{default:a};const n=90,r=7,l=3,s=1.08,d=210,u=2,c=`
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
`},{"../lib/onNavigate":3}],14:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=(e=e("../lib/onNavigate"))&&e.__esModule?e:{default:e};a.default=function(e,t,a,o){e.addEventListener(t,a,o),(0,n.default)(()=>{e.removeEventListener(t,a,o)},{once:!0})}},{"../lib/onNavigate":3}],15:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=e[0],e=e.map(e=>{var{title:e,link:t,display:a}=e;return!1===a?"":`
      <li class="ListB-items-item">
        <a
          class="PromoLink"
          aria-label="${e||""}"
          ${t?`href="${t}"`:""}
        >
          ${e||""}
        </a>
      </li>`}).join("");return`
  <div class="ListB">
    <div class="ListB-header">
      ${t?`<div class="ListB-header-title">${t}</div>`:'<div class="ListB-header-title" data-no-title=""></div>'}
    </div>

    <div class="ListB-items-first">
      <ps-promo class="PromoB" data-content-type="">
        <div class="PromoB-content">
          <div class="PromoB-media">
            ${a&&a.image?`
              <a class="List" ${a.link?`href="${a.link}"`:""}>
                <img
                  class="Image"
                  data-src="${a.image}"
                  alt="${a.title||""}"
                  src="${a.image}"
                >
              </a>`:""}
          </div>
        </div>
      </ps-promo>
    </div>

    <ol class="ListB-items">${e}</ol>
  </div>`}},{}],16:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return`
  <div class="ListC">
    <div class="ListC-header">
      ${t?`<div class="ListC-header-title">${t}</div>`:'<div class="ListC-header-title" data-no-title=""></div>'}
    </div>

    <ul class="ListC-items">${e.map(e=>{var{title:e,link:t,image:a,timestamp:o,display:n}=e;return!1===n?"":`
      <li class="ListC-items-item">
        <ps-promo class="PromoXSmall" data-content-type="" ${a?"":'data-no-media=""'}>
          ${a?`
            <div class="PromoXSmall-media">
              <a
                class="Link"
                aria-label="${e||""}"
                ${t?`href="${t}"`:""}
              >
                <img
                  class="Image"
                  alt="${e||""}"
                  data-src="${a}"
                  src="${a}"
                >
              </a>
            </div>`:""}

          <div class="PromoXSmall-content">
            <div class="PromoXSmall-title">
              <a class="Link" ${t?`href="${t}"`:""}>${e||""}</a>
            </div>
            <div class="PromoXSmall-byline">
              <div class="PromoXSmall-date">
                ${n=o,n?(a=(n=new Date(n)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),t=n.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),`
  <div
    class="PromoXSmall-timestamp"
    data-timestamp="${Number(n)}"
    data-date="${a} at ${t}"
    data-promo-date="${a}"
    data-show-timestamp="true"
  >
    ${a}
  </div>`):""}
              </div>
            </div>
          </div>
        </ps-promo>
      </li>`}).join("")}</ul>
  </div>`}},{}],17:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(e,t){return`
  <div class="ListD">
    <div class="ListD-header">
      ${t?`<div class="ListD-header-title">${t}</div>`:'<div class="ListD-header-title" data-no-title=""></div>'}
    </div>

    <ul class="ListD-items">${e.map(e=>{var{title:e,link:t,image:a,description:o,audio:n,authors:i,timestamp:r,display:l}=e;return!1===l?"":`
      <li class="ListD-items-item">
        <ps-promo class="PromoB" data-content-type="" data-image-align="top">
          <div class="PromoB-content" ${a?"":'data-no-media=""'}>
            ${a?`<div class="PromoB-media">
                   <a
                     class="Link"
                     aria-label="${e||""}"
                     ${t?`href="${t}"`:""}
                   >
                     <img
                       class="Image"
                       alt="${e}"
                       data-src="${a}"
                       src="${a}"
                     >
                   </a>
                 </div>`:""}

            <div class="PromoB-title">
              <a class="Link" ${t?`href="${t}"`:""}>
                ${e||""}
              </a>
            </div>

            <div class="PromoB-byline">
              <div class="PromoB-authorName">
                ${(i||[]).join(", ")}
              </div>
              ${i?'<span class="PromoB-byline-divider">,</span>':""}
              <div class="PromoB-date">
                ${l=r,l?(a=(l=new Date(l)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),t=l.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),`
  <div
    class="PromoB-timestamp"
    data-timestamp="${Number(l)}"
    data-date="${a} at ${t}"
    data-promo-date="${a}"
    data-show-timestamp="true"
  >
    ${a}
  </div>`):""}
              </div>
            </div>

            ${o?`<div class="PromoB-description">${o}</div>`:""}
          </div>

          <div class="PromoB-audio-label">
          ${n?`<ps-stream
                 data-stream-program-name="${e||""}"
                 on-demand=""
                 small=""
                 external=""
               >
                 <ps-stream-url data-stream-url="${n}"></ps-stream-url>

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
               </ps-stream>`:""}
          </div>
        </ps-promo>
      </li>`}).join("")}</ul>
  </div>`}},{}],18:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=e=>{var t,{audio:e,audioFormat:a,episodeID:o,episodeTitle:n,program:i,small:r}=e;if(e)return(t=document.createElement("div")).innerHTML=`
  <ps-stream
    ${i?`data-stream-name="${i}"`:""}
    ${o?`data-stream-id="${o}"`:""}
    ${n?`data-stream-program-name="${n}"`:""}
    ${r?"small":""}
    on-demand
    external
  >
    <ps-stream-url
      data-stream-format="${a||"audio/mpeg"}"
      data-stream-url="${e}"
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
  </ps-stream>`,t;throw new Error("Could not create Audio Button because audio file is missing")}},{}],19:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;const o=e=>e?e.trim().split(/,\b/):[];a.default=function(){var e,t=document.querySelector('meta[name="brightspot-dataLayer"]');if(t&&t.content)return(t=JSON.parse(t.content)).pageURL=window.location.pathname,t.authors=(e=t.author||"")?e.trim().split(/,\s/):[],t.categories=o(t.category||""),t.tags=o(t.keywords||""),t;throw new ReferenceError('Failed to locate "brightspot-dataLayer" meta tag.')}},{}],20:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=p(e("./addIsolatedEventListener")),n=p(e("./getDataLayer")),i=p(e("./insertCSS")),r=p(e("./insertScript")),l=p(e("./insertStylesheet")),s=p(e("./pageMatches")),d=p(e("./setIsolatedInterval")),u=p(e("./components/ListB")),c=p(e("./components/ListC")),m=p(e("./components/ListD")),e=p(e("./components/StreamPill"));function p(e){return e&&e.__esModule?e:{default:e}}const f={insertCSS:i.default,insertScript:r.default,insertStylesheet:l.default,addIsolatedEventListener:o.default,setIsolatedInterval:d.default,getDataLayer:n.default,pageMatches:s.default,components:{ListB:u.default,ListC:c.default,ListD:m.default,StreamPill:e.default},onNavigate:[]};f.currentPage=window.location.pathname,setInterval(()=>{var e=window.location.pathname,t=f.currentPage;e!==t&&(t=new CustomEvent("grove-navigate",{detail:{page:e,previousPage:t}}),window.dispatchEvent(t),f.currentPage=e)},100);i=f;a.default=i},{"./addIsolatedEventListener":14,"./components/ListB":15,"./components/ListC":16,"./components/ListD":17,"./components/StreamPill":18,"./getDataLayer":19,"./insertCSS":21,"./insertScript":22,"./insertStylesheet":23,"./pageMatches":24,"./setIsolatedInterval":25}],21:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=(e=e("../lib/onNavigate"))&&e.__esModule?e:{default:e};const i=[];a.default=function(e){var t,a=1<arguments.length&&void 0!==arguments[1]&&arguments[1];for(t of i)if(t.textContent==e)return;const o=document.createElement("style");return o.textContent=e,document.head.insertAdjacentElement("beforeend",o),a||(0,n.default)(()=>o.remove(),{once:!0}),o}},{"../lib/onNavigate":3}],22:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("../lib/onNavigate")),r=o(e("../lib/applyAttributes"));function o(e){return e&&e.__esModule?e:{default:e}}a.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!e||!e.src)throw new ReferenceError('Script src is required. Use syntax Glade.insertScript({src: "PATH"})');var a=[...document.querySelectorAll("script[src]")],o=a.map(e=>e.scr);if(!o.includes(e.src)){const n=document.createElement("script");return(0,r.default)(n,e),a[a.length-1].after(n),t||(0,i.default)(()=>n.remove(),{once:!0}),n}}},{"../lib/applyAttributes":2,"../lib/onNavigate":3}],23:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("../lib/onNavigate")),r=o(e("../lib/applyAttributes"));function o(e){return e&&e.__esModule?e:{default:e}}a.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!e||!e.href)throw new ReferenceError('Stylesheet href is required. Use syntax Glade.insertStylesheet({href: "PATH"})');var a=[...document.querySelectorAll("link[rel=stylesheet]")],o=a.map(e=>e.href);if(!o.includes(e.href)){const n=document.createElement("link");return n.rel="stylesheet",(0,r.default)(n,e),a[a.length-1].after(n),t||(0,i.default)(()=>n.remove(),{once:!0}),n}}},{"../lib/applyAttributes":2,"../lib/onNavigate":3}],24:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default=function(){const a=window.location.pathname;for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.some(e=>{var t=a;if("string"==typeof e)return t===e;if(e instanceof RegExp)return e.test(t);if("function"==typeof e)return e(t);throw new Error(`Criterion must be a String, Regular Expression, or Function. Instead got ${typeof e}, `+e)})}},{}],25:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=(e=e("../lib/onNavigate"))&&e.__esModule?e:{default:e};a.default=function(e,t){const a=setInterval(e,t);return(0,o.default)(()=>{clearInterval(a)},{once:!0}),a}},{"../lib/onNavigate":3}]},{},[1]);