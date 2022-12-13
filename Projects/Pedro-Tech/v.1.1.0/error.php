<?php

$status=$_SERVER['REDIRECT_STATUS'];
$codes=array(
       400 => array('400 Pedido Inválido', 'A solicitação não pode ser atendida devido à uma sintaxe incorreta.'),
       401 => array('401 Erro de Login', 'Parece que a senha e/ou nome de usuário que você digitou estava incorreto. <a href="#" onclick="window.location.reload()">Clique aqui</a> para retornar para a página de login.'),
       403 => array('403 Proibido', 'O servidor se recusou a atender sua solicitação.'),
       404 => array('404 Não Encontrado', 'Ops, desculpe, mas o arquivo solicitado não foi encontrado neste servidor.'),
       405 => array('405 Método não Permitido', 'O método especificado na linha de solicitação não é permitido para o recurso especificado.'),
       408 => array('408 Tempo Limite Excedido', 'Seu navegador falhou ao enviar uma solicitação no tempo permitido pelo servidor.'),
       414 => array('414 URL Muito Longa', 'O URL que você digitou é maior que o comprimento máximo.'),
       500 => array('500 Erro no Servidor Interno', 'A solicitação não foi bem-sucedida devido a uma condição inesperada encontrada pelo servidor.'),
       502 => array('502 Gateway Inválido', 'O servidor recebeu uma resposta inválida do servidor upstream ao tentar atender à solicitação.'),
       504 => array('504 Tempo Limite do Gateway', 'O servidor upstream falhou ao enviar uma solicitação no tempo permitido pelo servidor.'),
);
 
$errortitle = $codes[$status][0];
$message = $codes[$status][1];

?>

<!doctype html>
<html>
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
   <title>Ocorreu um Erro!</title>
   <link rel="stylesheet" href="style.css">
	<style>
	  html 
	{color:#333;
	 font-family: "Lucida Console", Courier, monospace;
	 font-size:14px;
	 background:#eeeeee;}
 
	.content
	{margin:0 auto;
	 width:1000px;
	 margin-top:20px;
	 padding:10px 0 10px 0;
	 border:1px solid #EEE;
     background: none repeat scroll 0 0 white;
     box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
     position: relative;
	}

	h1
		{font-size:18px;
		 text-align:center;}

	h1.title 
		{color:red;}
	
	h2
		{font-size:16px;
		 text-align:center;}
	
	p 
		{text-align:center;}

	hr
		{border:#fe4902 solid 1px;}

	</style>
</head>

<body>

	<div class="content">
	<h1>Desculpe, mas ocorreu um erro.</h1>
	<h1 class="title"><?php echo $errortitle; ?></h1>
	<hr>
	<p><?php echo $message;?></p>
	</div>

</body>
</html>