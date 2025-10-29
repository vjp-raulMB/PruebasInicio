<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cambiar color de fondo con cookies</title>
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
    h1 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    select, button {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 8px;
      border: 1px solid rgba(2,6,23,0.1);
    }
  </style>
</head>

<?php
// Lista de colores disponibles
$colores = [
  "white" => "Blanco",
  "lightblue" => "Azul claro",
  "lightgreen" => "Verde claro",
  "lightyellow" => "Amarillo claro",
  "lightcoral" => "Coral claro",
  "lavender" => "Lavanda"
];

// Si el usuario ha enviado un nuevo color
if (isset($_POST['color'])) {
  $color = $_POST['color'];
  setcookie("colorFondo", $color, time() + 24*60*60, "/"); // Cookie válida 24h
} elseif (isset($_COOKIE['colorFondo'])) {
  $color = $_COOKIE['colorFondo'];
} else {
  $color = "white"; // color por defecto
}
?>

<body bgcolor="<?php echo htmlspecialchars($color); ?>">
  <div class="card">
    <h1>Selecciona el color de fondo</h1>

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

    <p>El color elegido se recordará durante 24 horas.</p>
  </div>
</body>
</html>