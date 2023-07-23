
const numerosBtn = document.querySelectorAll('.num__select');
const operationBtn = document.querySelectorAll('.operation__select');
const contenidoBotones = [];

numerosBtn.forEach(function (boton) {
  boton.addEventListener("click", () => {
    const contenido = boton.textContent;
    contenidoBotones.push(contenido);
    console.log(contenidoBotones);
  });
});
console.log(contenidoBotones);
