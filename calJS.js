const input = document.querySelector("input");
//It is for displaying the user actions
const buttons = document.querySelectorAll("button");
//It is for enable buttons for user actions
let expression = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    //Here enter value can be trimed for checking the condition
    if (value === "AC") {
      //If user clicks AC means the entire can be deleted
      expression = "";
    } else if (value === "DEL") {
      //If user clicks Del means it can be deleted one by one..
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }
    input.value = expression;
  });
});
