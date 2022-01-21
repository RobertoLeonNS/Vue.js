import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
import { currrency } from './currency'

const app = createApp(App)

app.use(store)

app.mount('#app')