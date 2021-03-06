// This needs to be a thoughtful class name to avoid collision with users' class names
const FLASH_CLASS_NAME = 'vue-devtools-flash-updates-flash';
// This value is set in the local storage by the extension
const FEATURE_AVAILABILITY_KEY = 'VUE_DEVTOOLS_FLASH_UPDATES_ENABLED'

const animationCss = `
/* this might cause an issue depending on situations. needs to be implemented with better solutions.*/
.${FLASH_CLASS_NAME} {
  position: relative;
}
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

const DEFAULT_OPTIONS = Object.freeze({
  logUpdatedComponents: false,
  isProduction: false
})

function buildOptions(_options) {
  const options = { ...DEFAULT_OPTIONS }
  if (_options != null) {
    const { logUpdatedComponents, isProduction } = _options
    if (logUpdatedComponents) {
      if (typeof logUpdatedComponents !== 'boolean') {
        throw new Error('logUpdatedComponents must be a boolean value')
      }
      options.logUpdatedComponents = logUpdatedComponents
    }
    if (isProduction) {
      if (typeof isProduction !== 'boolean') {
        throw new Error('isProduction must be a boolean value')
      }
      options.isProduction = isProduction
    }
  }
  return options
}

function log(content) {
  console.debug(`vue-devtool-flash-updates: detected updates on %c ${content}`, 'color: #D8C909');
}

export default {
  install(Vue, _options) {
    const options = buildOptions(_options)
    if (!options.isProduction) {
      initialize()
      Vue.mixin({
        updated: function() {
          if(!checkAvailability()) return
          if (options.logUpdatedComponents) {
            log(this.$options.name)
          }
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
}