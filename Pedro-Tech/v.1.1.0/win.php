<?php

$status = $_SERVER['REDIRECT_STATUS'];
$codes = array(
    400 => array('400', 'Pedido Inválido', 'A solicitação não pode ser atendida devido à uma sintaxe incorreta.'),
    401 => array('401', 'Erro de Login', 'Parece que a senha e/ou nome de usuário que você digitou estava incorreto. <a href="#" onclick="window.location.reload()">Clique aqui</a> para retornar para a página de login.'),
    403 => array('403', 'Destino Proibido', 'O servidor se recusou a atender sua solicitação.'),
    404 => array('404', 'Destino Não Encontrado', 'Ops, desculpe, mas o arquivo solicitado não foi encontrado neste servidor.'),
    405 => array('405', 'Método não Permitido', 'O método especificado na linha de solicitação não é permitido para o recurso especificado.'),
    408 => array('408', 'O Tempo Limite foi Excedido', 'Seu navegador falhou ao enviar uma solicitação no tempo permitido pelo servidor.'),
    414 => array('414', 'URL Muito Longa', 'O URL que você digitou é maior que o comprimento máximo.'),
    500 => array('500', 'Erro no Servidor Interno', 'A solicitação não foi bem-sucedida devido a uma condição inesperada encontrada pelo servidor.'),
    502 => array('502', 'Gateway Inválido', 'O servidor recebeu uma resposta inválida do servidor upstream ao tentar atender à solicitação.'),
    504 => array('504', 'O Tempo Limite do Gateway foi Excedido', 'O servidor upstream falhou ao enviar uma solicitação no tempo permitido pelo servidor.'),
);

$errorcode = $codes[$status][0];
$errortitle = $errorcode . $codes[$status][1];
$message = $codes[$status][2];

?>
<!doctype html>
<html lang="pt-br">
<html style="cursor:none">

<head>
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta http-equiv="X-UA-Compatibility" content="IE=Edge">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="application-name" content="Pedro Tech">
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="favicon.png">
    <title>BSOD</title>
    <style>
        body {
            font-family: "Segoe UI Light", "Segoe UI", Arial;
            font-weight: lighter;
        }

        .bsod {
            width: 100%;
            max-width: 1500px;
            margin: 10% auto;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }

        @media screen and (max-width: 800px) {
            .qr {
                inline-size: 150px;
                margin-right: 10px;
            }

            .error_code {
                float: none !important;
                margin-left: initial !important;
                width: 100% !important;
            }
        }
    </style>
    <script type="text/javascript">
        var s;
        var sleft;
        setTimeout(function() {
            document.getElementById("time").innerHTML = "Tempo restante: 10 segundos"
        }, 1);
        setTimeout(function() {
            s = 10-1
            sleft = s
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 999);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 2000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 3000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 4000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 5000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 6000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 7000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 8000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 9000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Tempo restante: ${sleft} segundos`
        }, 10000);
        setTimeout(function() {
            window.location.href = "inicio.php";
            document.getElementById("time").innerHTML = "Tempo restante: 0 segundos";
        }, 109999999999500);
        
    </script>
</head>

<body bgcolor="#0079d8" scroll="no">
    <div class="bsod">
        <font size="4" color="#FFFFFF">
            <img src="img/sadface.png" style="font-size:100pt; margin:0; padding-bottom:20pt;height: 150px;">
            <p style="font-size:20pt; margin:0; padding:0">Ocorreu um problema e esse site precisa ser reiniciado. Estamos coletando algumas informações sobre o erro e, em seguida, iremos recarregar para você.</p>
            <p id="time">
            <p><br>
                <a href="inicio.php"><img class="qr" src="img/qr.png" style="float:left;" /></a>
            <div class="error_code" style="float:left;margin-left:30px;width:65%;">
                <p style="font-size:14pt; color:#fff; margin-top:-30px; padding:0;line-height:32px;">
                    <br />Para obter mais informações sobre esse problema e as possiveis correções, visite<br>
                    <a style="text-decoration: none; color:white" href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/<?php echo $errorcode; ?>">https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/<?php echo $errorcode; ?></a><br><br>
                    Se você ligar para o suporte, forneça essas informações:<br>
                    Código de Parada: <?php echo $errortitle; ?><br>O que falhou: <?php echo $message; ?>
                </p>
            </div>
    </div>
    </font>
</body>

</html>