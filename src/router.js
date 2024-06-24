import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/home/Home.vue'),
      children: [
        {
          path: '/',
          name: 'projects',
          component: () => import('./views/projects/Projects.vue')
        },
        {
          path: '/configuration',
          name: 'configuration',
          component: () => import('./views/configuration/Configuration.vue')
        },
        {
          path: '/projects/:id',
          name: 'project',
          component: () => import('./views/project/Project.vue')
        }
      ]
    }
  ]
})

export default router
