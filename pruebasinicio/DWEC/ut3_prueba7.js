let elementosP = document.getElementsByTagName("p");


console.log("Elementos <p> antes de eliminar:");
for (let i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i]);
}


let parrafo = document.querySelector(".parrafos");
if (parrafo) {
    parrafo.parentNode.removeChild(parrafo);
    console.log("Elemento con clase 'parrafos' eliminado.");
}


console.log("Elementos <p> después de eliminar:");
for (let i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i]);
}