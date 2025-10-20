let Disco = {
    titulo: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    anyoLanzamiento: 1973,
    numVentas: 45000000,
    
}
Disco.getInfo = function() {
        return `Título: ${this.titulo}, Artista: ${this.artista}, Año de Lanzamiento: ${this.anyoLanzamiento}, Número de Ventas: ${this.numVentas}`;
}

console.log(Disco.getInfo());

let Calle = {
    nombre: "Calle Mayor",
    longitud:  500,
    establecimientos: ["Tienda de Ropa", "Cafetería", "Librería"],
}
Calle.getInfo = function() {
    return `Nombre: ${this.nombre}, Longitud: ${this.longitud} metros, Establecimientos: ${this.establecimientos.join(", ")}`;
}

console.log(Calle.getInfo());

let Coches = {
    modelo: "Model S",
    dueño: {
      "nombre": "Juan Pérez",
      "edad": 35
    },
    marca: {
      "nombreMarca": "Tesla",
      "anyoCreacion": 2003
    }
}
Coches.getInfo = function() {
    return `Modelo: ${this.modelo}, Dueño: ${this.dueño.nombre}, Edad del Dueño: ${this.dueño.edad}, Marca: ${this.marca.nombreMarca}, Año de Creación de la Marca: ${this.marca.anyoCreacion}`;
}

console.log(Coches.getInfo());

let Teatro = {
    titulo: "Hamlet",
    estreno: 1600,
    director: {
      "titulo": "Hamlet",
      "estreno": 1600,
      "nombreDirector": "William",
      "apellidoDirector": "Shakespeare",
      "nacimiento": "1564",
      "obrasDirigidas": ["Hamlet", "Macbeth"]
    },
    actor: {
      "titulo": "Hamlet",
      "estreno": 1600,
      "nombreActor": "Laurence Olivier",
      "edadActor": 40,
      "numActuaciones": 150
    }
}
Teatro.getInfo = function() {
    return `Título: ${this.titulo}, Estreno: ${this.estreno}, Director: ${this.director.nombreDirector} ${this.director.apellidoDirector}, Nacimiento del Director: ${this.director.nacimiento}, Obras Dirigidas: ${this.director.obrasDirigidas.join(", ")}, Actor Principal: ${this.actor.nombreActor}, Edad del Actor: ${this.actor.edadActor}, Número de Actuaciones: ${this.actor.numActuaciones}`;
}

console.log(Teatro.getInfo());