<?php
$base = 3;
$exponente = 4;
$resultado = 1;
$i = 1;

while ($i <= $exponente) {
    $resultado *= $base;
    $i++;
}

echo "$base<sup>$exponente</sup> = $resultado";
?>