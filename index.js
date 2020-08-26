import { default as Glade } from './source'
import { default as plugins } from './plugins'

window.Glade = Glade

// Run Plugins
for (const plugin of plugins) {
  const isEnabled      = plugin.enabled
  const pluginFunction = plugin.fn
  const args           = plugin.args || []

  if (isEnabled) pluginFunction(...args)
}
