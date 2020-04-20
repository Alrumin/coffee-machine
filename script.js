"use strict"


function buyCoffee(name, price, element) {
  
  let balanceInput = document.querySelector("Input[placeholder='Баланс']");
  
  if (+balanceInput.value < price) {
    changeDisplayText('Недостаточно средств');
    balanceInput.style.background = "crimson";
  } else {
    balanceInput.value -= price;
    balanceInput.style.background = "";
    cookCoffee(name, element);
  }
}

function cookCoffee(name, buttonElement) {
  changeDisplayText("Ваш " + name + " готовится");
  let progressBar = document.querySelector(".progress-bar");
  console.log(progressBar);
}

function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.innerHTML = text;
}


