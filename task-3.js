const ADMIN_PASSWORD = "jqueryismyjam";
const password = prompt();
let message;

if (password === null) {
  message = "Операцію скасовано!";
} else if (ADMIN_PASSWORD === password) {
  message = "Ласкаво просимо!";
} else if (ADMIN_PASSWORD !== password) {
  message = "Доступ заборонено, невірний пароль!";
}
alert(message);
