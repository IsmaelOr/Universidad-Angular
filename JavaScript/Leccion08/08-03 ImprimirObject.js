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

// En consola
console.log(persona);

// En navegador web

// 1.- Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido, ", ", persona.email);

// 2.- Mediante for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

// 3.- Usando Object values
let personaArray = Object.values(persona);
console.log(personaArray);

// 4.- Utilziar metodo JSON.stringify

let personaString = JSON.stringify(persona);
console.log(personaString);
