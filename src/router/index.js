import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import DashboardView from '../views/DashboardView.vue'
// import UsersView from '../views/UsersView.vue'
// import ReportsView from '../views/ReportsView.vue'
import dashboard from '@/pages/master/dashboard.vue'
import home from '@/pages/home.vue'
import profile from '@/pages/profile.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  // {
  //   path: '/users',
  //   name: 'users',
  //   component: UsersView
  // },
  // {
  //   path: '/reports',
  //   name: 'reports',
  //   component: ReportsView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router