// Funciones como objetos.
// Los objetos pueden tener propiedades y métodos.

// Funcion de tipo funcion
function miFuncion(a, b) {
  // Para poder utilizar 'arguments.length' debemos hacerlo dentro de la función
  // **** PROPIEDAD *** (Numero de argumentos)
  console.log(arguments.length); //Saber cuantos argumentos tiene nuestra función
  return a + b;
}

console.log(miFuncion(2, 3));
console.log(typeof miFuncion);

// ***** USAR UN MÉTODO EN UNA FUNCIÓN para convertirla en cadena *****
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// Por lo tanto una función puede utilizarse como un objeto, debido a que tiene propiedades y métodos.
