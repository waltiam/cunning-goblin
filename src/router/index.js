import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../HomeView.vue"
import SecretView from '@/SecretView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/Secret', component: SecretView }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
