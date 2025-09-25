<?php
if (isset($_POST['frase'])) {
    $frase = $_POST['frase'];
    $resultado = "";

    for ($i = 1; $i < strlen($frase); $i += 2) {
        $resultado .= $frase[$i];
    }

    echo "Frase original: $frase<br>";
    echo "Caracteres en posiciones impares: $resultado";
} else {
?>
    <form method="post">
        <label>Introduce una frase: <input type="text" name="frase" required></label>
        <input type="submit" value="Enviar">
    </form>
<?php
}
?>