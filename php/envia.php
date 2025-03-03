<?php

    $assunto = addslashes($_POST['assunto']);
    $nome = addslashes($_POST['nome']);
    $empresa = addslashes($_POST['empresa']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);
    
    $destino = "tecup.sac@gmail.com";
    $assunto = "Dúvidas";

    $corpo = "Nome: ".$nome."\n"."Empresa: ".$empresa."\n"."Assunto: ".$assunto."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

    $cabecario = "From: tecup.sac@gmail.com"."\n"."Replay-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destino, $assunto, $corpo, $cabecario)){
        echo("E-mail enviado com sucesso!");
    }

?>