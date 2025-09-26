function eliminarRepetidos(arr) {
    let vistos = new Set();
    let repetidos = new Set();
    let resultado = [];

    for (let elem of arr) {
        if (vistos.has(elem)) {
            repetidos.add(elem);
        } else {
            vistos.add(elem);
            resultado.push(elem);
        }
    }

    console.log("Array sin repetidos:", resultado);
    if (repetidos.size > 0) {
        console.log("Elementos repetidos:", Array.from(repetidos));
    } else {
        console.log("No había elementos repetidos.");
    }
}
eliminarRepetidos([1, 2, 3, 2, 4, 5, 3, 6, 1, 7]);