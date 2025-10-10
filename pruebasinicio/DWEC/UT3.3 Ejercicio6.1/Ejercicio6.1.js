const colores = ["rojo", "azul", "verde", "amarillo"];
// Mapeo de los nombres a los valores CSS
const colorCSS = {
  rojo: "red",
  azul: "blue",
  verde: "green",
  amarillo: "yellow",
};

// Función que crea la matriz 10x10
function crearMatriz() {
  const contenedor = document.getElementById("contenedorGeneral");
  contenedor.style.display = "grid";
  contenedor.style.gridTemplateColumns = "repeat(10, auto)";
  contenedor.style.gap = "10px";
  contenedor.style.justifyContent = "center";
  contenedor.style.marginTop = "20px";

  for (let i = 0; i < 100; i++) {
    const boton = document.createElement("button");
    boton.style.width = "25px";
    boton.style.height = "25px";
    boton.style.backgroundColor = "white";
    boton.style.border = "1px solid black";
    boton.dataset.colorIndex = -1; // -1 = sin color
    asignarEventos(boton);
    contenedor.appendChild(boton);
  }
}

// Función que asigna los eventos a cada botón
function asignarEventos(boton) {
  // Clic izquierdo
  boton.addEventListener("click", (e) => {
    cambiarColor(boton, 1);
  });

  // Clic derecho
  boton.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Evita el menú contextual
    cambiarColor(boton, -1);
  });

  // Clic con la rueda del ratón
  boton.addEventListener("mousedown", (e) => {
    if (e.button === 1) { // botón del medio
      e.preventDefault();
      boton.style.backgroundColor = "gray";
      boton.dataset.colorIndex = -1;
    }
  });
}

// Cambia el color según la dirección (+1 o -1)
function cambiarColor(boton, direccion) {
  let index = parseInt(boton.dataset.colorIndex);
  index = (index + direccion + colores.length) % colores.length;
  boton.dataset.colorIndex = index;
  boton.style.backgroundColor = colorCSS[colores[index]];
}

// Ejecutar al cargar la página
window.onload = crearMatriz;