import { login } from '@/api'

import { setCookie } from '@/utils/storage'

export default {
	state: {
		token: ''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		}
	},
	actions: {
		Login({ commit }, data) {
			return new Promise((resolve, reject) => {
				login(data)
					.then(result => {
						const token = result.token
						setCookie('token', token)
						if (result) {
							return resolve(result)
						}
					})
					.catch(error => {
						reject(error)
					})
			})
		}
	}
}
