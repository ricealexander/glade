import onNavigate from '../lib/onNavigate'


/**
 * Swap out one Emma Newsletter signup for another
 * @param {string} series             News Series that should be targetted
 * @param {string} currentNewsletter  The target newsletter to replace
 * @param {string} newNewsletter      The new newsletter
 */

function swapNewsletter (series, currentNewsletter, newNewsletter) {
  const dataLayer = Glade.getDataLayer()
  if (!dataLayer.series || !dataLayer.series.trim()) return

  const seriesList = dataLayer.series.trim().split(',')

  if (seriesList.includes(series)) {
    const newsletters = document.querySelectorAll(`iframe[src="${currentNewsletter}"]`)
    for (let newsletter of newsletters) newsletter.src = newNewsletter
  }
}


/**
 * Swap out one Emma Newsletter signup for another
 * @param {string[]} parameters       series, currentNewsletter, newNewsletter
 */

export default function replaceNewsletter (...parameters) {
  swapNewsletter(...parameters)
  onNavigate(() => swapNewsletter(...parameters))
}
