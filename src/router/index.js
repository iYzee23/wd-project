import { createRouter, createWebHistory } from 'vue-router'
import PocetnaView from '../views/PocetnaView.vue'
import UmetnikView from '../views/UmetnikView.vue'
import UmetniciView from '../views/UmetniciView.vue'
import MojProfilView from '../views/MojProfilView.vue'
import ONamaView from '../views/ONamaView.vue'
import SlikeView from '../views/SlikeView.vue'
import SkulptureView from '../views/SkulptureView.vue'
import ModaView from '../views/ModaView.vue'
import SlikaView from '../views/SlikaView.vue'
import SkulpturaView from '../views/SkulpturaView.vue'
import KreacijaView from '../views/KreacijaView.vue'

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: PocetnaView
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
    path: '/umetnine/slike',
    name: 'Slike',
    component: SlikeView
  },
  {
    path: '/umetnine/skulpture',
    name: 'Skulpture',
    component: SkulptureView
  },
  {
    path: '/umetnine/moda',
    name: 'Moda',
    component: ModaView
  },
  {
    path: '/slika/:id',
    name: 'Slika',
    component: SlikaView
  },
  {
    path: '/skulptura/:id',
    name: 'Skulptura',
    component: SkulpturaView
  },
  {
    path: '/kreacija/:id',
    name: 'Kreacija',
    component: KreacijaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
