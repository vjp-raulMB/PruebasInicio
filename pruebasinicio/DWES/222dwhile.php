<?php
$base = 3;
$exponente = 4;
$resultado = 1;
$i = 1;

do {
    $resultado *= $base;
    $i++;
} while ($i <= $exponente);

echo "$base<sup>$exponente</sup> = $resultado";
?>