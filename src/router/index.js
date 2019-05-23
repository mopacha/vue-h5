import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

routes.forEach(route => {
	route.path = route.path || '/' + (route.name || '')
})

export default new Router({ routes }) 




