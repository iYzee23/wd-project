import { createRouter, createWebHistory } from 'vue-router'
import PocetnaView from '../views/PocetnaView.vue'
import PocetnaViewEN from '../views/PocetnaViewEN.vue'
import UmetnikView from '../views/UmetnikView.vue'
import UmetnikViewEN from '../views/UmetnikViewEN.vue'
import UmetniciView from '../views/UmetniciView.vue'
import UmetniciViewEN from '../views/UmetniciViewEN.vue'
import MojProfilView from '../views/MojProfilView.vue'
import MojProfilViewEN from '../views/MojProfilViewEN.vue'
import ONamaView from '../views/ONamaView.vue'
import ONamaViewEN from '../views/ONamaViewEN.vue'
import SlikeView from '../views/SlikeView.vue'
import SlikeViewEN from '../views/SlikeViewEN.vue'
import SkulptureView from '../views/SkulptureView.vue'
import SkulptureViewEN from '../views/SkulptureViewEN.vue'
import ModaView from '../views/ModaView.vue'
import ModaViewEN from '../views/ModaViewEN.vue'
import SlikaView from '../views/SlikaView.vue'
import SlikaViewEN from '../views/SlikaViewEN.vue'
import SkulpturaView from '../views/SkulpturaView.vue'
import SkulpturaViewEN from '../views/SkulpturaViewEN.vue'
import KreacijaView from '../views/KreacijaView.vue'
import KreacijaViewEN from '../views/KreacijaViewEN.vue'
import LoginView from '../views/LoginView.vue'
import LoginViewEN from '../views/LoginViewEN.vue'

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: PocetnaView
  },
  {
    path: '/EN/',
    name: 'pocetnaEN',
    component: PocetnaViewEN
  },
  {
    path: '/onama',
    name: 'onama',
    component: ONamaView
  },
  {
    path: '/EN/onama',
    name: 'onamaEN',
    component: ONamaViewEN
  },
  {
    path: '/mojprofil',
    name: 'mojprofil',
    component: MojProfilView
  },
  {
    path: '/EN/mojprofil',
    name: 'mojprofilEN',
    component: MojProfilViewEN
  },
  {
    path: '/umetnici',
    name: 'Umetnici',
    component: UmetniciView
  },
  {
    path: '/EN/umetnici',
    name: 'UmetniciEN',
    component: UmetniciViewEN
  },
  {
    path: '/umetnik/:id',
    name: 'Umetnik',
    component: UmetnikView
  },
  {
    path: '/EN/umetnik/:id',
    name: 'UmetnikEN',
    component: UmetnikViewEN
  },
  {
    path: '/umetnine/slike',
    name: 'Slike',
    component: SlikeView
  },
  {
    path: '/EN/umetnine/slike',
    name: 'SlikeEN',
    component: SlikeViewEN
  },
  {
    path: '/umetnine/skulpture',
    name: 'Skulpture',
    component: SkulptureView
  },
  {
    path: '/EN/umetnine/skulpture',
    name: 'SkulptureEN',
    component: SkulptureViewEN
  },
  {
    path: '/umetnine/moda',
    name: 'Moda',
    component: ModaView
  },
  {
    path: '/EN/umetnine/moda',
    name: 'ModaEN',
    component: ModaViewEN
  },
  {
    path: '/slika/:id',
    name: 'Slika',
    component: SlikaView
  },
  {
    path: '/EN/slika/:id',
    name: 'SlikaEN',
    component: SlikaViewEN
  },
  {
    path: '/skulptura/:id',
    name: 'Skulptura',
    component: SkulpturaView
  },
  {
    path: '/EN/skulptura/:id',
    name: 'SkulpturaEN',
    component: SkulpturaViewEN
  },
  {
    path: '/kreacija/:id',
    name: 'Kreacija',
    component: KreacijaView
  },
  {
    path: '/EN/kreacija/:id',
    name: 'KreacijaEN',
    component: KreacijaViewEN
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/EN/login',
    name: 'LoginEN',
    component: LoginViewEN
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
