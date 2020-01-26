function loadPage(link) {
	let request = new XMLHttpRequest();
	request.open('GET', link);
	request.send();

	request.onload = function() {
		document.getElementById('main_div').innerHTML = request.response;
	}
}

function signUp() {
	if (isValid(true)) {
		let login = document.getElementById('login').value;
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;

		let authorizator = new Authorizator(login, email, password, 'http://localhost:8080/task3/login');
		authorizator.doRequest('signUp').then(
			result => {
				if (result.status == 'success') {
					loadPage('welcome.html');
				}
			},
			error => alert(JSON.stringify(error))
		);
	}
}

function signIn() {
	if (isValid(false)) {
		let login = document.getElementById('login').value;
		let password = document.getElementById('password').value;

		let authorizator = new Authorizator(login, 'none', password, 'http://localhost:8080/task3/login');
		authorizator.doRequest('signIn').then(
			result => {
				if (result.status == 'success') {
					loadPage('welcome.html');
				}
				else {
					loadPage('registration.html');
				}
			},
			error => alert(JSON.stringify(error))
		);
	}
}

function chooseAction() {
	let action = document.getElementById('choosing_field').innerText;
	if (action == 'pass login') {
		loadPage('login.html');
		document.getElementById('choosing_field').innerText = 'get registered';
	}
	else if (action == 'get registered') {
		loadPage('registration.html');
		document.getElementById('choosing_field').innerText = 'pass login';
	}
}

function isValid(emailFlag) {
	let validationStatus = true;
	let validator = new Validator();
	document.getElementById('login_status').innerText = '';
	if (!validator.validate(document.getElementById('login').value, 'login')) {
		document.getElementById('login_status').innerText = 'login is not valid';
		validationStatus = false;
	}
	if (emailFlag == true) {
		document.getElementById('email_status').innerText = '';
		if (!validator.validate(document.getElementById('email').value, 'email')) {
			document.getElementById('email_status').innerText = 'email is not valid';
			validationStatus = false;
		}
	}
	document.getElementById('password_status').innerText = '';
	if (!validator.validate(document.getElementById('password').value, 'password')) {
		document.getElementById('password_status').innerText = 'password is not valid';
		validationStatus = false;
	}
	return validationStatus;
}