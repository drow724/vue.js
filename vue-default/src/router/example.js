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
  }
]