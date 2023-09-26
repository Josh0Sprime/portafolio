import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faExclamation, faSection, faBriefcase, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAddressCard, faExclamation, faLinkedin, faSquareGithub, faSquareInstagram, faSection, faBriefcase, faCode, faAddressBook)

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
