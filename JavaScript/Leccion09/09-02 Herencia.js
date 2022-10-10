// Herencia en JavaScript

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
}

// Heredamos a la clase Empleado, todos los atributos y metodos de persona, mediante extends
// Se debe de mandar a llamar el constructor de la clase padre, mediante super(atributo1, atributo2, ...);

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
console.log(persona1);
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Ismael", "Ortega", "Sistemas");
console.log(empleado1);

// Usar los metodos de la clase padre.
// Get
console.log(empleado1.nombre);
// Set
empleado1.apellido = "Estrada";
console.log(empleado1);
// Función
console.log(empleado1.nombreCompleto());
