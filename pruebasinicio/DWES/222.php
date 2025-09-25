<?php
$base = 3;
$exponente = 4;
$resultado = 1;

for ($i = 1; $i <= $exponente; $i++) {
    $resultado *= $base;
}

echo "$base<sup>$exponente</sup> = $resultado";
?>