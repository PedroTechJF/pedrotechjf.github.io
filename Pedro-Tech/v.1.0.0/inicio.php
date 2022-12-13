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
   <title>Início</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
<img src="img/bkg (1).jpg" class="hero-image" id="hero-image">
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
    <div class = "sobre">
        <h3 style="font-family: Inter;color:white;">Seja Bem Vindo ao Pedro Tech!</br></br>

Aqui eu me preocupo em atender você e fazer o máximo para solucionar o seu problema!</br></br>

Se seu computador não liga, está travando ou está com qualquer outro problema, entre em contato solicitando um orçamento!</br></br>

Serviços:</br></br>
- Montagem de Computadores</br>
- Formatação e Instalação de Windows</br>
- Backup e Restauração</br>
- Limpeza</br>
- Instalação de softwares</br>
- Manutenção de Computadores</br></br>

Telefone: (32) 99926-5820 (WhatsApp)</br>
Instagram: @pedrotech.jf</br>
E-mail: pedrotech.jf@gmail.com</br>
    </h3>
    </div>
    <div class=social>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
            <div class="contain">
                <div class="icons-container animated" style="background-color: rgba(0 0 0 / 60%);border-radius: 20px;">
                    <div class="icon-container">
                        <a style="color:white;" href="contato.php" class= button></i><h2>Entre em Contato</h2></a>
                    </div>
                </div>
            </div>
    </div>
   <footer style="color: white; bottom: 0; position: relative; height: auto;">
       <p>Copyright © 2022 | Pedro Tech | Todos os Direitos Reservados</p>
   </footer>
</body>