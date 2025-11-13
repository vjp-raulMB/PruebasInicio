<?php
// === SCRIPT PHP: Altura y edad media del equipo masculino español ===

$url = 'http://www.seleccionbaloncesto.es';

// Obtener el contenido HTML de la página
$html = @file_get_contents($url);

if ($html === false) {
    die("Error: No se pudo cargar la página $url\n");
}

// Buscar la tabla del equipo masculino (usamos una expresión regular robusta)
$pattern = '/<table[^>]*class="[^"]*table[^"]*"[^>]*>.*?(<thead>.*?<\/thead>.*?)<tbody>(.*?)<\/tbody>.*?<\/table>/is';

if (!preg_match($pattern, $html, $tableMatch)) {
    die("Error: No se encontró la tabla del equipo.\n");
}

$thead = $tableMatch[1];
$tbody = $tableMatch[2];

// Extraer filas del cuerpo
preg_match_all('/<tr[^>]*>(.*?)<\/tr>/is', $tbody, $rows);
if (empty($rows[1])) {
    die("Error: No se encontraron filas en la tabla.\n");
}

$alturas = [];
$edades = [];

foreach ($rows[1] as $row) {
    // Saltar filas vacías o de encabezado
    if (trim(strip_tags($row)) === '') continue;

    // Extraer celdas <td>
    preg_match_all('/<td[^>]*>(.*?)<\/td>/is', $row, $cells);
    $cells = array_map('strip_tags', $cells[1]);
    $cells = array_map('trim', $cells);

    // Esperamos al menos 5 columnas: Nombre, Posición, Altura, Edad, etc.
    if (count($cells) < 5) continue;

    $nombre = $cells[0] ?? '';
    $altura_str = $cells[2] ?? ''; // columna de altura (ej: 2.01 m)
    $edad_str = $cells[3] ?? '';   // columna de edad

    // Limpiar y convertir altura (ej: "2.01 m" → 201)
    if (preg_match('/[\d,]+\.?\d*\s*m/', $altura_str, $h)) {
        $altura_cm = (float)str_replace(',', '.', trim(str_replace('m', '', $h[0]))) * 100;
        $alturas[] = $altura_cm;
    }

    // Extraer edad
    if (preg_match('/\d+/', $edad_str, $e)) {
        $edades[] = (int)$e[0];
    }
}

// Filtrar jugadores activos (excluir "Baja", "Descarte", etc.)
$jugadores_activos = [];
for ($i = 0; $i < count($alturas); $i++) {
    // Aquí puedes añadir lógica para filtrar bajas si aparecen en otra columna
    // Por ahora asumimos todos los listados son activos
    $jugadores_activos[] = [
        'altura' => $alturas[$i],
        'edad' => $edades[$i] ?? null
    ];
}

// Eliminar entradas sin edad
$jugadores_activos = array_filter($jugadores_activos, function($j) {
    return $j['edad'] !== null;
});

if (empty($jugadores_activos)) {
    die("Error: No se encontraron jugadores válidos.\n");
}

// Calcular medias
$suma_altura = array_sum(array_column($jugadores_activos, 'altura'));
$suma_edad = array_sum(array_column($jugadores_activos, 'edad'));
$count = count($jugadores_activos);

$media_altura = $suma_altura / $count;
$media_edad = $suma_edad / $count;

// Resultado
echo "=== RESULTADOS ===\n";
echo "Jugadores analizados: $count\n";
echo "Altura media: " . round($media_altura, 1) . " cm\n";
echo "Edad media: " . round($media_edad, 1) . " años\n";
echo "\n";

echo "Detalles:\n";
foreach ($jugadores_activos as $j) {
    echo "- Altura: {$j['altura']} cm, Edad: {$j['edad']} años\n";
}
?>