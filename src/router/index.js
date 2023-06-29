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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
