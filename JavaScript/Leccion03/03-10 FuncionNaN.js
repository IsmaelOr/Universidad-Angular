// Saber si una variable es un numero
// NaN: Not a Number

let miNumero = "19x";
let miNumero2 = 19;

let edad = Number(miNumero);
let edad2 = Number(miNumero2);

console.log(edad);

let resultado = isNaN(edad)
  ? "La variable no es un número"
  : edad >= 18
  ? "Es mayor de edad"
  : "Es menor de edad";
console.log(resultado);

resultado = isNaN(edad2)
  ? "La variable no es un número"
  : edad2 >= 18
  ? "Es mayor de edad"
  : "Es menor de edad";
console.log(resultado);
