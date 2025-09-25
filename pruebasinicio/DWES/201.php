<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echo y print</title>
</head>
<body>
    <!-- Muestra 3 frases, cada una en un párrafo utilizando las tres posibilidades que existen de mostrar contenido. Tras ello, introduce dos comentarios, uno de bloque y otro de una línea. -->
    <p><?php echo "Este texto se mostrará en la página web." ?></p>
    <p><?= "Este texto se mostrará en la página web." ?></p>
    <p><?php print("Este texto se mostrará en la página web.") ?></p>
</body>
</html>