import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/backend/Products.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/frontend/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/frontend/Home.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/frontend/Login.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/frontend/Products.vue')
      },
      {
        path: 'products/:id',
        name: 'details',
        component: () => import('@/views/frontend/Details.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/frontend/Checkout.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('@/views/frontend/Payment.vue')
      },
      {
        path: 'completed',
        name: 'completed',
        component: () => import('@/views/frontend/Completed.vue')
      }
    ]
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
