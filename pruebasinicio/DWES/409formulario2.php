<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Guardar datos del primer formulario en sesión
    $_SESSION['nombre'] = htmlspecialchars($_POST['nombre']);
    $_SESSION['email'] = htmlspecialchars($_POST['email']);
    $_SESSION['url'] = htmlspecialchars($_POST['url']);
    $_SESSION['sexo'] = isset($_POST['sexo']) ? htmlspecialchars($_POST['sexo']) : '';
} else {
    // Si se accede directamente sin POST, redirigir al primer formulario
    header("Location: 409formulario1.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario Paso 2</title>
</head>
<body>
    <h2>Formulario Paso 2: Información adicional</h2>
    <form action="409formulario3.php" method="post">
        <label>Número de convivientes en el domicilio:</label><br>
        <input type="number" name="convivientes" min="0" required><br><br>

        <label>Aficiones:</label><br>
        <input type="checkbox" name="aficiones[]" value="Leer"> Leer<br>
        <input type="checkbox" name="aficiones[]" value="Deporte"> Deporte<br>
        <input type="checkbox" name="aficiones[]" value="Viajar"> Viajar<br>
        <input type="checkbox" name="aficiones[]" value="Cine"> Cine<br><br>

        <label>Menú favorito (selección múltiple con Ctrl/Cmd):</label><br>
        <select name="menu[]" multiple size="4">
            <option value="Pizza">Pizza</option>
            <option value="Pasta">Pasta</option>
            <option value="Sushi">Sushi</option>
            <option value="Hamburguesa">Hamburguesa</option>
        </select><br><br>

        <input type="submit" value="Finalizar">
    </form>
</body>
</html>
