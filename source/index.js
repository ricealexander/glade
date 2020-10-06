// Utilities
import { default as addIsolatedEventListener } from './addIsolatedEventListener'
import { default as addStyles                } from './addStyles'
import { default as getMetadata              } from './getMetadata'
import { default as loadScript               } from './loadScript'
import { default as loadStylesheet           } from './loadStylesheet'
import { default as pageMatches              } from './pageMatches'
import { default as setIsolatedInterval      } from './setIsolatedInterval'

// Components
import { default as ListB      } from './components/ListB'
import { default as ListC      } from './components/ListC'
import { default as ListD      } from './components/ListD'
import { default as StreamPill } from './components/StreamPill'

// Configure Glade object with helper functions
const Glade = {
  addStyles,
  loadScript,
  loadStylesheet,

  addIsolatedEventListener,
  setIsolatedInterval,

  getMetadata,
  pageMatches,

  components: {
    ListB,
    ListC,
    ListD,
    StreamPill,
  },
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
