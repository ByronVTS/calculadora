document.addEventListener("DOMContentLoaded", function() {
  const numButtons = document.querySelectorAll(".num__select");
  const operationButtons = document.querySelectorAll(".operation__select");
  const operationACButtons = document.querySelectorAll(".operation__select__AC");
  const resultOperation = document.querySelector("#result__operation");
  const resultSelects = document.querySelector("#result__selects");
  let concatenatedValue = "";
  let valorOperation = ""

  // mostrar en pantalla los numero seleccionados
  numButtons.forEach(button => {
      button.addEventListener("click", () => {
          concatenatedValue += button.textContent;
          resultOperation.textContent = concatenatedValue
      });
  });
// MOSTRAR NUMEROS SELECCIONADOS EN OTRO P JUNTO A LA OPERACION SELECCIONADA
  operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener("click", () =>{
      valorOperation = resultOperation.textContent;
      resultSelects.textContent =`${valorOperation} ${operationButtons.textContent}`
      resultOperation.textContent = ""
    })
  })
// BOTON DE BORRADO DE DATOS EN PANTALLA
  operationACButtons.forEach(operationACButtons => {
    operationACButtons.addEventListener("click", () => {
      resultOperation.textContent = ""
      resultSelects.textContent = ""
    })
  })
});

