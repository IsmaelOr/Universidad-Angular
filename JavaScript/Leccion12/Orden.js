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
    cadenaComputadoras = "";
    for (let i = 0; i < this._computadoras.length; i++) {
      cadenaComputadoras += this._computadoras[i].toString();
    }
    return `Orden: ${this._idOrden}, Computadoras:\n${cadenaComputadoras}`;
  }
}
