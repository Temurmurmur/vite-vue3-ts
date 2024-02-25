import { createApp } from 'vue'
import router from './plugins/router.ts'
import './style.css'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
const myApp = createApp(App)

import * as VKID from '@vkid/sdk';

// console.log(process.env.APP_ID)
VKID.Config.set({
    app: import.meta.env.VITE_APP_ID, // Идентификатор приложения.
    redirectUrl: import.meta.env.VITE_REDIRECT_URL, // Адрес для перенаправления.
});

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)

myApp.mount('#app')

