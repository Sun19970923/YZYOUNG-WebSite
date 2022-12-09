// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Loading } from 'quasar'
import { createPinia } from 'pinia'
import router from './router/index' // import vue-router


// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    brand: {
      primary: '#1976d2',
      secondary: '#26A69A',
      accent: '#9C27B0',

      dark: '#1d1d1d',
      'dark-page': '#121212',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    },
    Loading
  }, // import Quasar plugins and add here
  config: {
    loading: {
      delay: 400,
      message: "Loading..."
    }
  }
})
myApp.use(createPinia())

myApp.use(router) // Mount route
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
