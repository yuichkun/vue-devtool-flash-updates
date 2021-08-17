console.log('hello from panel.js')
const input = document.getElementById('flash-on-update-checkbox')

function onChange(e) {
  console.log('onChange', e)
}
input.addEventListener('change', onChange)

