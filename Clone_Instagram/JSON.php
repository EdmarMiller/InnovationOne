<?php

    $json = '{"nome1": "Afonso Medeiros", "nome2": "Daniel Nascimento", "nome3": "Recode Pro"}';

    $json_convertido = json_decode($json);

    var_dump($json_convertido);

    echo $json_convertido->{'nome1'} . "<br>";
    echo $json_convertido->{'nome2'} . "<br>";

    $arr = array("1"=>"Banana", "2"=>"Laranja", "3"=>"Maça");

    // JSON_UNESCAPED_UNICODE -> Necessário para usar Caracteres especiais.
    $novo_json = json_encode($arr, JSON_UNESCAPED_UNICODE);

    echo $novo_json;


?>
