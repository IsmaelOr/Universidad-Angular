// Concatenacion de Cadenas

var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

// Se pueden concatenar numeros a cadenas directamente
// El orden de operación de JavaScript es de Izquierda a Derecha ----->
// Se pueden utilizar parentesis para dar prioridad a alguna operación

var x = nombre + 219;
console.log(x);

var y = 219 + nombre;
console.log(y);

var w = 219 + 10 + nombre;
console.log(w);

var z = nombre + 219 + 10;
console.log(z);

var a = nombre + (219 + 10);
console.log(a);
