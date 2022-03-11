import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Welcome 
    },
    {
      path: '/login', component: Login
    }
  ]
})

export default router
