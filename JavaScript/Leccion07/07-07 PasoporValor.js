// Paso por valor y paso por referencia.

// Tipos primitivos
let x = 10;

// ***** PASO POR VALOR *** (Se envia solo una copia del valor de nuestr variable).
function cambiarValor(a) {
  a = 20;
}

cambiarValor(x);
console.log(x);

// **** PASO POR REFERENCIA ****
const persona = {
  nombre: "Ismael",
  apellido: "Ortega",
  numero: "5540692606",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "Arturo";
  p1.apellido = "Lara";
}

cambiarValorObjeto(persona);
console.log(persona);
