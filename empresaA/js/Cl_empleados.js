export default class Cl_empleados {
    constructor( n, t, s) {
        this.nombre = n;
        this.tipo = t;
        this.sueldo = s;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    set sueldo(s) {
        this._sueldo = s;
    }
    get sueldo() {
        return this._sueldo;
    }
}