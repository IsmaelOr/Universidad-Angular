"use strict"
// Manejo de errores en js

try{
    //x = 10;
    miFuncion();
}catch(e){
    console.log(e);
}finally{
    console.log("Termina la revisión de erroes.")
}


// Debido a que se maneja el error, el programa continua.
console.log("continuamos...")
