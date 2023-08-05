document.addEventListener("DOMContentLoaded", function () {
  const numButtons = document.querySelectorAll(".num__select");
  const operationButtons = document.querySelectorAll(".operation__select");
  const operationACButtons = document.querySelectorAll(
    ".operation__select__AC"
  );
  const operationTotalButtons = document.querySelectorAll(
    ".operation__select__total"
  );
  const operationBorrarButtons = document.querySelectorAll(
    ".operation__select__X"
  );
  const resultOperation = document.querySelector("#result__operation");
  const resultSelects = document.querySelector("#result__selects");
  const themeBtn = document.querySelector("#theme");
  const body = document.querySelector("body");
  let concatenatedValue = "";
  let valorOperation = "";
  let valuesArray = [];
  // mostrar en pantalla los numero seleccionados
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      concatenatedValue += button.textContent;
      resultOperation.textContent = concatenatedValue;
    });
  });
  // MOSTRAR NUMEROS SELECCIONADOS EN OTRO P JUNTO A LA OPERACION SELECCIONADA
  operationButtons.forEach((operationButtons) => {
    operationButtons.addEventListener("click", () => {
      valorOperation = resultOperation.textContent;
      signoOperation = operationButtons.textContent;
      valuesArray.push(parseFloat(valorOperation));
      valuesArray.push(signoOperation);
      resultSelects.textContent = valuesArray.join(" ");
      resultOperation.textContent = "0";
      concatenatedValue = "";
    });
  });
  // BOTON DE BORRADO DE DATOS EN PANTALLA
  operationACButtons.forEach((operationACButtons) => {
    operationACButtons.addEventListener("click", () => {
      resultOperation.textContent = "0";
      resultSelects.textContent = "Pruebame :v";
      concatenatedValue = "";
      valuesArray = [];
    });
  });
  //BORRADO DE LOS NUMERO INGRESADOS
  operationBorrarButtons.forEach((operationBorrarButtons) => {
    operationBorrarButtons.addEventListener("click", () => {
      let contenidoNumeros = resultOperation.textContent;
      if (contenidoNumeros.length > 0) {
        contenidoNumeros = contenidoNumeros.slice(0, -1);
      }
      resultOperation.textContent = contenidoNumeros;
    });
  });
  //FUNCION PARA EJECUTAR LA OPERACION SELECCIONADA
  operationTotalButtons.forEach((operationTotalButtons) => {
    operationTotalButtons.addEventListener("click", () => {
      valorOperation = resultOperation.textContent;
      valuesArray.push(parseFloat(valorOperation));
      const total = valuesArray.join(" ");
      resultSelects.textContent = total;
      resultOperation.textContent = eval(total);
    });
  });

  //FUNCION DE CAMBIADOR DE TEMAS
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    body.classList.add(storedTheme);
    themeBtn.value = storedTheme;
  }

  themeBtn.addEventListener("change", function () {
    const selectTheme = themeBtn.value;
    body.className = selectTheme;
    localStorage.setItem("theme", selectTheme); // Guardar la preferencia en localStorage
    console.log(selectTheme);
  });
});
