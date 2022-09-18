const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/examples/Dashboard.vue') },
      { path: '/Dashboard2', component: () => import('pages/examples/Dashboard2.vue') },
      { path: '/Profile', component: () => import('pages/examples/UserProfile.vue') },
      { path: '/Map', component: () => import('pages/examples/MapM.vue') },
      { path: '/MapMarker', component: () => import('pages/examples/MapMarker.vue') },
      { path: '/TreeTable', component: () => import('pages/examples/TreeTable.vue') },
      { path: '/StreetView', component: () => import('pages/examples/StreetView.vue') },
      { path: '/Cards', component: () => import('pages/examples/Cards.vue') },
      { path: '/TablesP', component: () => import('pages/examples/TablesP.vue') },
      { path: '/Contact', component: () => import('pages/examples/ContacT.vue') },
      { path: '/Checkout', component: () => import('pages/examples/Checkout.vue') },
      { path: '/Ecommerce', component: () => import('pages/examples/ProductCatalogues.vue') },
      { path: '/Pagination', component: () => import('pages/examples/Pagination.vue') },
      { path: '/Charts', component: () => import('pages/examples/ChartsP.vue') },
      { path: '/Calendar', component: () => import('pages/examples/Calendar.vue') },
      { path: '/Directory', component: () => import('pages/examples/Directory.vue') },
      { path: '/Footer', component: () => import('pages/examples/Footer.vue') },
      { path: '/CardHeader', component: () => import('pages/examples/CardHeader.vue') }

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Mail',
    component: () => import('layouts/Mail.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  },
  {
    path: '/Pricing',
    component: () => import('pages/Pricing.vue')
  },
  {
    path: '/Login-1',
    component: () => import('pages/example/LoginP.vue')
  },
  {
    path: '/Lock',
    component: () => import('pages/LockScreen.vue')
  },
  {
    path: '/Lock-2',
    component: () => import('pages/LockScreen-2.vue')
  }
]

export default routes
