<?php
    $respuestas = array(
        "Si",
        "No",
        "Quizas",
        "Claro que si",
        "Por supuesto que no",
        "No lo tengo claro",
        "Seguro",
        "Yo diria que si",
        "Ni de coña",
        "Puede ser"
    );
    $respuesta = $respuestas[rand(0, 9)];
    echo "Respuesta: $respuesta";
?>