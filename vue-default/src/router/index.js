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
  },
  {
    path: '/exampleview',
    name: 'ExampleView',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provide',
    name: 'ProvideInject',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/ProvideInject.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/MixinTest.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/Calculator.vue')
  },
  {
    path: '/composition',
    name: 'Composition API',
    component: () => import( /* webpackChunkName: "composition" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/composition2',
    name: 'Composition API2',
    component: () => import( /* webpackChunkName: "composition2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/composition3',
    name: 'Composition API3',
    component: () => import( /* webpackChunkName: "composition3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/composition4',
    name: 'Composition API4',
    component: () => import( /* webpackChunkName: "composition4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/composition_provide',
    name: 'Composition API Provide',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/CustomDirective.vue')
  },
  {
    path: '/pluginsView',
    name: 'PluginsView',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/Plugins.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
