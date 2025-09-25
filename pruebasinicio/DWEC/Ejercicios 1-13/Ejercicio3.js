function analizarArray(arr) {
    let numeros = [];
    let cadenas = [];
    let otros = [];
    for (let elemento of arr) {
        if (typeof elemento === 'number') {
            numeros.push(elemento);
        } else if (typeof elemento === 'string') {
            cadenas.push(elemento);
        } else {
            otros.push(elemento);
        }
    }
    console.log("Números:", numeros);
    console.log("Cadenas de texto:", cadenas);
    console.log("Otros tipos:", otros);
}
analizarArray([42, "hola", true, 3.14, "mundo", null, 7, undefined, "JavaScript", {}, []]);
