import { default as STLPR } from './source'
import { default as plugins } from './plugins'

window.STLPR = STLPR

// Run Plugins
for (const plugin of plugins) {
  const isEnabled      = plugin.enabled
  const pluginFunction = plugin.fn
  const args           = plugin.args || []

  if (isEnabled) pluginFunction(...args)
}
