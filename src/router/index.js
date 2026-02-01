import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import TipsView from '../views/TipsView.vue'
import TaiLieuView from '../views/TaiLieuView.vue'

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
    {
      path: '/tai-lieu',
      name: 'documents',
      component: TaiLieuView,
    },
  ],
})

export default router
