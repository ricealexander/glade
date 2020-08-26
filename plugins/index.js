import { default as identifyCurrentPage } from './identifyCurrentPage'
import { default as IEBannerMessage     } from './IEBannerMessage'
import { default as fixPodcastBylines   } from './fixPodcastBylines'
import { default as makeAudioButton     } from './makeAudioButton'
import { default as STLPRAlias          } from './STLPRAlias'

// Plugin
// fn:      plugin function
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin

const plugins = [
  { fn: identifyCurrentPage, enabled: true },
  { fn: fixPodcastBylines,   enabled: true },
  { fn: makeAudioButton,     enabled: true },
  { fn: STLPRAlias,          enabled: true },

  {
    fn: IEBannerMessage,
    enabled: true,
    args: ['Not all features may be supported in Internet Explorer'],
  },
]

export default plugins