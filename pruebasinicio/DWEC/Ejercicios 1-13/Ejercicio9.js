function PlatoCocina(nombrePlato, duracionMinutos, dificultad) {
    this.nombrePlato = nombrePlato;
    this.duracionMinutos = duracionMinutos;
    this.dificultad = dificultad;
}

let plato1 = new PlatoCocina("Tortilla de patatas", 30, 2);
let plato2 = new PlatoCocina("Paella", 60, 4);
let plato3 = new PlatoCocina("Ensalada César", 15, 1);

let mapaPlatos = new Map();
mapaPlatos.set(new PlatoCocina("Tortilla de patatas", 30, 2), ["patatas", "huevos", "cebolla", "aceite", "sal"]);
mapaPlatos.set(new PlatoCocina("Paella", 60, 4), ["arroz", "pollo", "marisco", "azafrán", "guisantes"]);
mapaPlatos.set(new PlatoCocina("Ensalada César", 15, 1), ["lechuga", "pollo", "queso", "pan", "salsa césar"]);

function mostrarMapaPlatos(mapa) {
    for (let [plato, ingredientes] of mapa) {
        console.log(`Plato: ${plato.nombrePlato}, Duración: ${plato.duracionMinutos} minutos, Dificultad: ${plato.dificultad}`);   
        console.log(`Ingredientes: ${ingredientes.join(", ")}`);
        console.log('---');
    }
}
mostrarMapaPlatos(mapaPlatos);