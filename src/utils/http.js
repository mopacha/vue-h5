import { Toast } from 'vant'
import store from '@/store'
import Http from '@coofy/http'

const options = {
	baseUrl: process.env.NODE_ENV === 'production' ? '' : '/api',
	timeout: 10000,
	headers: {}
}
const http = new Http(options)

const request = {
	ask: params =>
		new Promise((resolve, reject) => {
			http
				.ask(params)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					switch (err.status) {
						case 400:
							err.msg = '错误请求'
							break
						case 401: {
							err.msg = '未授权，请重新登录'
							window.location = location.origin + '/#/reminder'
							break
						}
						case 403:
							err.msg = '拒绝访问'
							break
						case 404:
							err.msg = '请求错误,未找到该资源'
							break
						case 405:
							err.msg = '请求方法未允许'
							break
						case 408:
							err.msg = '请求超时'
							break
						case 500:
							err.msg = '服务器端出错'
							break
						case 501:
							err.msg = '网络未实现'
							break
						case 502:
							err.msg = '网络错误'
							break
						case 503:
							err.msg = '服务不可用'
							break
						case 504:
							err.msg = '网络超时'
							break
						case 505:
							err.msg = 'http版本不支持该请求'
							break
						default:
							err.msg = `连接错误${err.status}`
					}
					Toast(err.data || err.msg)
					store.dispatch('onLoading', false)
					reject(err)
				})
		})
}
export default request
