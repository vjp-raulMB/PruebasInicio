// Ejercicio 2
// Crear una función que reciba dos cads de texto y compruebe si una es la inversa de la otra.

function esInversa(cad1, cad2) {
    if (typeof cad1 !== 'string' || typeof cad2 !== 'string') {
        console.log("Ambos parámetros deben ser cads de texto.");
        return;
    }
    let cad2Reversa = cad2.split('').reverse().join('');
    if (cad1 === cad2Reversa) {
        console.log(`"${cad1}" es la inversa de "${cad2}".`);
    } else {
        console.log(`"${cad1}" no es la inversa de "${cad2}".`);
    }
}

esInversa("amor", "roma");
esInversa("hola", "aloh");
esInversa("test", "prueba");
esInversa(67, "Texto");