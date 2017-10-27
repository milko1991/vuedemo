// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index.js'
import Home from './components/home.vue'
import Map from './components/map.vue'
import News from './components/news.vue'
import Login from './components/login.vue'
import More from './components/more.vue'

import './style/style.less'
import './style/animate.css'

//import '!style-loader!css-loader!less-loader!./style/style.less'



Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
    {
      path: '/',
      component: Home,
    },{
      path: '/map',
      component : Map
    },{
      path: '/news',
      component : News
    },{
      path: '/login',
      component : Login
    },{
      path: '/more',
      component : More
    }
  ]
})

var app = new Vue({
  el: '#app',
  store,
  router,
  ...App,
});

//const app = new Vue({
//el: '#app',
//router,
//store,
//template: '<App/>',
//components: { App }
//})


//var app = new Vue({
//el: '#app',
// // store,
//router,
//...App,
//});

