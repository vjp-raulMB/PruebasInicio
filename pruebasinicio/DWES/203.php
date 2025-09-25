<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Datos Personales</title>
    
</head>

<body>
    <?php
    $nombre = "Raul";
    $primerApellido = "Martin";
    $segundoApellido = "Bote";
    $email = "raulm@gmail.com";
    $añoNacimiento = 2002;
    $telefono = 678342156;

    echo "<table border='1'>
            <tr>
                <th>Nombre</th>
                <td>$nombre</td>
            </tr>
            <tr>
                <th>Primer Apellido</th>
                <td>$primerApellido</td>
            </tr>
            <tr>
                <th>Segundo Apellido</th>
                <td>$segundoApellido</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>$email</td>
            </tr>
            <tr>
                <th>Año de Nacimiento</th>
                <td>$añoNacimiento</td>
            </tr>
            <tr>
                <th>Teléfono</th>
                <td>$telefono</td>
            </tr>
            </table>";
    ?>
</body>

</html>