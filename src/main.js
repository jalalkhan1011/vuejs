import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'

Vue.use(VueRouter);

// Vue.use(VueResource);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,

  mode:'history',
  scrollBehavior(to,form){
    console.log(form);
    console.log(to);
    return{
      x:0,
      y:0,
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
