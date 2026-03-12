function getInputFieldValueByIdAsFloat(id) {
  const inputFieldValue = document.getElementById(id).value;
  const finalValueByParseFloat = parseFloat(inputFieldValue);
  return finalValueByParseFloat;
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

function setAccountBalanceDisplayText(id, value) {
  document.getElementById(id).innerText = value;
}
