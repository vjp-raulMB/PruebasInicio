console.log("1. " + new Date().toString());

let timeoutId = setTimeout(() => {
    console.log("2. " + new Date().toString());
}, 5000);

console.log("3. " + new Date().toString());

let respuesta = prompt("¿Quieres parar el temporizador? Escribe 'yes' para detenerlo.");
if (respuesta && respuesta.toLowerCase() === "yes") {
    clearTimeout(timeoutId);
    console.log("Temporizador parado antes de ejecutarse.");
}