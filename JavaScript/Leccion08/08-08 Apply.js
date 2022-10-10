// Uso del método Apply en JavaScript

let persona1 = {
  nombre: "Ismael",
  apellido: "Ortega",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};

let persona2 = {
  nombre: "Juan",
  apellido: "Perez",
};

let persona3 = {
  trabajo: "Panadero",
  numero: "5523232323",
};

// Uso de apply, mandar a llamar un metodo en un objeto que no lo tiene definido.

console.log(persona1.nombreCompleto("Ing", "5523232323"));

// Para el método apply se necesitan pasar los atributos del metodo que queremos usar, por medio de un arreglo

let arreglo = ["Doc", "2323232305"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

console.log(
  persona1.nombreCompleto.apply(persona2, ["Vendedor", "2323232121"])
);

console.log(persona1.nombreCompleto.apply(persona3));
