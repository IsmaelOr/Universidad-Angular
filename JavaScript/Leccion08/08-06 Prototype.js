// Uso de la función Prototype
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

Persona.prototype.tel = "2323230223";

let hijo = new Persona("Ismael", "Ortega", "ismaelortega80@gmail.com");
console.log(hijo);
console.log(hijo.tel);
console.log(hijo);
hijo.tel = "112342323";
console.log(hijo);

let madre = new Persona("Araceli", "Estrada", "araceliestrada80@gmail.com");
console.log(madre);
console.log(hijo.tel);
console.log(madre);
