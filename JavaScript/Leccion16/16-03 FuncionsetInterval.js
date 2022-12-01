// Funcion setInterval(funcionAsincrona, tiempo);
// La función setInterval, manda a llamar la función enviada cada cierto tiempo establecido.

let reloj = () => {
    let fecha = new Date();  //Extraer la fecha actual de la computadora
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 3000); // Cada 3 segundos se manda a llamar la función reloj.