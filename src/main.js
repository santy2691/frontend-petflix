import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { authStore } from './store/auth';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.config.globalProperties.$auth = authStore()
app.mount('#app')
