// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index.js'
import '../static/script/base'
// import Tost from '../static/script/tost'

import './style/style.less'
import './style/animate.css'

//less另类引入方式
//import '!style-loader!css-loader!less-loader!./style/style.less'

//懒加载具名化
//r => require.ensure([], () => r(require('./components/home.vue')), 'header-home'),

Vue.use(VueRouter)
// Vue.use(Tost)


const router = new VueRouter({
	routes: [
    {
      	path: '/',
      	component: resolve => require(['./components/home.vue'], resolve)
    },{
	      path: '/canvas',
        component: resolve => require(['./components/canvas.vue'], resolve)
    },{
      	path: '/map',
      	component : resolve => require(['./components/map.vue'], resolve)
    },{
      	path: '/axios',
      	component : resolve => require(['./components/news.vue'], resolve)
    },{
      	path: '/more',
      	component : resolve => require(['./components/more.vue'], resolve)
    }
  ]
})

new Vue({
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

