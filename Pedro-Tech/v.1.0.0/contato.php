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
   <title>Contato</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
<img src="img/bkg (6).jpg" class="hero-image" id="hero-image">
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
            <div class="wrapper">
                <script src="main.js"></script>
                <h2>Entre em Contato</h2>
                <h3 style="font-family: Inter;text-align: center;margin-bottom: 30px;color: gray; font-size:smaller; margin-top:-15px; text-shadow: none; box-shadow: none;background-color: rgba(0 0 0 / 0%);">Clicando em um dos botões abaixo e com o formulário preenchido sua mensagem já estará predefinada para ser enviada</h3>
                <div id="error_message">
                    
                </div>
                <div id="confirm_message">
                    
                </div>
                <form id="social" onsubmit="return validate();">
                    <div class="input_field">
                        <input type="text" placeholder="Nome" id="name">
                    </div>
                    <div class="input_field">
                        <input type="text" placeholder="Assunto" id="subject">
                    </div>
                    <div class="input_field">
                        <input type="text" placeholder="Telefone" id="phone" onkeypress="mask(this, mphone);" onblur="mask(this, mphone);">
                    </div>
                    <div class="input_field">
                        <input type="text" placeholder="E-mail" id="email">
                    </div>
                    <div class="input_field">
                        <textarea placeholder="Mensagem" id="message"></textarea>
                    </div>
                    <div class=btn>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
                        <div class="contain">
                            <div class="icons-container animated">
                                <div class="icon-container">
                                <a style="color:white;" href="#" id="wpp" style="padding: 0px 2px;" onclick="validate()"><i class="fab fa-whatsapp fa-2x"></i></a>
                                </div>
                                <div class="icon-container">
                                <a style="color:white;" href="#" id="e_mail" style="padding: 0px;" onclick="validate()"><i class="fa-regular fa-envelope fa-2x" style="margin: 0 -2px;"></i></img></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class=social>
                <script src="https://kit.fontawesome.com/3f21966000.js" crossorigin="anonymous"></script>
                    <div class="contain">
                        <div class="icons-container animated" style="background-color: rgba(0 0 0 / 60%);">
                            <div class="icon-container">
                                <a style="color:white;" href="https://api.whatsapp.com/send?1=pt_BR&phone=5532999265820" target="_blank" class= button><i class="fab fa-whatsapp fa-2x"></i></a>
                            </div>
                            <div class="icon-container">
                                <a style="color:white;" href="https://www.instagram.com/pedrotech.jf/" target="_blank" class= button><i class="fab fa-instagram fa-2x"></i></a>
                            </div>
                            <div class="icon-container">
                                <a style="color:white;" href="https://www.facebook.com/pedrotech.jf" target="_blank" class= button><i class= "fa-brands fa-square-facebook fa-2x"></i></a>
                            </div>
                            <div class="icon-container">
                                <a style="color:white;" href="tel:032999265820" class= button><i class="fa-solid fa-phone fa-2x" style="margin: 0 -2px;"></i></img></a>
                            </div>
                            <div class="icon-container">
                                <a style="color:white;" href="mailto:pedrotech.jf@gmail.com" class= button><i class="fa-regular fa-envelope fa-2x" style="margin: 0 -2px;"></i></a>
                            </div>
                        </div>
                    </div>
            </div>
   <footer style="position: relative;">
        <p>Copyright © 2022 | Pedro Tech | Todos os Direitos Reservados</p>
    </footer>
</body>