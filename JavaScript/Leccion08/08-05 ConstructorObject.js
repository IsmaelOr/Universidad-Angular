// Constructor en Objetos de JS.

// Si se va a crear un objeto, es recomendable que el nombre empiece en mayuscula
// Función Constructor de tipo Persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

let hijo = new Persona("Ismael", "Ortega", "ismaelortega80@gmail.com");
console.log(hijo);
console.log(hijo.nombre);
console.log(hijo.nombreCompleto());

let madre = new Persona("Araceli", "Estrada", "araceliestrada80@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());

// Formas de crear objetos mediante new
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String("Hola");
let miCadena2 = "Adios";

let miNumero = new Number(1);
let miNumero2 = 2;

let miBoolean = new Boolean(false);
let miBoolean2 = true;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {};
