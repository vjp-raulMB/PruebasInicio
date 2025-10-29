<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Verificar que se haya subido un archivo
    if (isset($_FILES["archivo"]) && $_FILES["archivo"]["error"] == 0) {

        $nombreArchivo = $_FILES["archivo"]["name"];
        $tipoArchivo = $_FILES["archivo"]["type"];
        $tamanoArchivo = $_FILES["archivo"]["size"];
        $rutaTemporal = $_FILES["archivo"]["tmp_name"];

        // Tipos MIME válidos para imágenes
        $tiposValidos = ["image/jpeg", "image/png", "image/gif", "image/webp"];

        // Comprobamos si el archivo subido es una imagen válida
        if (in_array($tipoArchivo, $tiposValidos)) {

            // Obtener anchura y altura
            $anchura = isset($_POST["anchura"]) ? intval($_POST["anchura"]) : 0;
            $altura = isset($_POST["altura"]) ? intval($_POST["altura"]) : 0;

            if ($anchura > 0 && $altura > 0) {
                // Crear carpeta si no existe
                $carpetaDestino = "uploads/";
                if (!is_dir($carpetaDestino)) {
                    mkdir($carpetaDestino, 0777, true);
                }

                $destino = $carpetaDestino . basename($nombreArchivo);

                // Mover archivo a carpeta de destino
                if (move_uploaded_file($rutaTemporal, $destino)) {
                    echo "<h3>Imagen subida correctamente.</h3>";
                    echo "<p><strong>Nombre:</strong> $nombreArchivo</p>";
                    echo "<p><strong>Tipo:</strong> $tipoArchivo</p>";
                    echo "<p><strong>Tamaño:</strong> $tamanoArchivo bytes</p>";
                    echo "<p><strong>Anchura:</strong> $anchura px</p>";
                    echo "<p><strong>Altura:</strong> $altura px</p>";

                    // Mostrar la imagen con las dimensiones indicadas
                    echo "<h3>Vista previa:</h3>";
                    echo "<img src='$destino' width='$anchura' height='$altura' alt='Imagen subida'>";
                } else {
                    echo "<p>Error al mover el archivo al destino.</p>";
                }
            } else {
                echo "<p>Debes introducir una anchura y altura válidas.</p>";
                echo "<p><a href='405.html'>Volver al formulario</a></p>";
            }

        } else {
            echo "<p>Error: Solo se permiten subir archivos de imagen (JPG, PNG, GIF, WEBP).</p>";
            echo "<p><a href='405.html'>Volver al formulario</a></p>";
        }

    } else {
        echo "<p>No se ha subido ningún archivo o ha ocurrido un error.</p>";
        echo "<p><a href='405.html'>Volver al formulario</a></p>";
    }

} else {
    echo "<p>Acceso no permitido directamente.</p>";
    echo "<p><a href='405.html'>Volver al formulario</a></p>";
}
?>