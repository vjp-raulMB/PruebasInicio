<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Guardar datos del segundo formulario en sesión
    $_SESSION['convivientes'] = htmlspecialchars($_POST['convivientes']);
    $_SESSION['aficiones'] = isset($_POST['aficiones']) ? $_POST['aficiones'] : [];
    $_SESSION['menu'] = isset($_POST['menu']) ? $_POST['menu'] : [];
} else {
    header("Location: 409formulario1.php");
    exit();
}

// Todos los datos ya están en sesión
$nombre = $_SESSION['nombre'];
$email = $_SESSION['email'];
$url = $_SESSION['url'];
$sexo = $_SESSION['sexo'];
$convivientes = $_SESSION['convivientes'];
$aficiones = $_SESSION['aficiones'];
$menu = $_SESSION['menu'];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resumen del formulario</title>
</head>
<body>
    <h2>Resumen de todos los datos</h2>
    <ul>
        <li><strong>Nombre y apellidos:</strong> <?= $nombre ?></li>
        <li><strong>Email:</strong> <?= $email ?></li>
        <li><strong>URL personal:</strong> <a href="<?= $url ?>" target="_blank"><?= $url ?></a></li>
        <li><strong>Sexo:</strong> <?= $sexo ?></li>
        <li><strong>Número de convivientes:</strong> <?= $convivientes ?></li>
        <li><strong>Aficiones:</strong> <?= !empty($aficiones) ? implode(", ", $aficiones) : "Ninguna" ?></li>
        <li><strong>Menú favorito:</strong> <?= !empty($menu) ? implode(", ", $menu) : "Ninguno" ?></li>
    </ul>
</body>
</html>
