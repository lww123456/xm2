import Vue from 'vue';

import App from './App.vue';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);



//路由搭建
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './router.config.js'
const router=new VueRouter({
  routes,
  mode:'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
