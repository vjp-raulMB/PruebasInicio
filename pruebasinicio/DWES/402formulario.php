<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resumen del formulario</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #eee;
        }
    </style>
</head>
<body>
    <h2>Resumen de los datos ingresados</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = htmlspecialchars($_POST["nombre"]);
        $email = htmlspecialchars($_POST["email"]);
        $url = htmlspecialchars($_POST["url"]);
        $sexo = isset($_POST["sexo"]) ? htmlspecialchars($_POST["sexo"]) : "No especificado";
        $convivientes = htmlspecialchars($_POST["convivientes"]);

        $aficiones = isset($_POST["aficiones"]) ? $_POST["aficiones"] : [];
        $menu = isset($_POST["menu"]) ? $_POST["menu"] : [];

        echo "<table>
                <tr><th>Campo</th><th>Valor</th></tr>
                <tr><td>Nombre y apellidos</td><td>$nombre</td></tr>
                <tr><td>Email</td><td>$email</td></tr>
                <tr><td>URL personal</td><td><a href='$url' target='_blank'>$url</a></td></tr>
                <tr><td>Sexo</td><td>$sexo</td></tr>
                <tr><td>Número de convivientes</td><td>$convivientes</td></tr>
                <tr><td>Aficiones</td><td>" . implode(", ", $aficiones) . "</td></tr>
                <tr><td>Menú favorito</td><td>" . implode(", ", $menu) . "</td></tr>
              </table>";
    } else {
        echo "<p>No se han enviado datos.</p>";
    }
    ?>
</body>
</html>
