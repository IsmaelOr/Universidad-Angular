// Uso de Etiquetas(Labels) en JavaScript (GO-TO)
let numero = 0;

inicio: while (numero != 5) {
  console.log("Empezando programa");
  console.log(numero);
  numero++;
  continue inicio;
}
