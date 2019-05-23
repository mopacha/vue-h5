export default [
	{ path: '*', redirect: 'goods' },
	{
		name: 'login',
		component: () => import('@/view/login'),
		meta: {
			title: '登录'
		}
	},
	{
		name: 'goods',
		component: () => import('@/view/goods'),
		meta: {
			title: '商品'
		}
	},
	{
		name: 'my',
		component: () => import('@/view/my'),
		meta: {
			title: '个人中心'
		}
	},
	{
		name: 'cart',
		component: () => import('@/view/cart'),
		meta: {
			title: '购物车'
		}
	}
]
