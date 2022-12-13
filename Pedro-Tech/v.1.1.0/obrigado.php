<?php $db = mysqli_connect("sql302.epizy.com", "epiz_32266644", "Iq7v2BkmOdVUL", "epiz_32266644_pedro_tech");
$query = "SELECT MAX(id) as id from `depoimentos`";
$result = mysqli_query($db, $query);
$data = mysqli_fetch_assoc($result);
$id = $data['id'] + 0;
$r = "https://www.pedrotech.gq/depoimentos.php#" . $id ?>
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
    <title>Obrigado pelo seu depoimento!</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
    <script type="text/javascript">
        var s;
        var sleft;
        setTimeout(function() {
            document.getElementById("time").innerHTML = "Você será redirecionado para ele em 15 segundos"
        }, 1);
        setTimeout(function() {
            s = 15-1
            sleft = s
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 999);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 2000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 3000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 4000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 5000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 6000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 7000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 8000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 9000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 10000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 11000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 12000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 13000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 14000);
        setTimeout(function() {
            s = sleft
            sleft = s - 1
            document.getElementById("time").innerHTML = `Você será redirecionado para ele em ${sleft} segundos`
        }, 15000);
        setTimeout(function() {
            window.location.href = "<?php echo $r?>";;
            document.getElementById("time").innerHTML = "Você será redirecionado para ele em 0 segundos";
        }, 15500);
        
    </script>
    <style type="text/css">
        html,
        body {
            height: 100%;
            margin: 0;
            background: white;
        }
        p{
            color:white;
            word-wrap: break-word;
            text-align:center;
        }
    </style>
</head>

<body>
<img src="img/bkg (4).jpg" class="hero-image" id="hero-image">
    <div class = "hero-text">
        <a class="logo" href="inicio.php">
            <h1 style="font-family: Azonix;color:white;padding-top: 5px;">Pedro</h1>
            <h2 style="margin-top: -15px;font-family: Azonix;padding-bottom: 5px;">Tech</h2>
        </a>
        <nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <a href="inicio.php">
                        <li>Início</li>
                    </a>
                    <a href="depoimentos.php">
                        <li>Depoimentos</li>
                    </a>
                    <a href="contato.php">
                        <li>Contato</li>
                    </a>
                </ul>
            </div>
        </nav>
    </div>  
    <script>
        let height = window.innerHeight;
        document.getElementById("menu").style.height = height + "px";
        document.getElementById("hero-image").style.height = height + "px";
    </script>

    <div id="thanks">
        <div class="thanks_msg">
            <h2>Muito Obrigado por sua Avaliação!</h2>
            <p>Seu depoimento já pode ser visualizado!<br>Clique no botão abaixo para ir diretamente para ele, ou aguarde que você será automaticamente redirecionado.<br><br><a href=<?php echo $r?> class="redirect">Ir para o meu Depoimento</a></p>
            <p id="time"></p>
        </div>
    </div>
    <footer style="position: relative;">
        <p>Copyright © 2022 | <a href="inicio.php" style="color:white">Pedro Tech</a> | Todos os Direitos Reservados
            <br><a href="termos.php#politica" style="color:#0095ff;">Política de Privacidade</a> e <a href="termos.php#termos" style="color:#0095ff;">Termos e Condições</a>
            <br>Hospedado por <a href="https://www.infinityfree.net/" target="_blank" style="color:#0095ff">InfinityFree</a>
        </p>
    </footer>
</body>