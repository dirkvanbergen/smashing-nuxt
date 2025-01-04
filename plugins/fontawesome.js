import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCoins, faCrown, faPenFancy, faBaby, faComment, faUsers, faBars, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope);  
library.add(faCoins);  
library.add(faCrown);  
library.add(faPenFancy);  
library.add(faBaby);  
library.add(faComment);  
library.add(faUsers);  
library.add(faBars);  
library.add(faFile);  

Vue.component('font-awesome-icon', FontAwesomeIcon)