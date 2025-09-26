function mostrarPares(...args) {

    const numeros = args.filter(arg => typeof arg === "number");

    const pares = numeros.filter(num => num % 2 === 0);
 
    console.log("Números pares:", pares);
}
mostrarPares(1, 2, 3, 4, 5, 6);
mostrarPares("hola", 8, true, 10, 13);
mostrarPares(7, 9, "test", false);
mostrarPares(0, -2, 5, 11, 12);