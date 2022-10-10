// Clase Object y los métodos implicitos heredados en cada clase

// class Persona extends Object{} -> Es lo mismo

// Hacemos uso de Polimorfismo
class Persona {
  constructor(nombre, apellido) {
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
    return this._nombre + " " + this._apellido;
  }

  // Sobreescribiendo el metodo de la clase Padre(Object)
  toString() {
    // Se aplica polimorfismo (Multiples formas en tiempo de ejecución)
    // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo.
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

  // Sobreescritura: Modificar el comportamiento de un método de la clase Padre
  // El método debe tener el mismo nombre, para poder sobreescribirlo.
  nombreCompleto() {
    // return this._departamento + ": " + this._nombre + " " + this._apellido;
    return this._departamento + ": " + super.nombreCompleto();
  }
}

let persona1 = new Persona("Odette", "Porras");
console.log(persona1.toString());

let empleado1 = new Empleado("Ismael", "Ortega", "Sistemas");

console.log(empleado1.toString());
