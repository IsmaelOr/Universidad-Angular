// Clases en JavaScript
// Programación Orientada a Objetos
// Una Clase es una plantilla, se definen los atributos y los metodos.
// Un objeto es una instancia de la clase.
// En las clases no hay Hosting, es decir, primero se tiene que definir la clase antes de utilizarla

// let persona3 = new Persona('Juan', 'Gonzales');  -> Marca error debido a que la clase aun no esta declarada

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
}

let persona1 = new Persona("Ismael", "Ortega");
console.log(persona1);
console.log(typeof persona1);

// Usar el método get
console.log(persona1.nombre);

// Usar el método set
persona1.nombre = "Emmanuel";
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
