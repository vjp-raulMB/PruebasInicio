var persona = {
    nombre: "Pepe",
    "edad": 30,
    trabajos: [
        {
            descripcion: "Programador",
            duracion: "2003-2005"
        },
        {
            descripcion: "Analista",
            duracion: "2005-2008"
        }
    ],
}

persona.getInfo = function () {
    let cadenaDevuelta = "Mi nombre es " + this.nombre + ", tengo " + this.edad + " años y he trabajado como ";
    for (let i = 0; i < this.trabajos.length; i++) {
        cadenaDevuelta += this.trabajos[i].descripcion + " (" + this.trabajos[i].duracion + ") ";
    }
    return cadenaDevuelta;
}

console.log(persona.getInfo());