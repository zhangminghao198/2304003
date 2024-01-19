import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/admin/about.vue'),
        },
        {
          path: '/fl',
          name: 'fl',
          component: () => import('../views/admin/fl.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/admin/cart.vue'),
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/admin/user.vue'),
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.path == '/') {
    if (token) {
      return next('/admin');
    } else {
      return next();
    }
  } else {
    if (token) {
      return next();
    } else {
      return next('/');
    }
  }
});


export default router
