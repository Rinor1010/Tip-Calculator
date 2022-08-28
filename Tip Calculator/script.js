let bill = document.getElementById("bill");
let person = document.getElementById("person");
const custom = document.getElementById("custom");
const billHtml = document.getElementById("billHtml");
const personHtml = document.getElementById("personHtml");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("total");
const buttons = document.querySelectorAll(".bill_buttons .buttons button");
const resetBtn = document.getElementById("reset");
const errordiv1 = document.querySelector(".errordiv1");
const errordiv2 = document.querySelector(".errordiv2");
let tipValue = 0.15;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    tipValue = button.value / 100;
    buttons.forEach((btn) => btn.classList.remove("btn__active"));
    button.classList.add("btn__active");
    calculate();
  });
});

custom.addEventListener("input", () => {
  tipValue = custom.value / 100;
  console.log(tipValue);
  calculate();
});

function calculate() {
  let tip = (bill.value * tipValue) / person.value;
  tip = Math.round(tip * 1e2) / 1e2;
  tipAmount.innerText = `$${tip}`;
  let total = (bill.value / person.value + tip).toFixed(2);
  totalAmount.innerText = `$${total}`;
}

document.addEventListener("input", () => {
  if (/[A-z]/i.test(bill.value)) {
    billHtml.classList.remove("correct");
    billHtml.classList.add("error");
    errordiv1.innerText = `Invalid Input!`;
  } else {
    billHtml.classList.remove("error");
    billHtml.classList.add("correct");
    errordiv1.innerText = "";
    calculate();
  }
  if (/[A-z]/i.test(person.value)) {
    personHtml.classList.remove("correct");
    personHtml.classList.add("error");
    errordiv2.innerText = `Invalid Input!`;
  } else {
    personHtml.classList.remove("error");
    personHtml.classList.add("correct");
    errordiv2.innerText = "";
    calculate();
  }
});

resetBtn.addEventListener("click", () => {
  tip = 0;
  total = 0;
  bill.value = 0;
  person.value = 0;
  custom.value = 0;
  tipAmount.innerText = `$0.00`;
  totalAmount.innerText = `$0.00`;
});
