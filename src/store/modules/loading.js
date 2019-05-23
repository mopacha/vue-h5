export default {
	state: {
		isLoading: false
	},
	mutations: {
		UPDATE_LOADING(state, flag) {
			state.isLoading = flag
		}
	},
	actions: {
		onLoading({commit}, flag) {
			commit('UPDATE_LOADING', flag)
		}
	}
}
