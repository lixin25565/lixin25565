let accountAll = [{ // 存储账户json数据的数组
	username: 'Admin',
	passwd: '32768'
	},
	{
	username: 'AaBbCc',
	passwd: ''
	}
	]
function login() { //登陆判断
	let username = document.getElementById('username').value;
	let passwd = document.getElementById('passwd').value;
	let account = accountAll.filter(function(e) {
		return e.username == username
	})[0]; // 筛选账号返回数组，不存在则返回空数组
	if (!account) {
		alert('账户不存在');
	} else {
		if (account.username == username && account.passwd == passwd) {
			alert('登陆成功');
			if (username != 'Admin') {
				window.open('https://lixin25565.github.io/1.mp4','_blank');
				alert('哈哈哈！~你被骗了！n Rick Astley - Never Gonna Give You Up')
			}
		} else {
			alert('登陆失败');
}}}
function doClear() { //获取页面所有的input框，是text和password框，内容=空串
	let inputs = document.getElementsByTagName("input");
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'text' || inputs[i].type == 'password') {
			inputs[i].value = '';
		}
	}
}
//给清除按钮增加onclick事件
let btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function() {
	doClear();
});
