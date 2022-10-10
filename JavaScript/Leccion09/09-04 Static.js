// Palabra static en las clases de JavaScript

// Implementar un atributo estatico, que cada que se cree un objeto de esta clase, cuente cuantos objetos se han creado.
class Persona {
  // Atributos static
  static contadorObjetosPersona = 0; //Atributo de nuestra clase
  email = "Valor default email"; // Atributo de nuestros objetos
  constructor(nombre, apellido) {
    Persona.contadorObjetosPersona++;
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

  toString() {
    return this.nombreCompleto();
  }

  // Los metodos estaticos (static) se asocian solo a la clase, no a los objetos.
  // Es decir los objetos no pueden ejectuar estos metodos.
  static saludar() {
    console.log("Saludos desde método static");
  }

  static saludar2(persona) {
    console.log("Hola " + persona.nombre);
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
    // return this._departamento + ": " + this._nombre + " " + this._apellido;
    return this._departamento + ": " + super.nombreCompleto();
  }
}

let persona1 = new Persona("Odette", "Porras");
// console.log(persona1.saludar()); No es posible llamar el meotodo static desde el objeto.
Persona.saludar();
Persona.saludar2(persona1);
console.log(persona1.email);

console.log(Persona.contadorObjetosPersona);

let empleado1 = new Empleado("Ismael", "Ortega", "Sistemas");
console.log(empleado1.email); //Atributo del objeto

// Los metodos static, si se heredan
Empleado.saludar();
Empleado.saludar2(empleado1);

// Los atributos static no son accesibles desde los objetos.
// console.log(persona1.contadorObjetosPersona);
// Para acceder a los atributos, se tiene que hacer desde la clase.
console.log(Persona.contadorObjetosPersona);
// Los atributos static, tambien son heredador por las clases hijas
console.log(Empleado.contadorObjetosPersona);

// console.log(Persona.email) ----> Esto no es posible, ya que es un atributo del objeto (no estatico)
// console.log(Empleado.email)
