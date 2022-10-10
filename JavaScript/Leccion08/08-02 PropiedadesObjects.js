//Acceder a las propiedades de un objeto

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

// De forma directa
console.log(persona.nombre);
console.log(persona["apellido"]);

// Acceder a todas las propiedades del objeto con un ciclo

for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

// Agregar y Eliminar propiedades de los objetos.

// Agregar una Propiedad
persona.telefono = "5560123223";
console.log(persona);

// Eliminar una Propiedad, mediante delete objeto.propiedad (Se borra tambien su valor asociado)
delete persona.telefono;

console.log(persona);
