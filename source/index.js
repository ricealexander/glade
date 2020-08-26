import { default as addIsolatedEventListener } from './addIsolatedEventListener'
import { default as loadScript               } from './loadScript'
import { default as loadStylesheet           } from './loadStylesheet'
import { default as setIsolatedInterval      } from './setIsolatedInterval'

// Configure Glade object with helper functions
const Glade = {
  loadScript,
  loadStylesheet,
  addIsolatedEventListener,
  setIsolatedInterval,
}

// Hook into Grove Navigation
Glade.onNavigation = []
Glade.currentPage = window.location.pathname

setInterval(() => {
  const currentPage = window.location.pathname
  const hasChangedPages = (currentPage !== Glade.currentPage)

  // If navigation occurred, run all functions in Glade.onNavigation
  if (hasChangedPages) {
    Glade.currentPage = currentPage
    for (const callback of Glade.onNavigation) callback()
  }
}, 100)

export default Glade
