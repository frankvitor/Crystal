import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB5iey2l2MlnbT-RBM8kafdgcFPKxC6QqQ",
  authDomain: "crystal-94.firebaseapp.com",
  databaseURL: "https://crystal-94.firebaseio.com",
  projectId: "crystal-94",
  storageBucket: "crystal-94.appspot.com",
  messagingSenderId: "748783305431"
};
firebase.initializeApp(config);
export const db = firebase.firestore()

const settings = { timestampsInSnapshots: true };
db.settings(settings);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
