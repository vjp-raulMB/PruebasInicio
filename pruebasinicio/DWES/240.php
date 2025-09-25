<?php
function esPar(int $num): bool {
    return $num % 2 === 0;
}
function arrayAleatorio(int $tam, int $min, int $max): array {
    $resultado = [];
    for ($i = 0; $i < $tam; $i++) {
        $resultado[] = rand($min, $max);
    }
    return $resultado;
}
function arrayPares(array &$array): int {
    $contador = 0;
    foreach ($array as $valor) {
        if (esPar($valor)) {
            $contador++;
        }
    }
    return $contador;
} 
$miArray = arrayAleatorio(10, 1, 2);
echo "Array generado: " . implode(", ", $miArray) . "\n";
echo "Cantidad de números pares: " . arrayPares($miArray) . "\n";
?>