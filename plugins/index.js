import { default as identifyCurrentPage } from './identifyCurrentPage'

// Plugin
// fn:      plugin function
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin

const plugins = [
  { fn: identifyCurrentPage, enabled: true},
]

export default plugins
