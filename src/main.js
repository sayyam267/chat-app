import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDBKGYjde6yYECb-S7lPOhYPta4YsL97tg",
  authDomain: "vue-chat-f49ec.firebaseapp.com",
  projectId: "vue-chat-f49ec",
  storageBucket: "vue-chat-f49ec.appspot.com",
  messagingSenderId: "654812553802",
  appId: "1:654812553802:web:781dfd05d451a9ce14bcb3",
  measurementId: "G-TPY3HXJLNC"
};

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() => new Vue({
  render: h => h(App),
}).$mount('#app'));


