// Imprimir los numero pares en un rango.

for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
  }
}

// Imprimir solo el primer numero par encontrado

for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
    break;
  }
}
console.log("Fin del ciclo for");
