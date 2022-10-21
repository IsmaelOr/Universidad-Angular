class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  toString() {
    return `tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `idRaton: ${this._idRaton}, ${super.toString()}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  toString() {
    return `idTeclado: ${this._idTeclado}, ${super.toString()}`;
  }
}

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamano) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamano = tamano;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamano() {
    return this._tamano;
  }

  set tamano(tamano) {
    this._tamano = tamano;
  }

  toString() {
    return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}`;
  }
}

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get monitor() {
    return this._monitor;
  }

  set monitor(monitor) {
    this._monitor = monitor;
  }

  get teclado() {
    return this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }

  get raton() {
    return this._raton;
  }

  set raton(raton) {
    this._raton = raton;
  }

  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre}\nMonitor: [${this._monitor}]\nRaton: [${this._raton}]\nTeclado: [${this._teclado}]\n`;
  }
}

class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = new Array();
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let cadenaComputadoras = "";
    for (let i = 0; i < this._computadoras.length; i++) {
      cadenaComputadoras += this._computadoras[i].toString();
    }
    return `Orden: ${this._idOrden}, Computadoras:\n${cadenaComputadoras}`;
  }
}


// Prueba Raton

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'DELL');
raton2.marca = 'HP';  //Llamando al metodo set de marca
console.log(raton2.toString());

// Prueba Teclado

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log(teclado1.toString());
console.log(teclado2.toString());

// Prueba Monitor

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);

console.log(monitor1.toString());
console.log(monitor2.toString());

// Prueba Computadora

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);

console.log(computadora1.toString());
console.log(computadora2.toString());
console.log(`${computadora2}`);

// Prueba Orden

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

console.log(orden1.mostrarOrden());


let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);

console.log(orden2.mostrarOrden());