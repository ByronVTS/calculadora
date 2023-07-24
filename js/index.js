document.addEventListener("DOMContentLoaded", function() {
  const numButtons = document.querySelectorAll(".num__select");
  const operationButtons = document.querySelectorAll(".operation__select");
  const operationACButtons = document.querySelectorAll(".operation__select__AC");
  const operationTotalButtons = document.querySelectorAll(".operation__select__total");
  const operationBorrarButtons = document.querySelectorAll(".operation__select__X");
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
      signoOperation = operationButtons.textContent
      resultSelects.textContent = valorMasSigno
      resultOperation.textContent = "0"
      concatenatedValue = ""
    })
  })
// BOTON DE BORRADO DE DATOS EN PANTALLA
  operationACButtons.forEach(operationACButtons => {
    operationACButtons.addEventListener("click", () => {
      resultOperation.textContent = "0"
      resultSelects.textContent = "Pruebame :v"
      concatenatedValue = ""
      requestAnimationFrame(() => {});
    })
  })

//BORRADO DE LOS NUMERO INGRESADOS
operationBorrarButtons.forEach(operationBorrarButtons => {
  operationBorrarButtons.addEventListener("click", () => {
    let contenidoNumeros = resultOperation.textContent
    if(contenidoNumeros.length > 0){
      contenidoNumeros = contenidoNumeros.slice(0, -1);
    }
    resultOperation.textContent = contenidoNumeros
  
  })
})


//FUNCION PARA EJECUTAR LA OPERACION SELECCIONADA
    operationTotalButtons.forEach(operationTotalButtons => {
      operationTotalButtons.addEventListener("click", () => {
        if(signoOperation === "+"){
          resultSelects.textContent = ` ${valorMasSigno} ${resultOperation.textContent}`
          total = parseFloat(valorOperation) + parseFloat(resultOperation.textContent)
          resultOperation.textContent = total
        }else if(signoOperation === "-"){
          resultSelects.textContent = ` ${valorMasSigno} ${resultOperation.textContent}`
        total = parseFloat(valorOperation) - parseFloat(resultOperation.textContent)
        resultOperation.textContent = total
        }else if(signoOperation === "*"){
          resultSelects.textContent = ` ${valorMasSigno} ${resultOperation.textContent}`
        total = parseFloat(valorOperation) * parseFloat(resultOperation.textContent)
        resultOperation.textContent = total
        }else if(signoOperation === "/"){
          resultSelects.textContent = ` ${valorMasSigno} ${resultOperation.textContent}`
        total = parseFloat(valorOperation) / parseFloat(resultOperation.textContent)
        resultOperation.textContent = total
        }else{
          console.log("No hay seleccion correcta");
        }
        
      })
    })

   
  
  
});

