<?php
$numero = 7;

echo "<table border='1'>";
echo "<thead>
        <tr>
            <th>Multiplicando</th>
            <th>Multiplicador</th>
            <th>Resultado</th>
        </tr>
      </thead>";
echo "<tbody>";
for ($i = 1; $i <= 10; $i++) {
    $resultado = $numero * $i;
    echo "<tr>
            <td>$numero</td>
            <td>$i</td>
            <td>$resultado</td>
          </tr>";
}
echo "</tbody>";
echo "</table>";
?>