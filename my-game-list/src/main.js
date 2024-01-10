import { createApp } from 'vue'
import './style.css'
  import App from './App.vue'
  import router from './router'
  import VueLazyLoad from 'vue3-lazyload'
  import { createPinia } from 'pinia'
  
  const app = createApp(App)
  const pinia = createPinia()


  app.use(pinia)
  app.use(router)
  app.use(VueLazyLoad, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: '../src/assets/loading.gif',
    attempt: 1
  })
  app.mount('#app')
  