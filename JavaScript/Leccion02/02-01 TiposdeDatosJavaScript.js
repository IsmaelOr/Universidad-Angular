// Ejemeplos de tipos de datos en JavaScript
/*
Las variables de JavaScript son dinamicas, es decir, pueden cambiar el tipo de dato que almacenan en cualquier momento.
*/

// Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

// Tipo de dato numerico
var numero = 200;
console.log(numero);

// Tipo de dato object
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: 5540692606,
};
console.log(objeto);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

// Tipo de clase es una function
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);

// Tipo de dato undefined
var x; // var x = undefined;
console.log(x);

// null es un tipo de dato object
var y = null;
console.log(y);

// Los array son de tipo Object
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);

// Un EmptyString es de tipo String
var z = "";
console.log(z);

// ***** Para saber que tipo de dato contiene una variable, podemos utilizar "typeof"

console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof 10.5);
console.log(typeof objeto);
console.log(typeof bandera);
console.log(typeof miFuncion);
console.log(typeof simbolo);
console.log(typeof Persona);
console.log(typeof x);
console.log(typeof y);
console.log(typeof autos);
console.log(typeof z);
