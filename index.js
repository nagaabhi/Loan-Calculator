const displayAmount = document.querySelector(".js-display-amount");
function calculateLoanAmount() {
  const loanAmount = document.querySelector(".js-loan-amount");
  const loanAmountValue = Number(loanAmount.value);

  const intrestRate = document.querySelector(".js-intrest-rate");
  const intrestRateValue = Number(intrestRate.value);

  const monthsToPay = document.querySelector(".js-months-to-pay");
  const monthsToPayValue = Number(monthsToPay.value);

  const totalLoanAmount =
    (loanAmountValue *
      monthsToPayValue *
      Math.pow(1 + intrestRateValue, monthsToPayValue)) /
    (Math.pow(1 + intrestRateValue, monthsToPayValue) - 1);

  // console.log(totalLoanAmount);
  displayAmount.innerHTML = totalLoanAmount;
}

const modeSwitchButton = document.querySelector(".switch-modes");
const bodyElement = document.querySelector("body");
const submitButton = document.querySelector(".submit-buton");
const overAllContainer = document.querySelector('.container');

function switchModes() {
  if (modeSwitchButton.innerHTML === "DARK MODE") {
    modeSwitchButton.innerHTML = "LIGHT MODE";
    bodyElement.style.backgroundColor = "rgb(64, 61, 83)";
    submitButton.style.boxShadow = "1px 1px 10px 1px rgb(119, 113, 113)";
    bodyElement.style.color = "lightgray";
    modeSwitchButton.style.boxShadow = "lightgray";
    overAllContainer.style.border = '1px solid black';
  } else {
    modeSwitchButton.innerHTML = 'DARK MODE'
    bodyElement.style.backgroundColor = "white";
    bodyElement.style.color = "black";
    submitButton.style.boxShadow = "rgb(231, 222, 222)";
    

  }
}
