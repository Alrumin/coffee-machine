"use strict"
let state = "waiting";
let cupImg = document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");
cupImg.onclick = takeCoffee;

function buyCoffee(name, price, element) {
  if (state != "waiting") {
    return;
  }
  
  let balanceInput = document.querySelector("Input[placeholder='Баланс']");
  
  if (+balanceInput.value < price) {
    changeDisplayText('Недостаточно средств');
    balanceInput.style.background = "crimson";
  } else {
    balanceInput.value -= price;
    balanceInput.style.background = "";
    cookCoffee(name, element);
    state = "cooking";
  }
}

function cookCoffee(name, buttonElement) { changeDisplayText("Ваш " + name + " готовится");
  let buttonImg = buttonElement.querySelector("Img");
  let cupSrc = buttonImg.getAttribute('src');
  cupImg.setAttribute('src', cupSrc);
  cupImg.classList.remove('d-none');
  
  let i = 0;
  let interval = setInterval(function() {
    i++;
    progressBar.style.width = i + "%";
    cupImg.style.opacity = i +"%";
    if (i == 110) {
      clearInterval(interval);
      changeDisplayText("Ваш " + name + " готов!");
      cupImg.style.cursor = "pointer";
      state = "ready";
    }
  }, 100)
}

function takeCoffee() {
  if (state != "ready") {
   return; 
  }
  state = "waiting";
  cupImg.style.opacity = 0;
  cupImg.style.cursor = "";
  cupImg.classList.add("d-none");
  changeDisplayText("Выберите кофе");
  progressBar.style.width = 0;
}

function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.innerHTML = text;
}


