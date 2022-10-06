// Sumar todos los argumentos que reciba una función.

function sumarArgumentos() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

let resultado = sumarArgumentos(9, 7, 6, 4);
console.log(resultado);

resultado = sumarArgumentos(5, 4, 13, 10, 9);
console.log(resultado);
