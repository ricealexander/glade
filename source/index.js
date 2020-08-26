import { default as addIsolatedEventListener } from './addIsolatedEventListener'
import { default as loadScript               } from './loadScript'
import { default as loadStylesheet           } from './loadStylesheet'
import { default as setIsolatedInterval      } from './setIsolatedInterval'

// Configure STLPR object with helper functions
const STLPR = {
  loadScript,
  loadStylesheet,
  addIsolatedEventListener,
  setIsolatedInterval,
}

// Hook into Grove Navigation
STLPR.onNavigation = []
STLPR.currentPage = window.location.pathname

setInterval(() => {
  const currentPage = window.location.pathname
  const hasChangedPages = (currentPage !== STLPR.currentPage)

  // If navigation occurred, run all functions in STLPR.onNavigation
  if (hasChangedPages) {
    STLPR.currentPage = currentPage
    for (const callback of STLPR.onNavigation) callback()
  }
}, 100)

export default STLPR
