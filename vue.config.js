const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
	lintOnSave: false,
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-h5/' : '/',
	productionSourceMap: false,
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer({
						browsers: ['Android >= 4.0', 'iOS >= 7']
					}),
					pxtorem({
						rootValue: 37.5,
						propList: ['*'],
						selectorBlackList: ['van-circle__layer']	// 仅在使用 Circle 组件时需要,参见 https://github.com/youzan/vant/issues/1948
					})
				]
			}
		}
	}
}
