// Funciones en JavaScript
// Una función es un código reutilizable

// Declaración de la función
function miFuncion(a, b) {
  console.log("Suma: " + (a + b));
}

miFuncion(1, 8);
miFuncion(2, 9);
miFuncion(11, 18);

// Función con un valor de retorno

function funcionRetorna(a, b) {
  return a + b;
}

let resultado = funcionRetorna(1, 2);
console.log(resultado);
console.log(funcionRetorna(9, 2));
