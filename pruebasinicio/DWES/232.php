<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $numeros = [];
    for ($i = 0; $i < 33; $i++) {
        $numeros[] = rand(0, 99);
    }

    $mayor = max($numeros);
    $menor = min($numeros);
    $media = array_sum($numeros) / count($numeros);

    foreach ($numeros as $indice => $numero) {
        echo "[$indice] => $numero";
        echo "<br>";
    }
    echo "<br>";
    echo "Mayor: $mayor, Menor: $menor, Media: $media";
    ?>
</body>
</html>