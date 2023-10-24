import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faExclamation, faLaptopCode,faSection, faBriefcase, faCode, faAddressBook, faHome, faCertificate, faBars, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/route'

library.add(faChevronDown, faLaptopCode,faUser, faBars, faAddressCard, faExclamation, faLinkedin, faSquareGithub, faSquareInstagram, faSection, faBriefcase, faCode, faAddressBook, faHome, faCertificate)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
