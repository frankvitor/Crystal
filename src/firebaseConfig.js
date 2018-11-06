import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyB5iey2l2MlnbT-RBM8kafdgcFPKxC6QqQ",
  authDomain: "crystal-94.firebaseapp.com",
  databaseURL: "https://crystal-94.firebaseio.com",
  projectId: "crystal-94",
  storageBucket: "crystal-94.appspot.com",
  messagingSenderId: "748783305431"
})
export const db = firebase.firestore()

const settings = {timestampsInSnapshots: true};
db.settings(settings);

