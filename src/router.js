import Vue from 'vue'
import Router from 'vue-router'
import Login2 from './views/Login2.vue'
import Teste from './views/Teste.vue'
import Cards from './views/Cards.vue'
import Receita from './views/Receita.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'login2',
      component: Login2,
      meta:{
        title: 'Login',
        showToolbar: false
      }
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste,
      meta:{
        title: 'Bolo'
      }
    },
    {
      path: '/receita',
      name: 'receita',
      component: Receita,
      meta:{
        title: 'Blah'
      }
    }
  ]
})
