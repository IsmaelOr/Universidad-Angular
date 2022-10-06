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

// Argumentos y Parametros
// Cuando se define una función, los valores que va a recibir nuestra función se conocen como parametros
// function miFuncion (parametro1, parametro2){cuerpo}
// Los valores reales que se envían, se conocen como argumentos.
// miFuncion(argumento1, argumento2);

// NOTA: En JAVASCRIPT no es requerido que coincidan el número de argumentos con el número de parámetros.
let restar = function (a = 9, b = 5) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a - b;
};

console.log(restar());

//Sobrescribir los valores por default
console.log(restar(6, 3, 7));
