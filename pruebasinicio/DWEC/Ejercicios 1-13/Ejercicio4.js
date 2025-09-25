function crearProducto(producto = "Producto generico", precio = 100, impuestos = 21) {  
    let prodStr = typeof producto === "string" ? producto : "Producto generico";
    let precioInt = parseInt(precio);
    let impuestosInt = parseInt(impuestos);

    if (isNaN(precioInt)) precioInt = 100;
    if (isNaN(impuestosInt)) impuestosInt = 21;

    console.log(`Producto: ${prodStr}, Precio: ${precioInt}, Impuestos: ${impuestosInt}`);
}

crearProducto();
crearProducto("Televisor", 350, 18);
crearProducto(1234, "abc", "xyz");
crearProducto(undefined, undefined, undefined);