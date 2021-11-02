import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

initializeApp({
  apiKey: "AIzaSyAy3kAlAcaM_2kH4uegiQ686qcJi5WQeQU",
  authDomain: "vue-calendar-e90b9.firebaseapp.com",
  projectId: "vue-calendar-e90b9",
  storageBucket: "vue-calendar-e90b9.appspot.com",
  messagingSenderId: "702125211183",
  appId: "1:702125211183:web:5f902a203314c9094950da"
});

export const db = getFirestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
