// Un arreglo es de tipo object, sirve para almacenar distintos valores.

//let autos = new Array('BMW', 'Mercedes Benz','Volvo');
const autos = ["BMW", "Merces Benz", "Volvo"]; // La referencia del arreglo no se va a modificar.

console.log(autos);

// Acceder a los elementos de un arreglo mediante indice.

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);
console.log(autos[3]);

// Recorrer un arreglo mediante un ciclo, para conocer la longitud de un arreglo es madiante array.length
for (let i = 0; i < autos.length; i++) {
  console.log(i + ": " + autos[i]);
}

// Modificar los elementos de un arreglo
autos[1] = "Mercedes Benz";
console.log(autos[1]);

// Agregar nuevos elementos a un arreglo, mediante push
autos.push("Chevrolet");
console.log(autos);
console.log(autos[3]);

// Agregar nuevos elementos, mediante el largo de un arreglo
console.log(autos.length);
autos[autos.length] = "Audi";
console.log(autos);
console.log(autos[4]);

// Agregar elementos en indices superiores dejando huevos, NO RECOMENDABLE

autos[7] = "Cadillac";
console.log(autos);
console.log(autos[5]);
console.log(autos[6]);
console.log(autos[7]);

// Preguntar si es un array, no se puede mediante typeof, ya que un array es un object.
// Se hace mediante Array.isArray(array); True = Si es, False = No es
// Tambien se puede mediante 'instanceof'
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
