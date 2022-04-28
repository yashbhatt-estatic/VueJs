import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import LoginComponent from '@/components/LoginComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
