function getInputFieldValueByIdAsFloat(id) {
  const inputFieldValue = document.getElementById(id).value;
  const finalValueByParseFloat = parseFloat(inputFieldValue);
  return finalValueByParseFloat;
}

function getInputFieldByIdAsValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
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

function getTransactionsInputs(id1, pinInput) {
  return {
    inputMoney: getInputFieldValueByIdAsFloat(id1),
    displayAccountBalance: getTextAmountAsNumber("account-balance"),
    pinNumber: getInputFieldByIdAsValue(pinInput),
  };
}

function setAccountBalanceDisplayText(id, value) {
  document.getElementById(id).innerText = value;
}

function setSectionForm(id) {
  // first hide all forms
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-history-form").classList.add("hidden");

  // now show clicked form
  document.getElementById(id).classList.remove("hidden");
}
