// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import resource from 'vue-resource'
import VueMaterial from '../static/script/vue-material.js'
import App from './App.vue'
import store from './store/index.js'
import utils from './util/util'

Vue.config.productionTip = false

import './style/style.less'
import './style/animate.css'
import './assets/vueMaterial/vue-material.css'
import './assets/vueMaterial/default-theme.css'
import './assets/vueMaterial/vue-material-boot.css'
import './assets/vueMaterial/icon.css'


//less另类引入方式
//import '!style-loader!css-loader!less-loader!./style/style.less'

Vue.use(VueRouter)
Vue.use(resource)
Vue.use(VueMaterial)
Vue.use(utils)

//
// Vue.material.registerTheme('default', {
//   primary: 'blue',
//   accent: 'red',
//   warn: 'red',
//   background: 'white'
// })
//
// Vue.material.setCurrentTheme('default')

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: resolve => require(['./components/login.vue'], resolve)
    },{
      path: '*',
      component: resolve => require(['./components/404.vue'], resolve),
      meta: {
        title: '404未找到'
      }
    },{
      path: '/',
      redirect: '/index',
    }, {
      path: '/index',
      component: resolve => require(['./components/index.vue'], resolve),
      children : [
        {
          path: '/',
          component: resolve => require(['./components/home.vue'], resolve)
        },
        {
          path: '/home',
          component: resolve => require(['./components/home.vue'], resolve)
        },{
          path: '/canvas',
          component: resolve => require(['./components/canvas.vue'], resolve)
        },{
          path: '/map',
          component : resolve => require(['./components/map.vue'], resolve)
        },{
          path: '/h5sql',
          component : resolve => require(['./components/database.vue'], resolve)
        },{
          path: '/axios',
          component : resolve => require(['./components/news.vue'], resolve)
        },{
          path: '/more',
          component : resolve => require(['./components/more.vue'], resolve)
        },{
          path : '/vuematerial',
          component : resolve => require(['./components/vuematerial.vue'], resolve)
        }
      ]
  }]
})


new Vue({
  el: '#app',
  router,
  store,
  data(){
    loginOpen: true;
  },
  render: h => h(App),
  created(){
    this.LoginChoose();
  },
  watch: {
    "$route": 'checkLogin'
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      if(!this.getCookie('admin')){
       //如果没有登录状态则跳转到登录页
        this.loginOpen = true;
        this.$router.push('/login')
      }else {
        this.loginOpen = false;
        if(this._route.path == '/login'){
          this.$router.push('/index')
        }
      }
    },
    LoginChoose(){
      if(!this.getCookie('admin')){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login')
      }else{
        //否则就跳转到登录后的页面
        if(this.loginOpen){
          this.$router.push('/home')
        }
      }
    }
  }
});

