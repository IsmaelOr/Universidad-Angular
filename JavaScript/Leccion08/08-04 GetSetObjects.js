// Uso de get y set en objetos.

let persona = {
  // Propiedades o Atributos
  nombre: "Ismael",
  apellido: "Ortega",
  email: "ismaelortega80@gmail.com",
  edad: 22,
  idioma: "es",
  // Metodos o Funciones
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

// Ya no es necesario poner los parentesis al final del metodo, debido a que estamos usando get
console.log(persona.nombreCompleto);
console.log(persona.lang);

// Uso de set, Los objetos al usar set, cuando se asigna un valor, infiere que se trata del método.
persona.lang = "en";
console.log(persona);
