// Promesas de tipo callback
// Una promesa es un código que tiene varios estados.
// .then -> si el código se ejecuto correctamente (RESOLVED)
// .catch -> si el código se ejecuto incorrectamente (REJECTED)

let miPromesa = new Promise((resolve, rejected) => {
    let expresion = true;
    if(expresion){
        resolve('Resolvio correctamente');
    }else{
        rejected('Se produjo un error');
    }
});

// miPromesa.then(
//     (valor) => console.log("Mensaje:" + valor),
//     (error) => console.log("Error: "+ error)
// );


// miPromesa
// .then((valor) => console.log("Mensaje:" + valor))
// .catch(error => console.log("Catch: " + error));

// Llamadas asincronas y Funciones callback usando Promesas.

let promesa = new Promise((resolve) => {
    //console.log("Inicio promesa");
    setTimeout( () => {resolve('Saludos con promesa y timeout')}, 3000);
    //console.log("Fin promesa");
});

// promesa.then((valor) => console.log(valor));

// async indica que una función regresará una promesa.
// await espera el resultado de una promesa

async function miFunctionConPromesa(){
    return 'Saludos con promesa y Async';
}

// miFunctionConPromesa().then(valor => console.log(valor));


// Con esto, ya no es necesario procesar la respuesta con .then, ya quee await espera la respuesta de la promesa
async function funcionConPromesaYAwait(){
    let miPromise = new Promise(resolve => {
        resolve('Promesa con await');
    });

    console.log( await miPromise );
}

// funcionConPromesaYAwait();

// <------- Promesas, await, asyc y setTimeout -------->

async function funcionConPromesaAwaitTimeout(){
    console.log("Inicio de función");
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log("Fin de la función");
}

funcionConPromesaAwaitTimeout();

