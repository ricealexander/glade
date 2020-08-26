import { default as identifyCurrentPage } from './identifyCurrentPage'
import { default as fixPodcastBylines   } from './fixPodcastBylines'
import { default as makeAudioButton     } from './makeAudioButton'

// Plugin
// fn:      plugin function
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin

const plugins = [
  { fn: identifyCurrentPage, enabled: true },
  { fn: fixPodcastBylines,   enabled: true },
  { fn: makeAudioButton,     enabled: true },
]

export default plugins
