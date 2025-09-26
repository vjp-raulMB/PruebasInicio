function mediaAritmetica(...notas) {
    if (notas.length === 0) return 0;
    return notas.reduce((acc, n) => acc + n, 0) / notas.length;
}

let estudiantes = new Map();
estudiantes.set("Raul",    [8, 8, 9, 8, 8, 7]);
estudiantes.set("Javier",   [6, 5, 7, 8, 6, 7]);
estudiantes.set("Yago",  [6, 5, 8, 2, 5, 4]);
estudiantes.set("David",  [5, 6, 6, 7, 5, 6]);

console.log("Medias académicas:");
estudiantes.forEach((notas, nombre) => {
    const media = mediaAritmetica(...notas);
    console.log(`${nombre}: ${media.toFixed(2)}`);
});

let mejorEstudiante = "";
let mejorMedia = -Infinity;
estudiantes.forEach((notas, nombre) => {
    const media = mediaAritmetica(...notas);
    if (media > mejorMedia) {
        mejorMedia = media;
        mejorEstudiante = nombre;
    }
});
console.log(`\nMejor estudiante: ${mejorEstudiante} con una media de ${mejorMedia.toFixed(2)}`);

let ordenados = Array.from(estudiantes.entries())
    .map(([nombre, notas]) => ({ nombre, media: mediaAritmetica(...notas) }))
    .sort((a, b) => b.media - a.media);

console.log("\nEstudiantes ordenados por media:");
ordenados.forEach(e => console.log(e.nombre));