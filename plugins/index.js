import { default as addUMSLAttribution  } from './addUMSLAttribution'
import { default as identifyCurrentPage } from './identifyCurrentPage'
import { default as IEBannerMessage     } from './IEBannerMessage'
import { default as fixPodcastBylines   } from './fixPodcastBylines'
import { default as rebrandingFlag      } from './rebrandingFlag'

// Plugin
// fn:      plugin function
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin

const plugins = [
  { fn: addUMSLAttribution,  enabled: true },
  { fn: identifyCurrentPage, enabled: true },
  { fn: fixPodcastBylines,   enabled: true },
  { fn: rebrandingFlag,      enabled: true },

  {
    fn: IEBannerMessage,
    enabled: false,
    args: ['Not all features may be supported in Internet Explorer'],
  },
]

export default plugins
