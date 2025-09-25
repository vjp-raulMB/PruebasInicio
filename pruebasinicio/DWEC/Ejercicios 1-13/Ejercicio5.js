function ordenarConSort(arr) {
    let copia = arr.slice(); 
    copia.sort((a, b) => a - b); 
    return copia; 
}

function ordenarManualmente(arr) {
    let copia = arr.slice();
    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = i + 1; j < copia.length; j++) {
            if (copia[i] > copia[j]) {
                let temp = copia[i];
                copia[i] = copia[j];
                copia[j] = temp;
            }
        }
    }
    return copia;
}
let numeros = [34, 7, 23, 32, 5, 62];
console.log("Array original:", numeros);
console.log("Ordenado con sort():", ordenarConSort(numeros));
console.log("Ordenado manualmente:", ordenarManualmente(numeros));