import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';
Vue.use(VueRouter)

 
const router = new VueRouter({ 
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        requiresGuest: true
        
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta:{
        requiresGuest: true,
        requiresAuth: false
        
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '../views/Login.vue'),
      meta:{
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( '../views/Register.vue'),
      meta:{
        requiresGuest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import( '../views/Profile.vue'),
      meta:{
        requiresAuth: true
      }
    }
  ] 
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      //redirecting to login page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      //redirecting to profile page
      next('/profile');
    } else {
      next();
    }
  }
});

export default router;
