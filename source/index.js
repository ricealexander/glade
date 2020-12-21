// Utilities
import { default as addIsolatedEventListener } from './addIsolatedEventListener'
import { default as insertCSS                } from './insertCSS'
import { default as getMetadata              } from './getMetadata'
import { default as insertScript             } from './insertScript'
import { default as insertStylesheet         } from './insertStylesheet'
import { default as pageMatches              } from './pageMatches'
import { default as setIsolatedInterval      } from './setIsolatedInterval'

// Components
import { default as ListB      } from './components/ListB'
import { default as ListC      } from './components/ListC'
import { default as ListD      } from './components/ListD'
import { default as StreamPill } from './components/StreamPill'

// Configure Glade object with helper functions
const Glade = {
  insertCSS,
  insertScript,
  insertStylesheet,

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
Glade.currentPage = window.location.pathname

setInterval(() => {
  const currentPage = window.location.pathname
  const previousPage = Glade.currentPage

  if (currentPage !== previousPage) {
    // dispatch Grove Navigate Event
    const navigateEvent = new CustomEvent('grove-navigate', {
      detail: {
        page: currentPage,
        previousPage: previousPage,
      },
    })

    window.dispatchEvent(navigateEvent)
    Glade.currentPage = currentPage
  }
}, 100)

export default Glade
