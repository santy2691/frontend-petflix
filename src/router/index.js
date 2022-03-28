import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import { authStore } from '../store/auth';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Welcome,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login', component: Login,
      meta : {
        requiresAuth: false
      }
    },
    {
      path: '/home', component: Home,
      meta : {
        requiresAuth: true
      }
    }
  ]
})


// esto sirve ara proteger las rutas 
router.beforeEach((to, from, next) => {
  const auth = authStore()
  if (from.meta.requiresAuth && !auth.isLoggedIn) return next('/login')
  else return next()
});

export default router
