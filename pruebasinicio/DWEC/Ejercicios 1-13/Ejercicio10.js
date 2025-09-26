function sumaLongitudes(...args) {
    if (!args.every(arg => typeof arg === "string")) {
        console.error("Error: Todos los argumentos deben ser cadenas.");
        return;
    }
    const total = args.reduce((acc, str) => acc + str.length, 0);
    console.log("Suma total de longitudes:", total);
}

sumaLongitudes("hola", "mundo");
sumaLongitudes("JavaScript", "es", "aburrido");
sumaLongitudes("uno", 2, "tres");