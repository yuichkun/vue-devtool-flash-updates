console.log('hello from panel.js')
const input = document.getElementById('flash-on-update-checkbox')
const logoImage = document.getElementById('flash-on-update-logo')
const FEATURE_AVAILABILITY_KEY = 'VUE_DEVTOOLS_FLASH_UPDATES_ENABLED'

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  getFeatureAvailability().then(enabled => {
    console.log('getFeatureAvailability', enabled)
    input.checked = enabled
  }).catch(console.error)

})

function onChange(e) {
  console.log('onChange', e)
  setFeatureAvailability(e.target.checked)
  spinLogo()
}
input.addEventListener('change', onChange)

function getFeatureAvailability() {
  return new Promise((resolve, reject) => {
    const script = `
      localStorage.getItem('${FEATURE_AVAILABILITY_KEY}') === 'true'
    `
    chrome.devtools.inspectedWindow.eval(script, (result, exception) => {
      if(exception) {
        reject(exception)
        return
      }
      resolve(result)
    })
  })
}

function setFeatureAvailability(enabled) {
  const script = `
    localStorage.setItem('${FEATURE_AVAILABILITY_KEY}', '${enabled}')
  `
  chrome.devtools.inspectedWindow.eval(script, (result, exception) => {
    if(exception) {
      console.error(exception)
    }
    console.log('result', result)
  })
}

function spinLogo() {
  if(logoImage.classList.contains('spin')) {
    logoImage.classList.remove('spin')
  }
  void logoImage.offsetWidth
  logoImage.classList.add('spin')
}