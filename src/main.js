import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import Landing from './components/Landing'
import HomePage from './components/HomePage'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      component : Landing
    },
    {
      path : '/home',
      component : HomePage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
