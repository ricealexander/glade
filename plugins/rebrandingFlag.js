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
    <polygon class="logo-bar logo-bar-1" points="16.44 10.64 16.44 17.74 16.44 24.83 17.62 24.83 17.62 17.74 17.62 10.64 16.44 10.64"></polygon>
    <polygon class="logo-bar logo-bar-2" points="36.16 7.1 36.16 17.73 36.16 28.38 37.35 28.38 37.35 17.73 37.35 7.1 36.16 7.1"></polygon>
    <polygon class="logo-bar logo-bar-3" points="51.54 0 51.54 17.75 51.54 35.47 52.72 35.47 52.72 17.75 52.72 0 51.54 0"></polygon>
    <polygon class="logo-bar logo-bar-4" points="74.02 7.1 74.02 17.73 74.02 28.38 75.21 28.38 75.21 17.73 75.21 7.1 74.02 7.1"></polygon>
  </g>
  <path d="M42.72 3.55h3.47v21.28h-3.47V3.55zM60.83 23.45v4.95h-3.47V10.65h2.83l.31 1.85a4.8 4.8 0 014.3-2.22c4.08 0 5.58 3.09 5.58 7.37v.18c0 4.25-1.5 7.37-5.58 7.37a4.85 4.85 0 01-3.97-1.75zm0-3.51c.45.7 1.38 2 2.93 2 2.08 0 3.14-1.55 3.14-4.16v-.18c0-2.62-1.06-4.19-3.14-4.19a3.32 3.32 0 00-2.93 2.09zM6.38 22.06a4.21 4.21 0 01-4-2.08L0 22a7.13 7.13 0 006.21 3.21c4.11 0 6.18-2.24 6.18-5 0-2.15-1.52-3.61-4.72-4.31l-1.54-.38c-1.38-.32-1.78-.92-1.78-1.41 0-1 1.15-1.31 2-1.31a4.13 4.13 0 013.5 1.58l2.17-2.17a7.51 7.51 0 00-5.54-2.53c-3.44 0-5.7 2-5.7 4.65 0 2.28 1.39 3.73 4.73 4.41l1.34.26c1.45.32 2 .95 2 1.46 0 1-.9 1.58-2.43 1.58M90 11.38a4.9 4.9 0 00-3-1.1 4.77 4.77 0 00-4 2.17l-.31-1.8h-2.84v14.18h3.47v-8.67a3.63 3.63 0 013.49-2.47 3.47 3.47 0 012 .47zM31.35 21.88a6.55 6.55 0 01-1.71.3c-1.52 0-2.42-.25-2.42-2.42v-5.91h4.18v-3.2h-4.18V7.1h-2.36l-1.12 3.55-2.59.74v2.46h2.59V20c0 3.85 2 5.23 5 5.23a10.35 10.35 0 003.26-.7z"></path>
</svg>`

function updateLogos () {
  const logoContainers = document.querySelectorAll('.Page-header-logo > a, .Page-footer-logo > a')

  for (const container of logoContainers) {
    const alreadyUpdated = container.innerHTML.includes('id="stlpr-header-logo"')
    if (!alreadyUpdated) container.innerHTML = stlprLogo
  }
}

export default () => {
  const brandingEnabled = /[&?]rebrand=true/.test(window.location.search)

  if (brandingEnabled) {
    updateLogos()
    Glade.insertStylesheet({ href: 'https://www.stlpublicradio.org/external/grove/stylesheets/brand-update.css' }, true)

    window.addEventListener('grove-navigation', () => {
      updateLogos()
    })
  }
}
