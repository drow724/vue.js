import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import example from '../router/example.js'
//import ContactView from '../views/ContactView.vue'
//import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ContactView.vue') //주석을 이용하여서 prefetch 부분 적용
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/DataBindingView.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/DataBindingHtml.vue')
  },
  ...example,
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ServerData.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
