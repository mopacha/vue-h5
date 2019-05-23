import '@coofy/h5-adapt'
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import '@/permission/index'
import FastClick from 'fastclick'


FastClick.attach(document.body)

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})
