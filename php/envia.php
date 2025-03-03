<?php
    $assunto = addslashes($_POST['assunto']);
    $nome = addslashes($_POST['nome']);
    $empresa = addslashes($_POST['empresa']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);
    
    $destino = "tecup.sac@gmail.com";
    $assuntoEmail = "Dúvidas";

    $corpo = "Nome: $nome\nEmpresa: $empresa\nAssunto: $assunto\nE-mail: $email\nTelefone: $telefone\nMensagem: $mensagem";

    $cabecalho = "From: $email\r\n";
    $cabecalho .= "Reply-To: $email\r\n";
    $cabecalho .= "X-Mailer: PHP/" . phpversion();

    if(mail($destino, $assuntoEmail, $corpo, $cabecalho)){
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha no envio do e-mail.";
    }
?>

