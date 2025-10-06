let primerLi = document.getElementById("primerelemento");

do {
    console.log("nodeName:", primerLi.nodeName);
    console.log("nodeType:", primerLi.nodeType);
    console.log("nodeValue:", primerLi.nodeValue);
    console.log("textContent:", primerLi.textContent);
    primerLi = primerLi.nextElementSibling;
} while (primerLi);
