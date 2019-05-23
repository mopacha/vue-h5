import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import dialog from './modules/dialog'
import user from './modules/user'
import loading from './modules/loading'
import getters from './getters'

export default new vuex.Store({
	modules: {
		dialog,
		user,
		loading
	},
	getters
})
