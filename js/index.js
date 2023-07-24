document.addEventListener("DOMContentLoaded", function() {
  const numButtons = document.querySelectorAll(".num__select");
  const operationButtons = document.querySelectorAll(".operation__select");
  const operationACButtons = document.querySelectorAll(".operation__select__AC");
  const operationTotalButtons = document.querySelectorAll(".operation__select__total");
  const resultOperation = document.querySelector("#result__operation");
  const resultSelects = document.querySelector("#result__selects");
  let concatenatedValue = "";
  let valorOperation = "";
  let total = ""

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
      valorMasSigno =  `${valorOperation} ${operationButtons.textContent}`
      resultSelects.textContent = valorMasSigno
      console.log(operationButtons.value);
      resultOperation.textContent = ""
      concatenatedValue = ""
    })
  })
// BOTON DE BORRADO DE DATOS EN PANTALLA
  operationACButtons.forEach(operationACButtons => {
    operationACButtons.addEventListener("click", () => {
      resultOperation.textContent = ""
      resultSelects.textContent = ""
      concatenatedValue = ""
      requestAnimationFrame(() => {});
    })
  })
//FUNCION PARA EJECUTAR LA OPERACION SELECCIONADA
    operationTotalButtons.forEach(operationTotalButtons => {
      operationTotalButtons.addEventListener("click", () => {
        resultSelects.textContent = ` ${valorMasSigno} ${resultOperation.textContent}`
        total = parseFloat(valorOperation) + parseFloat(resultOperation.textContent)
        resultOperation.textContent = total
        console.log(total);
      })
    })

   
  
  
});

