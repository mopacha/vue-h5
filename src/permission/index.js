import router from '@/router'
import store from '@/store'
import { getCookie } from '@/utils/storage'

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
	store.dispatch('onLoading', true)
	const title = to.meta && to.meta.title
	if (title) {
		document.title = title
	}
	const token = getCookie('token')
	if (token) {
		next()
	} else {
		if (whiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			next('/login')
		}
	}
})

router.afterEach((to, from) => {
	store.dispatch('onLoading', false)
})
