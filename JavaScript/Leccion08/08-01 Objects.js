// Objetos en JavaScript
// Un objeto puede tener propiedades y métodos

let persona = {
  // Propiedades o Atributos
  nombre: "Ismael",
  apellido: "Ortega",
  email: "ismaelortega80@gmail.com",
  edad: 22,
  // Metodos o Funciones
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);

console.log(persona.nombreCompleto());

// Segunda forma de Creación de Objetos en JavaScript
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Mexico";
persona2.edad = 23;

console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.edad);

console.log(persona2);
