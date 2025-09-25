// Ejercicio 1
// Función que recibe dos cadenas y muestra la más corta o si son iguales

function masCorta(cad1, cad2) {
    if (typeof cad1 !== "string" || typeof cad2 !== "string") {
        console.log("Error: Ambos parámetros deben ser cadenas de texto.");
        return;
    }
    if (cad1.length < cad2.length) {
        console.log(`La cadena más corta es: "${cad1}"`);
    } else if (cad2.length < cad1.length) {
        console.log(`La cadena más corta es: "${cad2}"`);
    } else {
        console.log("Ambas cadenas tienen la misma longitud.");
    }
}

masCorta("Holaa", "Mundo");
masCorta("JavaScript", "Java");
masCorta("Corto", 98);