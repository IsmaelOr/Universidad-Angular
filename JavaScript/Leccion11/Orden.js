class Orden extends Producto{
    static contadorOrdenes = 0;
    
    get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(productos){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = productos;
        this._contadorProductosAgregados = this._productos.length;
    }

    agregarProducto(producto){
        if(this._contadorProductosAgregados < this.MAX_PRODUCTOS)
            this._productos.push(producto);
        else
            console.log("Ya no se pueden agregar más productos a la orden")
        this._contadorProductosAgregados = this._productos.length;
    }

    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this._productos.length; i++){
            total += this._productos[i].precio;
        }
        return total;
    }

    toString(){
        return `${super.toString()} 
                ${this._idOrden} ${this._contadorProductosAgregados}`;
    }
}