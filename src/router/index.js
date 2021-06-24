import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import avt from '../views/About.vue'
import tod from '../views/todolist.vue'
import lbt from '../views/LbTu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/avt',
    name: 'avt',
    component: avt
  },
  {
    path: '/tod',
    name: 'tod',
    component: tod
  },
  {
    path: '/lbt',
    name: 'lbt',
    component: lbt
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
