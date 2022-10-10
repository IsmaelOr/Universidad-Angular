// Uso de Call
// Permite llamar un metodo que esta definido en un objeto, desde otro objeto.

let persona1 = {
  nombre: "Ismael",
  apellido: "Ortega",
  nombreCompleto: function (trabajo, tel) {
    return this.nombre + " " + this.apellido + ", " + trabajo + ", " + tel;
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

// Usar el metodo nombreCompleto de persona1 con los datos de persona2.

console.log(persona1.nombreCompleto("Ing", "6867638483"));

console.log(persona1.nombreCompleto.call(persona2, "Doctor", "3434343434"));

// NOTA: Para hacer uso de call, el objeto debe contener los atributos minimos necesario para el metodo
console.log(persona1.nombreCompleto.call(persona3));

// ESTRUCTURA DE call, objeto.metodo.call(objeto2, atributo1, atributo2, ..., atributoN);
