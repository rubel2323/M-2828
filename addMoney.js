function getInputFieldValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

function getTextAmountAsNumber(id) {
  const textInput = document.getElementById(id).innerText;
  const textNumber = parseFloat(textInput);
  return textNumber;
}

function resultAddMoney(id1, id2) {
  const totalMoney = id1 + id2;
  return totalMoney;
}

function cashOutAmount(id1, id2) {
  const totalCashOut = id1 - id2;
  return totalCashOut;
}
console.log("hi i am good at everyThing");
