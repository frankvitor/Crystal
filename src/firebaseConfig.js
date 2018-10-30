import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'crystal-94',
  databaseURL: 'https://crystal-94.firebaseio.com'
})
export const db = firebase.firestore()

const settings = {timestampsInSnapshots: true};
db.settings(settings);