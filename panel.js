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
  const reverse = e.target.checked
  spinLogo(reverse)
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

function spinLogo(reverse=false) {
  function removeClassName(className) {
    if(logoImage.classList.contains(className)) {
      logoImage.classList.remove(className)
    }
  }
  ['spin-reversed', 'spin'].forEach(removeClassName)
  const newClassName = reverse ? 'spin-reversed' : 'spin'
  void logoImage.offsetWidth
  logoImage.classList.add(newClassName)
}