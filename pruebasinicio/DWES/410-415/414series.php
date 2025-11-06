<?php
session_start();

// Comprobar si hay usuario logueado
if (!isset($_SESSION['usuario'])) {
    header("Location: 410index.php");
    exit;
}

// Recuperar datos de sesión
$series = $_SESSION['series'] ?? [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Series</title>
</head>
<body>
    <h1>Listado de Series</h1>

    <nav>
        <a href="412peliculas.php">Películas</a> |
        <a href="414series.php">Series</a> |
        <a href="413logout.php">Cerrar sesión</a>
    </nav>

    <ul>
        <?php foreach ($series as $s): ?>
            <li><?= htmlspecialchars($s) ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
