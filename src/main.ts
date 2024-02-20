import { createApp } from 'vue'
import router from './plugins/router.ts'
import './style.css'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
const myApp = createApp(App)



myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)

myApp.mount('#app')