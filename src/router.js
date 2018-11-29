import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Teste from './views/Teste.vue'
import Cards from './views/Cards.vue'
import Receita from './views/Receita.vue'
import Cadastro from './components/Cadastro.vue'
import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';

Vue.use(Router)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Cards
    },
    {
      path: '/auth',
      component: Auth,
      meta: {
        title: 'Entrar',
        showToolbar: false
      }
    },
    { path: '/success', component: AuthSuccess },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
      meta: {
        title: 'Cards'
      }
    },
    {
      path: '/receita',
      name: 'receita',
      component: Receita,
      meta: {
        title: 'Receita'
      }
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
      meta: {
        title: 'Cadastro'
      }
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste,
      meta: {
        title: 'Bolo'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Storage Firebase'
      }
    },
  ]
});
export default router;

