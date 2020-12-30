import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);

// Vue.use(VueResource);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
