const primerEnlace = document.querySelector("#div1 a");

alert(`1) Title del primer enlace: ${primerEnlace.getAttribute("title")}`);

const enlaceHijoDiv = document.querySelector("div > a");
alert(`2) Enlace hijo inmediato de div: ${enlaceHijoDiv ? enlaceHijoDiv.textContent : "No existe"}`);

const enlaceHijoP = document.querySelector("#div1 > p > a");
alert(`3) Enlace hijo de p dentro de #div1: ${enlaceHijoP ? enlaceHijoP.textContent : "No existe"}`);

const enlacelinkNormal = document.querySelector(".linkNormal ~ a");
console.log(`4) Enlace de la segunda clase: ${enlacelinkNormal.getAttribute("href")}`);

const spiderLink = document.querySelector('.linkNormal[title^="Spider"]');
if (spiderLink) {
    resultado.innerHTML += `<p>5) Tipo de nodo: <strong>${spiderLink.nodeName}</strong><br>Contenido HTML: <strong>${spiderLink.innerHTML}</strong></p>`;
} else {
    resultado.innerHTML += `<p>5) No se encontró ningún enlace con title que empiece por 'Spider'.</p>`;
}