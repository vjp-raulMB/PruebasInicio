function procesarArray(arr) {
    if (!arr.every(e => typeof e === "number")) {
        alert("Error");
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }

    if (arr.every(e => e % 2 === 0)) {
        alert("Todos los elementos son pares. ¡Éxito!");
    } else {
        alert("Error: No todos los elementos son pares.");
    }
}
let miArray = [1, 2, 3, 4];
procesarArray(miArray);