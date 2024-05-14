import onNavigate from '../lib/onNavigate'


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
</svg>`


const nprLogo = `
<svg class="stlpr-logo-lockup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.1 178.4">
  <path d="M69.6 69.5a22.5 22.5 0 018.1-6.4 22 22 0 019.8-2.5q9.8 0 14.2 5.2t4.3 16.5v51h20.7V79c0-11.3-3-20.1-9.2-26.4s-14.4-9.5-25-9.5q-16.4 0-24.9 9.8l-3.8-8.3H49v88.7h20.6z"/>
  <path d="M242.8 131.2a40.5 40.5 0 0017.8 3.9q20.3 0 32-11.8t11.7-33.5q0-46.7-42.4-46.7a26.6 26.6 0 00-19.1 7.5v-6H222V164h20.7zm0-64.6a18.2 18.2 0 0113.2-5.8q14.3 0 20.5 6.4t6.2 22.1q0 14.7-6.3 21.5t-20.5 6.8a20.2 20.2 0 01-13.1-4.5z"/>
  <path d="M427.8 83a23.6 23.6 0 015.5-16c3.7-4.3 8-6.4 12.7-6.4a22.2 22.2 0 0112.1 3.5l8.8-17.7q-5.6-3.3-16.2-3.3-14.3 0-23 10v-8.5h-20.6v88.7h20.7z"/>
  <path
    stroke="white" stroke-width="2"
    d="M351.4 0H0v178.4h524.1V0zM173 173H5.4V5.4H173zm172.7 0H178.4V5.4h167.3zm173 0H351.4V5.4h167.3z"
  />
</svg>`


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
`


function replaceLogos () {
  // Replace logo in the header
  const headerContainer = document.querySelector('.PH-top-bar .PH-logo a[aria-label="home page"]')

  if (headerContainer) {
    headerContainer.innerHTML = stlprLogo + nprLogo
  }
  else {
    console.error('Could not find logo container ".PH-top-bar .PH-logo a[aria-label="home page"]".')
  }

  // Replace logo in the collapsible navigation
  const menuContainer   = document.querySelector('.PH-ham-m .PH-logo a[aria-label="home page"]')

  if (menuContainer) {
    menuContainer.innerHTML = stlprLogo
  }
  else {
    console.log('Could not find logo container ".PH-ham-m .PH-logo a[aria-label="home page"]".')
  }
}


/**
 * Apply a hover animation to the STLPR logos in the header and collapsible navigation
 */

export default function animateLogos () {
  Glade.insertCSS(logosCSS, true) // true: CSS should persist on navigation

  replaceLogos()
  onNavigate(() => replaceLogos())
}
