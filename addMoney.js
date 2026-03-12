document
  .getElementById("add-money-btn-success")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const inputMoneyIs = getInputFieldValueByIdAsFloat("input-add-amount");
    // const netAmount = getTextAmountAsNumber("account-balance");
    // const pinNumber = getInputFieldByIdAsValue("input-typed-pin");

    const { inputMoney, displayAccountBalance, pinNumber } =
      getTransactionsInputs("input-add-amount", "input-typed-pin");
    // wrong way to verify pin

    if (pinNumber === "code" && inputMoney > 0) {
      const result = resultAddMoney(inputMoney, displayAccountBalance);
      setAccountBalanceDisplayText("account-balance", result);

      // add to transaction history
      const paragraph = document.createElement("p");
      paragraph.classList.add("bg-green-400");
      paragraph.innerText = `Added: ${inputMoney} Tk, new balance is ${result} Tk`;

      // common form to appendChild
      document.getElementById("history-container").appendChild(paragraph);
    } else {
      alert("You are wrong,please type correct pin");
    }
  });

// cash Out calculation
document
  .getElementById("cash-out-btn-success")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const { inputMoney, displayAccountBalance, pinNumber } =
      getTransactionsInputs("input-cash-out-amount", "input-cash-out-pin");

    if (pinNumber === "code" && inputMoney > 0) {
      if (inputMoney > displayAccountBalance) {
        alert("Dur ho , ato taka tor nai");
        return displayAccountBalance;
      }
      const reduction = cashOutAmount(displayAccountBalance, inputMoney);
      setAccountBalanceDisplayText("account-balance", reduction);

      // to add transaction history

      const cashOut = document.createElement("div");
      cashOut.classList.add("bg-red-400");
      cashOut.innerText = `Withdraw amount is ${inputMoney}tk and new balance is ${reduction} Tk;`;

      // now append
      document.getElementById("history-container").appendChild(cashOut);
    } else {
      alert("You are wrong");
    }
  });

document
  .getElementById("show-add-money-form")
  .addEventListener("click", function () {
    setSectionForm("add-money-form");
    console.log("Hi,I am Rubel");
  });

document
  .getElementById("show-cash-out-form")
  .addEventListener("click", function () {
    setSectionForm("cash-out-form");
    console.log("Hi,I am Rubel");
  });

document
  .getElementById("show-transaction-history")
  .addEventListener("click", function () {
    setSectionForm("transaction-history-form");
    console.log("Hi,I am Rubel");
  });
