
const animationCss = `
.flash::before {
  animation: 1s flash linear forwards;
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

@keyframes flash {
  0% {
    border: 3px solid rgb(55, 175, 169, 1);
  }
  100% {
    border: 3px solid rgba(55, 175, 169, 0);
  }
}
`




const style = document.createElement('style')
style.innerHTML = animationCss
document.head.appendChild(style)

function checkAvailability() {
  const FEATURE_AVAILABILITY_KEY = 'VUE_DEVTOOLS_FLASH_UPDATES_ENABLED'
  const featureAvailabilityValueStr = localStorage.getItem(FEATURE_AVAILABILITY_KEY)
  const enabled = featureAvailabilityValueStr === 'true'
  return enabled
}

Vue.mixin({
  updated: function() {
    if(!checkAvailability()) return
    if (this.$el.classList) {
      if (this.$el.classList.contains('flash')) {
        this.$el.classList.remove('flash')
      }
      void this.$el.offsetWidth;
      this.$el.classList.add('flash')
    }
  },
})