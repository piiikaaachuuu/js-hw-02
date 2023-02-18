let credits = 23580;
const pricePerDroid = 3000;
const amountPerDroid = prompt();
let totalPrice = pricePerDroid * Number(amountPerDroid);

if (amountPerDroid === null) {
  alert("Операцію скасовано!");
} else if (totalPrice > credits) {
  alert("Недостатньо коштів на рахунку!");
} else if (totalPrice <= credits) {
  credits -= totalPrice;
  alert(
    `Ви купили ${amountPerDroid} телевізорів, на рахунку залишилось ${credits} кредитів.`
  );
}
