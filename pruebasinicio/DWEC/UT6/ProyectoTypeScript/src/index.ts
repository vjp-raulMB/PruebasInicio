// Interfaz BiDimensional
interface BiDimensional {
    getArea(): number;
    pintarInfo(): void;
}

// Clase Círculo
class Circulo implements BiDimensional {
    private radio: number;
    constructor(radio: number) {
        this.radio = radio;
    }
    getArea(): number {
        return Math.PI * this.radio * this.radio;
    }
    pintarInfo(): void {
        console.log(`La figura es un círculo de radio ${this.radio}`);
    }
}

// Clase Rectángulo
class Rectangulo implements BiDimensional {
    private lado1: number;
    private lado2: number;
    constructor(lado1: number, lado2: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    getArea(): number {
        return this.lado1 * this.lado2;
    }
    pintarInfo(): void {
        console.log(`La figura es un rectángulo de lados ${this.lado1} y ${this.lado2}`);
    }
}

// Clase Triángulo
class Triangulo implements BiDimensional {
    private base: number;
    private altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    getArea(): number {
        return (this.base * this.altura) / 2;
    }
    pintarInfo(): void {
        console.log(`La figura es un triángulo de base ${this.base} y altura ${this.altura}`);
    }
}

// Array de figuras
const figuras: BiDimensional[] = [];
figuras.push(new Circulo(3));
figuras.push(new Rectangulo(4, 6));
figuras.push(new Triangulo(3, 6));

// Función para pintar info de figuras
function pintarInfoFiguras(figs: BiDimensional[]): void {
    figs.forEach(figura => {
        figura.pintarInfo();
        console.log(`Área: ${figura.getArea()}`);
    });
}

// Aplicar la función
pintarInfoFiguras(figuras);