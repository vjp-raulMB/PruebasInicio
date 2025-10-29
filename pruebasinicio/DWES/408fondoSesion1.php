<?php
session_start();

// Colores disponibles
$colores = [
  "white" => "Blanco",
  "lightblue" => "Azul claro",
  "lightgreen" => "Verde claro",
  "lightyellow" => "Amarillo claro",
  "lightcoral" => "Coral claro",
  "lavender" => "Lavanda"
];

// Si el usuario selecciona un color, lo guardamos en sesión
if (isset($_POST['color'])) {
  $_SESSION['colorFondo'] = $_POST['color'];
}

// Color actual (por defecto blanco)
$color = isset($_SESSION['colorFondo']) ? $_SESSION['colorFondo'] : "white";
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>408fondoSesion1.php</title>
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
    select, button {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 8px;
      border: 1px solid rgba(2,6,23,0.1);
    }
  </style>
</head>
<body bgcolor="<?php echo htmlspecialchars($color); ?>">
  <div class="card">
    <h1>Selecciona el color de fondo (Sesión)</h1>
    <form method="post">
      <label for="color">Elige un color:</label>
      <select name="color" id="color">
        <?php
          foreach ($colores as $valor => $nombre) {
            $selected = ($color === $valor) ? "selected" : "";
            echo "<option value=\"$valor\" $selected>$nombre</option>";
          }
        ?>
      </select>
      <button type="submit">Aplicar</button>
    </form>

    <p>El color seleccionado se almacena en la sesión y se conservará mientras la sesión esté activa.</p>

    <p><a href="408fondoSesion2.php">Ir a la página 2</a></p>
  </div>
</body>
</html>