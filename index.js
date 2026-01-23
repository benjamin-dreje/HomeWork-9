const input = document.getElementById("amount");
let currency = document.getElementById("currency");
let result = document.getElementById("result");

function convert() {
  let inputValue = input.value;
  let currencyValue = currency.value;

  if (!inputValue.trim() || !currencyValue.trim()) {
    result.textContent = "לא שמת נתונים";
    result.classList.add("invalid");
    input.classList.add("red");
    return;
  }
  result.classList.remove("invalid");
  input.classList.remove("red");
  result.style.color = "black"; // איפוס צבע

  let amount = Number(inputValue);
  const usdRate = 3.7;
  const eurRate = 4.8;
  let total = 0;

  if (currencyValue === "usd") {
    total = amount * usdRate;
    result.textContent = `ש"ח ${total.toFixed(2)}  `;
  } else if (currencyValue === "eur") {
    total = amount * eurRate;
    result.textContent = `ש"ח ${total.toFixed(2)}  `;
  }
  result.style.color = "black";
}
