  document.getElementById('check').onclick = function(){
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;
         if (login == '' && password == '')
		   alert('Введите логин и пароль.');
	     else if (login == 'koval' && password == '?%vo2ka%DPS')
		   document.location.href=("112/koval.html");
	     else if (login == 'zeka' && password == 'eQ}NPu9l?R~*')
		   document.location.href=("112/zeka.html");
	     else if (login == 'irina' && password == 'C}Kfu{UW~0h')
		   document.location.href=("112/irina.html");
	     else alert('incorrect');
}
