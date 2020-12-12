const attributionHTML = `
<small class="hamburger-menu-UMSL-attribution">
  St. Louis Public Radio is a service of the
  <a href="https://www.umsl.edu">University of Missouri–St. Louis</a>
</small>`

const attributionCSS = `
.hamburger-menu-UMSL-attribution {
  display: block;
  line-height: 1.25;
  margin-top: 2rem;
  padding: 0 1rem;
  font-size: 1.25rem;
}
.hamburger-menu-UMSL-attribution a {
  color: var(--linkColor);
  text-decoration: underline;
  white-space: nowrap;
}
.hamburger-menu-UMSL-attribution a:hover {
  color: var(--linkHoverColor);
}
`

function addUMSLAttribution () {
  window.Glade.addStyles(attributionCSS)

  const menuContainer = document.querySelector('.Page-header-hamburger-menu-wrapper')
  menuContainer.insertAdjacentHTML('beforeend', attributionHTML)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  var attributionEnabled = /[&?]service-line=true/.test(window.location.search)
  if (attributionEnabled) addUMSLAttribution()
}
