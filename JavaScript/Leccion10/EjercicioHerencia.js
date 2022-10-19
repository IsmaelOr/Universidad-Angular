class Persona {
  static contadorPersona = 0;
  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
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

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleado;
    this._sueldo = sueldo;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorCliente = 0;
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    this._idCliente = ++Cliente.contadorCliente;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
  }
}

// Prueba clase Persona

let persona1 = new Persona("Juan", " Perez", 23);
console.log(persona1.toString());

let persona2 = new Persona("Ismael", 'Ortega', 13);
console.log(persona2.toString());

// Prueba clase Empleado

let empleado1 = new Empleado('Odette', 'Porras', 22, 15000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Pamela', 'Jimenez', 28, 9000);
console.log(empleado2.toString());

// Prueba clase Cliente

let cliente1 = new Cliente('Diego', 'Humberto', 32, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Sandra', 'Villalon', 33, new Date());
console.log(cliente2.toString());