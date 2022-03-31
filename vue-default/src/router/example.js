export default  [
  {
    path: '/exampleview',
    name: 'ExampleView',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView.vue')
  },
  {
    path: '/exampleview2',
    name: 'ExampleView2',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView2.vue')
  },
  {
    path: '/exampleview3',
    name: 'ExampleView3',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView3.vue')
  },
  {
    path: '/exampleview4',
    name: 'ExampleView4',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView4.vue')
  },
  {
    path: '/exampleView5',
    name: 'ExampleView5',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView5.vue')
  },
  {
    path: '/exampleView6',
    name: 'ExampleView6',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ExampleView6.vue')
  }
]