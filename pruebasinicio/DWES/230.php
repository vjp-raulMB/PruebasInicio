<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $numeros =[];
    for($i=1; $i<=50; $i++){
        $numeros[] = rand(0,99);
    }
    foreach($numeros as $indice => $numero){
        echo("[$indice] => $numero <br>");
    }
    ?>
</body>
</html>