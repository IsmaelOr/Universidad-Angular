// Sobreescritura en js.
// Se le dice sobreescritura cuando una clase padre le hereda un metodo a una clase hija, pero la clase hija modifica el comportamiento de ese método.

class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetalles() {
    return `nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this._departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente:\n${super.obtenerDetalles()}, departamento: ${
      this._departamento
    }`;
  }
}

function imprimir(tipo) {
  //Polimorfismo
  console.log(tipo.obtenerDetalles()); //El metodo puede recibir diferentes objetos y efecturar sus métodos.
  if (tipo instanceof Gerente) {
    // La clase Empleado no es un tipo Gerente, provoca que esta sentencia devuelva FALSE
    console.log("Es un objeto de tipo Gerente");
    console.log(tipo._departamento);
  } else if (tipo instanceof Empleado) {
    // La clase Gerente al ser hija de la Clase Empleado, provoca que esta sentencia devuelva TRUE.
    console.log("Es un objeto de tipo Empleado");
  } else if (tipo instanceof Object) {
    console.log("Es un objeto de tipo Object");
  }

  // SE RECOMIENDA PREGUNTAR PRIMERO POR LAS CLASES DE MENOR JERARQUIA (Clases hijas)
}

let gerente1 = new Gerente("Ismael", 5000, "Sistemas");
//console.log(gerente1.obtenerDetalles());
imprimir(gerente1);

let empleado1 = new Empleado("Juan", 3400);
imprimir(empleado1);
//console.log(empleado1.obtenerDetalles());
