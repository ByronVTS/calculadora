document.addEventListener("DOMContentLoaded", function() {
  const numButtons = document.querySelectorAll(".num__select");
  const resultOperation = document.querySelector("#result__operation");
  let concatenatedValue = "";

  numButtons.forEach(button => {
      button.addEventListener("click", () => {
          concatenatedValue += button.textContent;
          console.log("Valor concatenado:", concatenatedValue);
          resultOperation.textContent = concatenatedValue
      });
  });
});