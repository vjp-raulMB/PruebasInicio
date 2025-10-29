<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Verificar que se subió un archivo
    if (isset($_FILES["archivo"]) && $_FILES["archivo"]["error"] == 0) {

        $nombreArchivo = $_FILES["archivo"]["name"];
        $tipoArchivo = $_FILES["archivo"]["type"];
        $tamanoArchivo = $_FILES["archivo"]["size"];
        $rutaTemporal = $_FILES["archivo"]["tmp_name"];

        // Recibir anchura y altura
        $anchura = isset($_POST["anchura"]) ? intval($_POST["anchura"]) : 0;
        $altura = isset($_POST["altura"]) ? intval($_POST["altura"]) : 0;

        if ($anchura > 0 && $altura > 0) {
            // Crear carpeta si no existe
            $carpetaDestino = "uploads/";
            if (!is_dir($carpetaDestino)) {
                mkdir($carpetaDestino, 0777, true);
            }

            $destino = $carpetaDestino . basename($nombreArchivo);

            // Mover el archivo
            if (move_uploaded_file($rutaTemporal, $destino)) {
                echo "<h3>Archivo subido correctamente.</h3>";
                echo "<p><strong>Nombre:</strong> $nombreArchivo</p>";
                echo "<p><strong>Tipo:</strong> $tipoArchivo</p>";
                echo "<p><strong>Tamaño:</strong> $tamanoArchivo bytes</p>";
                echo "<p><strong>Anchura:</strong> $anchura px</p>";
                echo "<p><strong>Altura:</strong> $altura px</p>";

                // Mostrar la imagen
                echo "<h3>Vista previa de la imagen:</h3>";
                echo "<img src='$destino' width='$anchura' height='$altura' alt='Imagen subida'>";
            } else {
                echo "<p>Error al mover el archivo al destino.</p>";
            }
        } else {
            echo "<p>Debes introducir una anchura y altura válidas.</p>";
        }
    } else {
        echo "<p>No se ha subido ningún archivo o ha ocurrido un error.</p>";
    }
} else {
    echo "<p>Acceso no permitido directamente.</p>";
}
?>