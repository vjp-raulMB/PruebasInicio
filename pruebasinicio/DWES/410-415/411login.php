<?php
session_start();

// Comprobar credenciales
if ($_POST['usuario'] === 'usuario' && $_POST['password'] === 'usuario') {
    $_SESSION['usuario'] = 'usuario';

    // Cargar datos en sesión (controlador se encarga de "inyectarlos")
    $_SESSION['peliculas'] = [
        "El Padrino",
        "Pulp Fiction",
        "El Señor de los Anillos"
    ];

    $_SESSION['series'] = [
        "Breaking Bad",
        "Stranger Things",
        "The Office"
    ];

    // Redirigir a la vista de películas
    header("Location: 412peliculas.php");
    exit;
} else {
    header("Location: 410index.php?error=1");
    exit;
}
?>