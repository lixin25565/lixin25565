function login() { //登陆判断
	window.open('ZP','_self');
	window.alert('哈哈哈！~你被骗了！\n Never Gonna Give You Up！~')
}
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
