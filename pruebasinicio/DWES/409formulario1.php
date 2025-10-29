<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario Paso 1</title>
</head>
<body>
    <h2>Formulario Paso 1: Datos personales</h2>
    <form action="409formulario2.php" method="post">
        <label>Nombre y apellidos:</label><br>
        <input type="text" name="nombre" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>URL de tu página personal:</label><br>
        <input type="url" name="url"><br><br>

        <label>Sexo:</label><br>
        <input type="radio" name="sexo" value="Hombre" required> Hombre
        <input type="radio" name="sexo" value="Mujer"> Mujer
        <input type="radio" name="sexo" value="Otro"> Otro<br><br>

        <input type="submit" value="Siguiente">
    </form>
</body>
</html>
