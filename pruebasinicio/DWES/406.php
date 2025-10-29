<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Contador de visitas con PHP y cookies</title>
</head>

<body>
    <div class="card">
        <h1>Contador de visitas (PHP + cookies)</h1>

        <?php
        $visitas = 0;
        $mensaje = '';
        if (isset($_POST['reset'])) {
            setcookie('visitas', 0, time() + 365 * 24 * 60 * 60, '/');
            $visitas = 0;
            $mensaje = 'Contador reiniciado manualmente. La próxima carga aumentará desde 0.';
        } elseif (isset($_POST['erase'])) {
            setcookie('visitas', '', time() - 3600, '/');
            $mensaje = 'Cookie borrada. La próxima carga se tratará como primera visita.';
        } else {
            if (!isset($_COOKIE['visitas'])) {
                $visitas = 1;
                setcookie('visitas', $visitas, time() + 365 * 24 * 60 * 60, '/');
                $mensaje = '¡Bienvenido! Esta es tu primera visita.';
            } else {
                $visitas = (int)$_COOKIE['visitas'] + 1;
                setcookie('visitas', $visitas, time() + 365 * 24 * 60 * 60, '/');
                $mensaje = 'No es tu primera visita.';
            }
        }
        ?>

        <p><?php echo $mensaje; ?></p>
        <p class="big">Visitas: <?php echo $visitas; ?></p>

        <form method="post">
            <button type="submit" name="reset">Reinicializar contador (poner a 0)</button>
            <button type="submit" name="erase">Borrar cookie (simular primera visita)</button>
        </form>

        <p><small>Este ejemplo usa una cookie llamada <code>visitas</code> con caducidad de 1 año. Puede reiniciar el contador a 0 o borrar la cookie para que la próxima visita sea tratada como primera.</small></p>
    </div>
</body>

</html>