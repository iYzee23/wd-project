import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UmetnikView from '../views/UmetnikView.vue'
import UmetniciView from '../views/UmetniciView.vue'
import MojProfilView from '../views/MojProfilView.vue'
import ONamaView from '../views/ONamaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/onama',
    name: 'onama',
    component: ONamaView
  },
  {
    path: '/mojprofil',
    name: 'mojprofil',
    component: MojProfilView
  },
  {
    path: '/umetnici',
    name: 'Umetnici',
    component: UmetniciView
  },
  {
    path: '/umetnik/:id',
    name: 'Umetnik',
    component: UmetnikView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
