import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import store from './store'
import fb from 'firebase'


Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyConprsirqVkWHAWOICO6qO-Ybe_gkP7i0",
      authDomain: "vue-project-2e38c.firebaseapp.com",
      projectId: "vue-project-2e38c",
      storageBucket: "vue-project-2e38c.appspot.com",
      messagingSenderId: "99971442262",
      appId: "1:99971442262:web:0182d148ea55ec8ca27df7",
      measurementId: "G-TW6WWHZ3DT"
    };
  // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
   
}).$mount('#app')