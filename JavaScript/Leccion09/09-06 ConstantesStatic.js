// Creación de Constantes estaticas.
// Para la creación de constantes estaticas, se debe crear un meotodo estatico, que solo permita leer

class Persona {
  static contadorObjetosPersonas = 0;

  static get MAX_OBJETOS() {
    return 5;
  }

  constructor(nombre, apellido) {
    if (Persona.contadorObjetosPersonas < Persona.MAX_OBJETOS) {
      this.idPersona = ++Persona.contadorObjetosPersonas;
    } else {
      console.log("Se han superado el máximo de objetos permitidos");
    }
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this.idPersona + ": " + this._nombre + " " + this._apellido;
  }

  toString() {
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }

  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Ismael", "Ortega");
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Odette", "Porras", "Pedagogía");
console.log(empleado1.nombreCompleto());

console.log(Persona.MAX_OBJETOS);
Persona.MAX_OBJETOS = 10;
console.log(Persona.MAX_OBJETOS); // No se altera su valor.

let persona2 = new Persona("Jimena", "Mendez");
console.log(persona2.nombreCompleto());
let persona3 = new Persona("Diego", "Ortega");
console.log(persona3.nombreCompleto());
let persona4 = new Persona("Poncho", "Lopez");
console.log(persona4.nombreCompleto());
let persona5 = new Persona("Gabriela", "Jimenez");
console.log(persona5.nombreCompleto()); // El idPersona ya no esta definido, debido a que a sobrepasado el Max
