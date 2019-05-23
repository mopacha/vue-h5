//判断浏览器当前使用的语言
export function judgeLanguage() {
	let currentLanguage = (
		navigator.browserLanguage || navigator.language
	).toLowerCase() // 非IE
	if (!currentLanguage) {
		// IE浏览器
		currentLanguage = navigator.browserLanguage
	}
	console.log(currentLanguage)
	return currentLanguage
}

// 判断是Android还是iOS
export function judgeClient() {
	let client = ''
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		//判断iPhone|iPad|iPod|iOS
		client = 'IOS'
	} else if (/(Android)/i.test(navigator.userAgent)) {
		//判断Android
		client = 'Android'
	} else {
		client = 'PC'
	}
	return client
}

//判断访问终端
export function judgeTerminal() {
	let u = navigator.userAgent
	return {
		trident: u.indexOf('Trident') > -1, //IE内核
		presto: u.indexOf('Presto') > -1, //opera内核
		webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
		iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
		iPad: u.indexOf('iPad') > -1, //是否iPad
		webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
		weixin: u.indexOf('MicroMessenger') > -1, //是否微信
		qq: u.match(/\sQQ/i) == ' qq' //是否QQ
	}
}

// 获取url 参数 let fType = getUrllets("id")
export function getUrlVars(name) {
	let query = window.location.hash.split("?")[1]
	if(query) {
		let lets = query.split('&')
		for (let i = 0; i < lets.length; i++) {
			let pair = lets[i].split('=')
			if (pair[0] == name) {
				return pair[1]
			}
		}
	}

	return false
}
