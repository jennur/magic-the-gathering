import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import CardOverview from './views/CardOverview.vue'
import CardSpecific from './views/CardSpecific.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/card-overview',
      name: 'card-overview',
      component: CardOverview
    },
    {
      path: '/card-specific/:id',
      name: 'card-specific',
      component: CardSpecific
    }
  ]
})
