import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'; // Importe o CSS do Bootstrap
import 'bootstrap'; // Importe o JavaScript do Bootstrap

const app = createApp(App)

app.use(router)

app.mount('#app')
