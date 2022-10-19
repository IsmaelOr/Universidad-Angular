class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = new Array();
    this._contadorProductosAgregados = this._productos.length;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._contadorProductosAgregados < Orden.MAX_PRODUCTOS)
      this._productos.push(producto);
    else console.log("Ya no se pueden agregar más productos a la orden");
    this._contadorProductosAgregados = this._productos.length;
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this._productos.length; i++) {
      total += this._productos[i].precio;
    }
    return total;
  }

  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this._productos) {
      productoOrden += producto.toString() + "\n";
    }
    console.log(
      `Orden: ${this._idOrden} Total: $${this.calcularTotal()}\nProductos: ${
        this._contadorProductosAgregados
      }\n${productoOrden}`
    );
  }
}

// Prueba haciendo Productos

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 100);
let producto3 = new Producto("Cinturon", 50);

console.log(producto1.toString());
console.log(producto2.toString());

// Prueba Orden

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto1);

orden1.mostrarOrden();

let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3); // Estos productos ya no se agregan
orden2.agregarProducto(producto3); // Este producto tampoco se agrega.

orden2.mostrarOrden();
