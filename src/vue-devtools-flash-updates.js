// This needs to be a thoughtful class name to avoid collision with users' class names
const FLASH_CLASS_NAME = 'vue-devtools-flash-updates-flash';
// This value is set in the local storage by the extension
const FEATURE_AVAILABILITY_KEY = 'VUE_DEVTOOLS_FLASH_UPDATES_ENABLED'

const animationCss = `
.${FLASH_CLASS_NAME}::before {
  animation: 1s ${FLASH_CLASS_NAME} linear forwards;
  box-sizing: border-box;

  content: '';
  pointer-events: none;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes ${FLASH_CLASS_NAME} {
  0% {
    border: 3px solid rgb(55, 175, 169, 1);
  }
  100% {
    border: 3px solid rgba(55, 175, 169, 0);
  }
}
`


function initialize() {
  const style = document.createElement('style')
  style.innerHTML = animationCss
  document.head.appendChild(style)
}

function checkAvailability() {
  const featureAvailabilityValueStr = localStorage.getItem(FEATURE_AVAILABILITY_KEY)
  const enabled = featureAvailabilityValueStr === 'true'
  return enabled
}

export default {
  install(Vue, options) {
    console.log('installing flash updates', animationCss)
    initialize()
    Vue.mixin({
      updated: function() {
        if(!checkAvailability()) return
        if (this.$el.classList) {
          if (this.$el.classList.contains(FLASH_CLASS_NAME)) {
            this.$el.classList.remove(FLASH_CLASS_NAME)
          }
          void this.$el.offsetWidth
          this.$el.classList.add(FLASH_CLASS_NAME)
        }
      },
    })
  }
}