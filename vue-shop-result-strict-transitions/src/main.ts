import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { transitions } from '../../strict-transitions/pinia/transitionsPlugin.ts'
import { productStoreId, productTransitions } from './store/productStore.ts'
import { filterStoreId, filterTransitions } from './store/filterStore.ts'

const app = createApp(App)
const pinia = createPinia()

pinia.use(
  transitions({
    [productStoreId]: productTransitions,
    [filterStoreId]: filterTransitions,
  })
)

app.use(pinia)
app.mount('#app')
