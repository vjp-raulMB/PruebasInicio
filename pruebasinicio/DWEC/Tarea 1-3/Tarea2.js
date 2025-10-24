class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }
    pintarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Número de horas semanales: ${this.numHorasSemanales}`);
        console.log(`Salario por hora: ${this.salarioPorHora}€`);
    }
    getSaldoSemanal() {
        return this.numHorasSemanales * this.salarioPorHora;
    }
}

class Restaurante {
    constructor(nombre, trabajadores = []) {
        this.nombre = nombre;
        this.trabajadores = trabajadores;
    }
    anadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }
    pintarInfo() {
        console.log(`Restaurante: ${this.nombre}`);
        console.log("Trabajadores:");
        this.trabajadores.forEach(trabajador => {
            trabajador.pintarInfo();
            console.log('---');
        });
    }
    getPagosSemanales() {
        return this.trabajadores.reduce((total, trabajador) => total + trabajador.getSaldoSemanal(), 0);
    }
}

let restaurante = new Restaurante("La tapería");
restaurante.pintarInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));
restaurante.pintarInfo();

console.log("Mantener a los trabajadores del restaurante cuesta: "+restaurante.getPagosSemanales()+"€");