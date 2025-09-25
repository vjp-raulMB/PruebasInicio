<?php
if (isset($_POST['frase'])) {
    $frase = $_POST['frase'];
    $vocales = ['a', 'e', 'i', 'o', 'u'];
    $contador = ['a' => 0, 'e' => 0, 'i' => 0, 'o' => 0, 'u' => 0];
    $total = 0;
    $fraseMinuscula = mb_strtolower($frase);
    for ($i = 0; $i < mb_strlen($fraseMinuscula); $i++) {
        $letra = $fraseMinuscula[$i];
        if (in_array($letra, $vocales)) {
            $contador[$letra]++;
            $total++;
        }
    }
    echo "Frase original: $frase<br>";
    foreach ($vocales as $v) {
        echo "Vocal [$v]: {$contador[$v]}<br>";
    }
    echo "Total de vocales: $total";
} else {
?>
    <form method="post">
        <label>Introduce una frase: <input type="text" name="frase" required></label>
        <input type="submit" value="Enviar">
    </form>
<?php
}
?>