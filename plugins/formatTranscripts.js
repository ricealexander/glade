import onNavigate from '../lib/onNavigate'


function injectTranscripts () {
  // We'll need to detect whether a transcript is present.
  // Look for a RichText Module with a Subhead containing the word "Transcript"
  let richTextModules = document.querySelectorAll('.RichTextModule')

  for (let module of richTextModules) {
    let subhead = module.querySelector('h2')
    if (!subhead) continue

    let title = subhead.innerHTML
    if (!title.toLowerCase().includes('transcript')) continue

    // Create the new Transcript widget
    let transcriptMarkup = `
    <section>
      <h2 id="transcript">${title}</h2>

      <details class="collapseable-transcript">
        <summary tabindex="0" role="button">Show/Hide Transcript</summary>
        ${module.innerHTML}
      </details>
    </section>`

    module.insertAdjacentHTML('afterend', transcriptMarkup)
    module.remove()
  }
}


export default () => {
  injectTranscripts()
  onNavigate(() => injectTranscripts())
}
