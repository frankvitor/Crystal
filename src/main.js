import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueFire)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    created() {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.$router.push('/auth')
        }
      });
    },
    el: '#app',
    render: h => h(App)
  })
})
