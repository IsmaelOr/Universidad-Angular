// *** Funciones Flecha ***

// Función Tradicional
function miFuncion() {
  console.log("Saludos desde mi función");
}

let miFuncionAsignada = function () {
  console.log("Saludos desde mi función asignada");
};

miFuncion();

miFuncionAsignada();

// Función Flecha
// No podemos hacer uso de la funcioón flecha sin antes haberla definido. (NO HOSTING)

const miFuncionFlecha = () => {
  console.log("Saludos desde mi función flecha");
};

miFuncionFlecha();

const miFuncion2Flecha = () => console.log("Si solo hay una linea, no es necesario abrir los corchetes");

miFuncion2Flecha();

const miFuncion3Flecha = () => {
  return 'Retornar valor';
}

console.log(miFuncion3Flecha());

const miFuncion4Flecha = () => 'Retornar valor, sin return, en una sola linea';

console.log(miFuncion4Flecha());

// Para regresar objetos en una sola linea, se abren parentesis en el cuerpo de la función, en lugar de corchetes.
// Los corchetes se abren para definir el objeto
const regresaObjeto = () => ({nombre: 'Ismael', edad: 22, ciudad: 'Mexico'});

console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros('Imprimir mensaje');

const funcionConParametros2 = mensaje => console.log(mensaje);

funcionConParametros2('Un solo parametro, no ocupa parentesis');

const funcionSuma = (numero1, numero2) => numero1 + numero2;

console.log(funcionSuma(10,15));