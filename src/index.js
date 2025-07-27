const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (button.id === "clear") {
      expression = "";
      display.value = "0";
    } else if (button.id === "equals") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.value = expression;
    }
  });
});


document.addEventListener("keydown", (e) => {
  if (
    (e.key >= "0" && e.key <= "9") ||
    ["+", "-", "*", "/", "."].includes(e.key)
  ) {
    expression += e.key;
    display.value = expression;
  } else if (e.key === "Enter") {
    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch {
      display.value = "Error";
      expression = "";
    }
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (e.key === "Escape") {
    expression = "";
    display.value = "";
  }
});
