// Funciones Call Back
// Una función callback, es una función que recibe como parámetro otra función
// Llamar una función dentro de otra función


// Funciones normales
function miFunction(){
    console.log("Función 1");
}

function funcionPrueba(){
    console.log("Funcion prueba");
}


funcionPrueba();
miFunction();

// Usar una función callback

function imprimir(mensaje){
    console.log(`Mensaje: ${mensaje}`);
}

function funcion(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(res);
}

// La función se pasa sin parentesis. 
funcion(1,2, imprimir);

// Tambien funciona con funciones en variables

let imp = function imprimir2(mensaje){
    console.log(mensaje);
}

funcion(3,9, imp);