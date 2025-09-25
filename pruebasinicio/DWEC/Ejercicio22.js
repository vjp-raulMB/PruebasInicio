function ordenaPersonas(personas) {
    return personas.sort((a, b) => a.edad - b.edad);
}

let personas = [new personasOrdenadas("Marcos", 33),
    new personasOrdenadas("Maria", 19),
    new personasOrdenadas("Santiago", 28),
    new personasOrdenadas("Cristina", 40)
];

let personasOrdenadas = ordenaPersonas(personas);
console.log(personasOrdenadas);