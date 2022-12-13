<!doctype html>
<html lang="pt-br">
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
   <title>Eventos</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
<img src="img/bkg (1).png" class="hero-image" id="hero-image">
    <nav>
        <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
            <a href="inicio.php"><li>Início</li></a>
            <a href="serviços.php"><li>Serviços</li></a>
            <a href="depoimentos.php"><li>Depoimentos</li></a>
            <a href="contato.php"><li>Contato</li></a>
        </ul>
        </div>
    </nav>
    <script>
    let height = window.innerHeight;
    document.getElementById("menu").style.height = height + "px";
    document.getElementById("hero-image").style.height = height + "px";
    </script>
   <div class = "hero-text">
        <a href="inicio.php">
            <h1 style="font-family: Azonix;color:white;">Pedro</h1>
            <h2 style="margin-top: -15px; font-family: Azonix;">Tech</h2>
        </a>
    </div>
        <div class = text style="opacity: 1; margin-top: 50px;position: relative;visibility: visible;left: 0px;">
            <h2>Últimos Serviços</h2>
        </div>
        <div class='music'>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
        </div>
   <footer style="position: relative;">
       <p>Copyright © 2022 | Pedro Tech | Todos os Direitos Reservados</p>
   </footer>
</body>