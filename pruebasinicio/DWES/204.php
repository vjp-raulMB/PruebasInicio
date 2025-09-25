<?php
    $nombre = $_GET['nombre'];
    $primerApellido = $_GET['primerApellido'];
    $segundoApellido = $_GET['segundoApellido'];
    $email = $_GET['email'];
    $añoNacimiento = $_GET['añoNacimiento'];
    $telefono = $_GET['telefono'];

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