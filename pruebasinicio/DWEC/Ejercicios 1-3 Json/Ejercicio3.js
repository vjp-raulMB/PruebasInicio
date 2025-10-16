class Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }
    arrancar() {
        this.encendida = true;
        console.log("Se mete y gira la llave, la moto arranca.");
    }
    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
                this.velocidadActual += this.aceleracion;
                console.log("Acelerando. Velocidad actual: " + this.velocidadActual + " km/h");
            } else {
                this.velocidadActual = this.velocidadMaxima;
                console.log("Has alcanzado la velocidad máxima: " + this.velocidadMaxima + " km/h");
            }
        } else {
            console.log("La moto está apagada. No puedes acelerar.");
        }
    }
    frenar() {
        if (this.velocidadActual - this.desaceleracion >= 0) {
            this.velocidadActual -= this.desaceleracion;
            console.log("Frenando. Velocidad actual: " + this.velocidadActual + " km/h");
        } else {
            this.velocidadActual = 0;
            console.log("La moto se ha detenido.");
        }
    }
    mostrarInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Número de ruedas: ${this.numRuedas}`);
        console.log(`Velocidad máxima: ${this.velocidadMaxima} km/h`);
        console.log(`Velocidad actual: ${this.velocidadActual} km/h`);
        console.log(`Aceleración: ${this.aceleracion} km/h²`);
        console.log(`Desaceleración: ${this.desaceleracion} km/h²`);
        console.log(`Estado: ${this.encendida ? "Encendida" : "Apagada"}`);
    }
}

let miCiclomotor = new Ciclomotor("Kawasaki", 70, 15);
console.log("LA MOTO INICIALMENTE:");
miCiclomotor.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ACELERAR:");
miCiclomotor.acelerar();
miCiclomotor.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR:");
miCiclomotor.arrancar();
miCiclomotor.acelerar();
miCiclomotor.mostrarInfo();
console.log("\n");
console.log("VOLVEMOS A ACELERAR:");
miCiclomotor.acelerar();
miCiclomotor.mostrarInfo();
console.log("\n");
console.log("FRENAMOS LA MOTO:");
miCiclomotor.frenar();
miCiclomotor.mostrarInfo();
console.log("\n");


class Motocross extends Ciclomotor {
    constructor(marca, aceleracion, desaceleracion, velocidadMaxima, velocidadActual, marchaActual) {
        super(marca, aceleracion, desaceleracion, velocidadActual);
        this.velocidadMaxima = 90;
        this.marchaActual = 0;
    }
    arrancar() {
        this.encendida = true;
        console.log("Se levanta la pata de cabra");
        console.log("Se mete y gira la llave, la moto arranca.");
    }
    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
                this.velocidadActual += this.aceleracion;
                console.log("Acelerando. Velocidad actual: " + this.velocidadActual + " km/h");if (this.velocidadActual === 0) {
                    this.marchaActual = 0;
                } else if (this.velocidadActual > 0 && this.velocidadActual <= 10) {
                    this.marchaActual = 1;
                } else if (this.velocidadActual > 10 && this.velocidadActual <= 30) {
                    this.marchaActual = 2;
                } else if (this.velocidadActual > 30 && this.velocidadActual <= this.velocidadMaxima) {
                    this.marchaActual = 3;
                }
            } else {
                this.velocidadActual = this.velocidadMaxima;
                console.log("Has alcanzado la velocidad máxima: " + this.velocidadMaxima + " km/h");
            }
        } else {
            console.log("La moto está apagada. No puedes acelerar.");
        }
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Marcha actual: ${this.marchaActual}`);
    }
}

let miCiclomotor2 = new Motocross("Honda", 10, 5);
console.log("LA MOTO INICIALMENTE:");
miCiclomotor2.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ACELERAR:");
miCiclomotor2.acelerar();
miCiclomotor2.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR:");
miCiclomotor2.arrancar();
miCiclomotor2.acelerar();
miCiclomotor2.mostrarInfo();
console.log("\n");
console.log("VOLVEMOS A ACELERAR:");
miCiclomotor2.acelerar();
miCiclomotor2.mostrarInfo();
console.log("\n");
console.log("FRENAMOS LA MOTO:");
miCiclomotor2.frenar();
miCiclomotor2.mostrarInfo();
console.log("\n");

class Scooter extends Ciclomotor {
    constructor(marca, aceleracion, desaceleracion, velocidadActual) {
        super(marca, velocidadActual);
        this.aceleracion = 25;
        this.desaceleracion = 15;
    }
    arrancar() {
        this.encendida = true;
        console.log("Se acerca la llave y se pulsa el boton, la moto arranca.");
    }
    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
                this.velocidadActual += this.aceleracion;
                console.log("Acelerando. Velocidad actual: " + this.velocidadActual + " km/h");
            } else {
                this.velocidadActual = this.velocidadMaxima;
                console.log("Has alcanzado la velocidad máxima: " + this.velocidadMaxima + " km/h");
            }
        } else {
            console.log("La moto está apagada. No puedes acelerar.");
        }
    }
    frenar() {
        if (this.velocidadActual - this.desaceleracion >= 0) {
            this.velocidadActual -= this.desaceleracion;
            console.log("Frenando. Velocidad actual: " + this.velocidadActual + " km/h");
        } else {
            this.velocidadActual = 0;
            console.log("La moto se ha detenido.");
        }
    }
    mostrarInfo() {
        super.mostrarInfo();
    }
}

let miCiclomotor3 = new Scooter("Yamaha");
console.log("LA MOTO INICIALMENTE:");
miCiclomotor3.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ACELERAR:");
miCiclomotor3.acelerar();
miCiclomotor3.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR:");
miCiclomotor3.arrancar();
miCiclomotor3.acelerar();
miCiclomotor3.mostrarInfo();
console.log("\n");
console.log("VOLVEMOS A ACELERAR:");
miCiclomotor3.acelerar();
miCiclomotor3.mostrarInfo();
console.log("\n");
console.log("FRENAMOS LA MOTO:");
miCiclomotor3.frenar();
miCiclomotor3.mostrarInfo();
console.log("\n");