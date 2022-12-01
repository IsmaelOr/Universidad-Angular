// Llamadas asíncronas con uso setTimeout
// setTimeout(funcionAsincrona, tiempo)
// La función setTimeout, manda a llamar la función enviada despues de que transcurre el tiempo establecido

function miFunction(){
    console.log("Función 1");
}

function funcionPrueba(){
    console.log("Funcion prueba");
}

function miFuncionCallback(){
    console.log("Saludo asíncrono después de 3 segundos");
}

miFunction();
setTimeout(miFuncionCallback, 3000); // después de 3 segundos
funcionPrueba();
setTimeout(function(){console.log("Saludo asíncrono 2")}, 4000);
setTimeout(() => {console.log("Saludo asíncrono 3")}, 2000);