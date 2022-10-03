// Precedencia de operadores
let a = 4,
  b = 3,
  c = 2,
  d = 1;

// Las operaciones se evaluan de izquierda a derecha
let z = a * b + c / d;
console.log(z);

z = c + (a * b) / d;
console.log(z);

z = ((c + a) * b) / c;
console.log(z);

z = a + b - [c * d + (d - a)];
console.log(z);
