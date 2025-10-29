<?php
session_start();

// Obtener el color almacenado
$color = isset($_SESSION['colorFondo']) ? $_SESSION['colorFondo'] : "white";

// Si el usuario pulsa “vaciar”, destruimos la sesión y redirigimos de vuelta
if (isset($_GET['vaciar'])) {
  session_unset();
  session_destroy();
  header("Location: 408fondoSesion1.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>408fondoSesion2.php</title>
  <style>
    body {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial;
      margin: 2rem;
      color: #0f172a;
    }
    .card {
      max-width: 640px;
      margin: 0 auto;
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(16,24,40,0.06);
    }
    a {
      display: inline-block;
      margin-right: 1rem;
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body bgcolor="<?php echo htmlspecialchars($color); ?>">
  <div class="card">
    <h1>Página 2 — Sesión de color</h1>

    <p>El color de fondo actual es: <strong><?php echo htmlspecialchars($color); ?></strong></p>

    <p>
      <a href="408fondoSesion1.php">Volver a la página anterior</a>
      <a href="408fondoSesion2.php?vaciar=1">Vaciar sesión y volver</a>
    </p>
  </div>
</body>
</html>