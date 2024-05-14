/* eslint-disable prefer-template */

import onNavigate from '../lib/onNavigate'
import Glade from '../source'


function buildDonateAsk () {
  const embed = document.createElement('figure')
  embed.classList.add('alleg-donate-embed')

  embed.innerHTML = `
  <!-- Standard Form Data
    <h1>Support Local Journalism</h1>
    <p>St. Louis Public Radio is a non-profit, member-supported, public media organization. Help ensure this news service remains strong and accessible to all with your contribution today.</p>
    <input type="hidden" name="P" value="WEBMAIN">
    <input type="hidden" name="PAGETYPE" value="PLG">
    <input type="hidden" name="CHECK" value="lMYXvpDIkCGB30noQ8KlKezWDeZ+eA1M">
  -->

  <h1>Support Local Journalism</h1>
  <p>St. Louis Public Radio is a non-profit, member-supported, public media organization. Help ensure this news service remains strong and accessible to all with your contribution today.</p>

  <form method="GET" action="https://stlpr.secureallegiance.com/kwmu/WebModule/Donate.aspx">
    <input type="hidden" name="P" value="WEBMAIN">
    <input type="hidden" name="PAGETYPE" value="PLG">

    <!-- value MUST be URL-Decoded: "%2b" becomes "+" https://www.urldecoder.org/ -->
    <input type="hidden" name="CHECK" value="lMYXvpDIkCGB30noQ8KlKezWDeZ+eA1M">

    <!-- Recurring vs One-Time -->
    <div class="alleg-form-group">
    <input type="radio" name="ctl00$AllegMain$MODETABLE" id="ctl00_AllegMain_MODETABLE_0" value="ctl00_AllegMain_MODETABLE_0" checked>
    <label for="ctl00_AllegMain_MODETABLE_0">
      Monthly Gift
    </label>

    <input type="radio" name="ctl00$AllegMain$MODETABLE" id="ctl00_AllegMain_MODETABLE_2" value="ctl00_AllegMain_MODETABLE_2">
    <label for="ctl00_AllegMain_MODETABLE_2">
      One-Time Gift
    </label>
    </div>

    <!-- Contribution Amount -->
    <div class="alleg-double-group">
    <div class="alleg-form-group">
      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_0" value="#ctl00_AllegMain_UPGRADETABLE_0" checked>
      <label for="ctl00_AllegMain_UPGRADETABLE_0">
        <span data-monthly="10" data-annual="120">$10/mo</span>
      </label>

      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_1" value="#ctl00_AllegMain_UPGRADETABLE_1">
      <label for="ctl00_AllegMain_UPGRADETABLE_1">
        <span data-monthly="15" data-annual="180">$15/mo</span>
      </label>

      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_3" value="#ctl00_AllegMain_UPGRADETABLE_3">
      <label for="ctl00_AllegMain_UPGRADETABLE_3">
        <span data-monthly="25" data-annual="300">$25/mo</span>
      </label>
    </div>

    <div class="alleg-form-group">
      <input type="radio" name="ctl00$AllegMain$UPGRADETABLE" id="ctl00_AllegMain_UPGRADETABLE_6" value="#ctl00_AllegMain_UPGRADETABLE_6">
      <label for="ctl00_AllegMain_UPGRADETABLE_6">
        Other Amount
      </label>

      <input type="number" name="ctl00_AllegMain_ALLEGOTHERAMT" step="any">
    </div>
    </div>

    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
      </svg>
      Give Today!
    </button>
  </form>`

  var radioOtherAmount = embed.querySelector('input[value="#ctl00_AllegMain_UPGRADETABLE_6"]')
  var textOtherAmount = embed.querySelector('input[name="ctl00_AllegMain_ALLEGOTHERAMT"]')

  radioOtherAmount.addEventListener('change', function () {
    if (radioOtherAmount.checked) {
      textOtherAmount.focus()
    }
  })

  textOtherAmount.addEventListener('change', function () {
    if (textOtherAmount.value !== '') {
      radioOtherAmount.checked = true
    }
  })

  // 3. When the user changes between "Monthly Gift" and "One-Time Gift",
  //    update the giving labels
  var radioMonthlyGift = embed.querySelector('input[value="ctl00_AllegMain_MODETABLE_0"]')
  var radioOnetimeGift = embed.querySelector('input[value="ctl00_AllegMain_MODETABLE_2"]')
  var radiosWithPurchases = embed.querySelectorAll('input[name="ctl00$AllegMain$UPGRADETABLE"] + label > span')

  radioMonthlyGift.addEventListener('change', function () {
    if (radioMonthlyGift.checked) {
      for (let radio of radiosWithPurchases) {
        let monthlyAmt = radio.getAttribute('data-monthly')
        radio.textContent = '$' + monthlyAmt + '/mo'
      }
    }
  })

  radioOnetimeGift.addEventListener('change', function () {
    if (radioOnetimeGift.checked) {
      for (let radio of radiosWithPurchases) {
        let annualAmt = radio.getAttribute('data-annual')
        radio.textContent = '$' + annualAmt
      }
    }
  })

  return embed
}

const donateBlocklist = [
  'Missouri Independent',
  'Capitol News Illinois',
  'ProPublica',
  'River City Journalism Fund',
  'KFF Health News',
  'KSDK',
  'Job Listing',
  'No Donate Ask',
]

function loadDonateModule () {
  // Apply Donate Ask to News Stories and Radio Show Episodes
  const article = document.querySelector('.ArtP-articleBody, .RSEP-articleBody')
  if (!article) return

  // Do not apply Donate Ask if already present
  const donateAsk = document.querySelector('.alleg-donate-embed')
  if (donateAsk) return

  // Do not apply Donate Ask to any story with tags from our blocklist
  const tags = Glade.getDataLayer().tags
  if (tags.some(tag => donateBlocklist.includes(tag))) return

  article.append(buildDonateAsk())
}


const feedbackBlocklist = [
  'Job Listing',
  'No Feedback Line',
]

const STORY_TITLE_LENGTH = 60

function loadFeedbackLine () {
  // Apply Feedback Line to News Stories, Radio Show Episodes, and Podcast Episodes
  const article = document.querySelector('.ArtP-articleBody, .RSEP-articleBody')
  if (!article) return

  const GroveDataLayer = Glade.getDataLayer()
  if (!GroveDataLayer) {
    console.error('Could not find data layer from "Glade.getDataLayer()"')
    return
  }

  // Do not apply Feedback Line to any story with tags from our blocklist
  if (GroveDataLayer.tags.some(tag => feedbackBlocklist.includes(tag))) return

  // Prepare the Subject Line
  const url = 'https://stlpr.org' + window.location.pathname
  let title = GroveDataLayer.storyTitle || document.title

  if (title.length > STORY_TITLE_LENGTH) {
    title = title.slice(0, STORY_TITLE_LENGTH - 1).trim() + '…'
  }

  const subject = `Re: ${title} (${url})`

  const feedbackElement = document.createElement('p')
  feedbackElement.innerHTML = `
    <em>Send questions and comments about this story to <a class="Link" href="mailto:feedback@stlpublicradio.org?subject=${encodeURI(subject)}">feedback@stlpublicradio.org</a>.</em>
  `

  article.append(feedbackElement)
}


/**
 * Embed a Donate Ask and Feedback Line to the bottom of every story
 */

export default function loadDonateAsk () {
  loadFeedbackLine() // load 1st so it appears above the module
  loadDonateModule()

  onNavigate(() => {
    loadFeedbackLine()
    loadDonateModule()
  })
}
