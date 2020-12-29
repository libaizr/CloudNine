import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path:'/best',
    component:()=>import('../views/best/Best.vue')
  },
  {
    path:'/cart',
    component:()=>import('../views/cart/Cart.vue')
  },
  {
    path:'/profile',
    component:()=>import('../views/user/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
