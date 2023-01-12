import { default as addThemeByTag       } from './addThemeByTag'
import { default as addUMSLAttribution  } from './addUMSLAttribution'
import { default as identifyCurrentPage } from './identifyCurrentPage'
import { default as IEBannerMessage     } from './IEBannerMessage'
import { default as fixPodcastBylines   } from './fixPodcastBylines'
import { default as formatTranscripts   } from './formatTranscripts'
import { default as googleCustomSearch  } from './googleCustomSearch'
import { default as longformBylineWorkaround  } from './longformBylineWorkaround'
import { default as animateLogos        } from './animateLogos'

// Plugin
// fn:      plugin function
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin

const plugins = [
  { fn: addThemeByTag,       enabled: true,
    args: [],
  },
  { fn: addUMSLAttribution,  enabled: true },
  { fn: animateLogos,        enabled: true },
  { fn: identifyCurrentPage, enabled: true },
  { fn: IEBannerMessage,     enabled: false,
    args: ['Not all features may be supported in Internet Explorer'],
  },
  { fn: fixPodcastBylines,   enabled: true },
  { fn: formatTranscripts,   enabled: true },
  { fn: googleCustomSearch,  enabled: true },
  { fn: longformBylineWorkaround,  enabled: true },
]

export default plugins
