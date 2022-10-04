// Operadores Booleanos

// Operador AND (&&)
// Saber si un número esta dentro de un rango entre 0 y 10.

let a = 1;
let min = 0,
  max = 10;

if (a >= min && a <= max) {
  console.log("Dentro de rango");
} else {
  console.log("Fuera de Rango");
}

// Operador OR (||)
// Saber si un padre puede acudir al juego de su hijo, solo puede asistir si esta de vacaciones o si tiene el dia libre.

let vacaciones = false,
  diaLibre = true;

if (vacaciones == true || diaLibre == true) {
  console.log("El padre puede asistir al partido.");
} else {
  console.log("El padre no puede asistir al partido");
}
