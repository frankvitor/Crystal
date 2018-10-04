import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Teste from './views/Teste.vue'
import Cards from './views/Cards.vue'
import Receita from './views/Receita.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Cards
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste
    },
    {
      path: '/receita',
      name: 'receita',
      component: Receita
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
