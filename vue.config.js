const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')


module.exports = {
	lintOnSave: false,
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-h5/' : '/',
	productionSourceMap: false,
	devServer: {
		port: '3000',
		open: false,
		proxy: {
			'api/': {
				target: 'http://10.12.6.13',
				changeOrigin: true,
				pathRewrite: {
				  '^/api':''
				}
			}
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer({
						overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
					}),
					pxtorem({
						rootValue: 37.5,
						propList: ['*', '!font-size'],
						selectorBlackList: ['van-circle__layer', 'ignore']	// 仅在使用 Circle 组件时需要,参见 https://github.com/youzan/vant/issues/1948
					})
				]
			}
		}
	}
}
