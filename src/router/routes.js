const routes = [

  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/views/Home.vue'),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    redirect: '/home',
  },
]
export default routes
