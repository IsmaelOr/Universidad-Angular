// Ejercico con palabra static

// Asignar un id a cada persona creada por la clase, que sea unico e incremente en cada creación

class Persona {
  static contadorObjetosPersonas = 0;
  constructor(nombre, apellido) {
    this.idPersona = ++Persona.contadorObjetosPersonas;
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

// Saber cuantas personas han sido creadas
console.log(Persona.contadorObjetosPersonas);

let persona2 = new Persona("Araceli", "Estrada");
console.log(persona2.nombreCompleto());

console.log(Persona.contadorObjetosPersonas);
