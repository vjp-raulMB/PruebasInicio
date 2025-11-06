<?php
session_start();
if (isset($_SESSION['usuario'])) {
    header("Location: 412peliculas.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Iniciar Sesión</title>
</head>
<body>
    <h2>Inicio de Sesión</h2>
    <form action="411login.php" method="post">
        <label>Usuario:</label>
        <input type="text" name="usuario" required><br><br>

        <label>Contraseña:</label>
        <input type="password" name="password" required><br><br>

        <input type="submit" value="Entrar">
    </form>
    <?php
    if (isset($_GET['error'])) {
        echo "<p style='color:red;'>Usuario o contraseña incorrectos.</p>";
    }
    ?>
</body>
</html>
