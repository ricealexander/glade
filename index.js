import { default as Glade } from './source'
import { default as plugins } from './plugins'

window.Glade = Glade

// Run Plugins
document.addEventListener('DOMContentLoaded', () => {
  for (const plugin of plugins) {
    const isEnabled      = plugin.enabled
    const pluginFunction = plugin.fn
    const args           = plugin.args || []

    try {
      if (isEnabled) pluginFunction(...args)
    }
    catch (error) {
      console.error(error)
    }
  }
})
