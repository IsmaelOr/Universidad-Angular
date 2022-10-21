// Arrojar errores con throw
"use strict";

try {
  let x = 10;
  if (x <= 10) {
    // Condición de error
    throw "La variable X no es apta para la ejecución";
  }
} catch (e) {
  console.log(e);
}

// Saber si una variable es realmente un número y si es positivo o negativo.

try {
  numero = 'x';
  if (isNaN(numero)) {
    throw "No es un número";
  } else if (numero < 0) {
    throw "El número es negativo";
  } else {
    console.log("Es un número");
  }
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
} finally{
    console.log("Termina revisiónj de errores.")
}
