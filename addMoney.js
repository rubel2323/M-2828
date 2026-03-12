document
  .getElementById("add-money-btn-success")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = getInputFieldValueByIdAsFloat("input-add-amount");
    const displayAccountBalance = getTextAmountAsNumber("account-balance");
    const result = resultAddMoney(inputMoney, displayAccountBalance);
    setAccountBalanceDisplayText("account-balance", result);
  });
