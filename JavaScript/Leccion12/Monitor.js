class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}`;
    }
}