require('./bootstrap');
// IMPORT
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import Axios from 'axios'
// Use
Vue.use(VueHead)
Vue.use(VueRouter)
// Components
const Home = require('./components/Home.vue').default

const routes = [
	{
		path: '/',
		component: Home,
	},
]
// Router
const router = new VueRouter({
	routes,
	mode: 'history',
   scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      } else {
         return { x: 0, y: 0 }
      }
   }
})
// App
const app = new Vue({
	el: '#app',
	router,
	methods:{
	}
})
