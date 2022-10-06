// Funciones Self-invoking
// Son aquellas que se llaman a ellas mismas
// No se pueden volver a llamar estas funciones.

(function (a, b) {
  console.log("Ejecutando la función: " + (a + b));
})(2, 8);
