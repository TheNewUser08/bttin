import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import TipsView from '../views/TipsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lich-thi',
      name: 'schedule',
      component: ScheduleView,
    },
    {
      path: '/meo-on-thi',
      name: 'tips',
      component: TipsView,
    },
  ],
})

export default router
