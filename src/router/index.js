import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CampingSpotsPage from '../components/CampingSpotsPage.vue'
import UserBookings from '../components/UserBookings.vue'
import LoginPage from '../components/LoginPage.vue'
import OwnerSpots from '../components/OwnerSpots.vue'
import NewSpot from '../components/NewSpot.vue'
import ChangeUserInfo from '../components/ChangeUserInfo.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/camping-spots', component: CampingSpotsPage },
  { path: '/user-bookings', component: UserBookings },
  { path: '/login', component: LoginPage },
  { path: '/owner-spots', component: OwnerSpots },
  { path: '/new-spot', component: NewSpot },
  { path: '/change-user-info', component: ChangeUserInfo }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
