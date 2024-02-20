import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: "/",
    name: 'home',
    // we use /src/layouts/User component which is imported above
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes, // short for `plugins: plugins`
})

export default router
