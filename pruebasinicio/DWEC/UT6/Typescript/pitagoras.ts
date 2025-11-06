// Clase Punto2D con atributos privados, getters/setters y toString
class Punto2D {
    private _x: number;
    private _y: number;

    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    toString(): string {
        return `(${this._x}, ${this._y})`;
    }
}

// Inicializar dos variables Punto2D
const punto1: Punto2D = new Punto2D(2, 3);
const punto2: Punto2D = new Punto2D(5, 8);

// Tipo para una función que recibe dos Punto2D y devuelve un número
type FuncionDistancia = (a: Punto2D, b: Punto2D) => number;

// Implementación: calcula la distancia euclídea entre dos puntos
const distancia: FuncionDistancia = (a, b) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};

// Uso / comprobación
console.log('punto1 =', punto1.toString());
console.log('punto2 =', punto2.toString());
console.log('distancia =', distancia(punto1, punto2));