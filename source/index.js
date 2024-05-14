// Utilities
import { default as addIsolatedEventListener } from './addIsolatedEventListener'
import { default as getDataLayer             } from './getDataLayer'
import { default as insertCSS                } from './insertCSS'
import { default as insertScript             } from './insertScript'
import { default as insertStylesheet         } from './insertStylesheet'
import { default as pageMatches              } from './pageMatches'
import { default as setIsolatedInterval      } from './setIsolatedInterval'


// Components
import { default as ListB      } from './components/ListB'
import { default as ListC      } from './components/ListC'
import { default as ListD      } from './components/ListD'
import { default as StreamPill } from './components/StreamPill'


const Glade = {
  // Dynamically insert scripts and styles
  insertCSS,
  insertScript,
  insertStylesheet,

  // Make non-safe JavaScript features safe
  addIsolatedEventListener,
  setIsolatedInterval,

  // Other helper functions
  getDataLayer,
  pageMatches,

  // Recreate Grove components with custom data
  components: {
    ListB,
    ListC,
    ListD,
    StreamPill,
  },

  onNavigate: [],
}


// Hook into Grove Navigation
Glade.currentPage = window.location.pathname

setInterval(() => {
  const currentPage = window.location.pathname
  const previousPage = Glade.currentPage

  // dispatch Grove Navigate Event
  if (currentPage !== previousPage) {
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
