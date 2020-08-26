/* eslint-disable max-len */

// config
//  program: 'St. Louis on the Air',
//  episodeID: '00000174-2231-dd1b-a77f-3bf1a5c60000',
//  episodeTitle: '‘Summer Of Violence’ Keeps Stray Rescue’s Donna Lochman Busy Saving Dogs',
//  audioFormat: 'audio/mpeg',
//  audioFile: 'https://kwmu-adswizz.streamguys1.com/wake_up_to_politics/20200124005720-1_IOWA_CAUCUSES.mp3',
//  small: true,

const makeAudioButton = config => {
  const {
    audioFile,
    audioFormat,
    episodeID,
    episodeTitle,
    program,
    small,
  } = config

  if (!audioFile) {
    throw new Error('Could not create Audio Button because audio file is missing')
  }

  return `
  <ps-stream
    ${program ? `data-stream-name="${program}"` : ''}
    ${episodeID ? `data-stream-id="${episodeID}"` : ''}
    ${episodeTitle ? `data-stream-program-name="${episodeTitle}"` : ''}
    ${small ? 'small' : ''}
    on-demand
    external
  >
    <ps-stream-url
      data-stream-format="${audioFormat || 'audio/mpeg'}"
      data-stream-url="${audioFile}"
    >
    </ps-stream-url>

    <button class="StreamPill">
      <span class="StreamPill-iconWrapper">
        <svg class="StreamPill-icon"><use xlink:href="#play-icon"></use></svg>
        <svg class="StreamPill-iconPause"><use xlink:href="#pause-icon"></use></svg>
      </span>

      <span class="StreamPill-text">
        <span class="StreamPill-duration">Listen</span>
      </span>
    </button>
  </ps-stream>`
}

export default () => {
  window.Glade.makeAudioButton = makeAudioButton
}
