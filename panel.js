console.log('hello from panel.js')
const input = document.getElementById('flash-on-update-checkbox')
const FEATURE_AVAILABILITY_KEY = 'VUE_DEVTOOLS_FLASH_UPDATES_ENABLED'

function onChange(e) {
  console.log('onChange', e)
  setFeatureAvailability(e.target.checked)
}
input.addEventListener('change', onChange)

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