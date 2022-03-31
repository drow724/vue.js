export default  [
  {
    path: '/exampleview1',
    name: 'ExampleView1',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView1.vue')
  },
  {
    path: '/exampleview2',
    name: 'ExampleView2',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView2.vue')
  },
  {
    path: '/exampleview3',
    name: 'ExampleView3',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView3.vue')
  },
  {
    path: '/exampleview4',
    name: 'ExampleView4',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView4.vue')
  },
  {
    path: '/exampleView5',
    name: 'ExampleView5',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView5.vue')
  },
  {
    path: '/exampleView6',
    name: 'ExampleView6',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView6.vue')
  },
  {
    path: '/exampleView7',
    name: 'ExampleView7',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView7.vue')
  },
  {
    path: '/exampleView8',
    name: 'ExampleView8',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView8.vue')
  },
  {
    path: '/exampleView9',
    name: 'ExampleView9',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView9.vue')
  },
  {
    path: '/exampleView10',
    name: 'ExampleView10',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/example/ExampleView10.vue')
  }
]