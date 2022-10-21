"use strict";
// Al usar el modo strict en js, primero debemos definir las variables que vamos a utilizar.
// En caso de no definirlas, se marcara error.

let x = 10;
console.log(x);

miFuncion();

function miFuncion() {
  let y = 15;
  console.log(y);
}

// Usar el modo strict solamente en una función

function funcionStrict() {
  "use strict";
  let z = 10;
  console.log(z);
}

funcionStrict();
