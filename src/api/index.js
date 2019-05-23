import http from '@/utils/http'
import '@/mock'

export const login = data => {
	return http.ask({
		url: '/login',
		method: 'post',
		data
	})
}


