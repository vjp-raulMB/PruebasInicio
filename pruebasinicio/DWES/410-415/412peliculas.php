<?php
session_start();

// Comprobar si hay usuario logueado
if (!isset($_SESSION['usuario'])) {
    header("Location: 410index.php");
    exit;
}

// Recuperar datos de sesión
$peliculas = $_SESSION['peliculas'] ?? [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Películas</title>
</head>
<body>
    <h1>Listado de Películas</h1>

    <nav>
        <a href="412peliculas.php">Películas</a> |
        <a href="414series.php">Series</a> |
        <a href="413logout.php">Cerrar sesión</a>
    </nav>

    <ul>
        <?php foreach ($peliculas as $p): ?>
            <li><?= htmlspecialchars($p) ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
