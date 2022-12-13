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
    <title>Depoimentos</title>
    <link rel="stylesheet" href="style.css">
    <style type="text/css">
        .container {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            padding: 24px;
            width: 800px;
            height: 512px;
            background: rgba(255, 255, 255, 50%);
            scroll-snap-type: y mandatory;
            border-radius: 8px;
            gap: 12px;
            scroll-padding: 12px;
        }

        .container::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
        }

        .container::-webkit-scrollbar-track-piece {
            background-color: rgba(255, 255, 255, 5%);
        }

        .container::-webkit-scrollbar {
            width: 0.4em;
            height: 0.4em;
        }

        .container::-webkit-scrollbar-track {
            background-color: rgba(255, 255, 255, 5%);
            border-radius: 4px;
        }

        .container::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 10px;
        }

        .container .item {
            padding: 18px;
            color: #ffffff;
            border-radius: 8px;
            scroll-snap-align: start;
            background: rgba(0 0 0 / 80%);
        }

        .container .item h2 {
            text-transform: capitalize;
            text-shadow: none;
            text-align: left;
            margin-bottom: 0px;
        }

        .aval {
            margin-top: 0px!important;
        }

        .container .item h4 {
            text-transform: uppercase;
            font-weight: 500;
            margin-bottom: 8px;
            font-family: Inter;
        }

        .container .item p {
            margin-top: -6px;
        }

        @media screen and (max-width: 800px) {
            .container {
                width: 281px;
                height: 445px;
                padding: 16px;
            }
            .rates{
                width: 135px;
            }
            .sociall{
                width: 300px;
            }
            .text{
                margin-top: 20px!important;
            }
        }
    </style>
    <link rel=”stylesheet” href=”https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css”>
    <script src="main.js"></script>
</head>

<body>
    <img src="img/bkg (3).jpg" class="hero-image" id="hero-image">
    <div class="hero-text">
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
        <script>
            let height = window.innerHeight;
            document.getElementById("menu").style.height = height + "px";
            document.getElementById("hero-image").style.height = height + "px";
        </script>
    </div>
    <div class=text style="opacity: 1; margin-top: 50px;position: relative;visibility: visible;left: 0px;">
        <h2 id="test">Depoimentos</h2>
    </div>
    <div class="container">
    <?php
    $db = mysqli_connect("localhost", "root", "", "pedro_tech");
    $query = " select * from depoimentos ";
    $result = mysqli_query($db, $query);

    while ($data = mysqli_fetch_assoc($result)) {
    ?>
        <div class="item" <?php echo "id" . "=" . $data["id"]?>>
        <h2><?php echo $data["nome"]?></h2>
        <div class="rates">
        <?php 
            if($data["pontos"] == "1"){
                ?>
                <input type="radio" id="star1" name="rate" value="1">
                <label for="star1" id="1" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star2" name="rate" value="2">
                <label for="star2" id="2" title="text"></label>
                <input type="radio" id="star3" name="rate" value="3">
                <label for="star3" id="3" title="text"></label>
                <input type="radio" id="star4" name="rate" value="4">
                <label for="star4" id="4" title="text"></label>
                <input type="radio" id="star5" name="rate" value="5">
                <label for="star5" id="5" title="text"></label>
                <?php
            } else if($data["pontos"] == "2"){
                ?>
                <input type="radio" id="star1" name="rate" value="1">
                <label for="star1" id="1" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star2" name="rate" value="2">
                <label for="star2" id="2" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star3" name="rate" value="3">
                <label for="star3" id="3" title="text"></label>
                <input type="radio" id="star4" name="rate" value="4">
                <label for="star4" id="4" title="text"></label>
                <input type="radio" id="star5" name="rate" value="5">
                <label for="star5" id="5" title="text"></label>
                <?php
            } else if($data["pontos"] == "3"){
                ?>
                <input type="radio" id="star1" name="rate" value="1">
                <label for="star1" id="1" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star2" name="rate" value="2">
                <label for="star2" id="2" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star3" name="rate" value="3">
                <label for="star3" id="3" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star4" name="rate" value="4">
                <label for="star4" id="4" title="text"></label>
                <input type="radio" id="star5" name="rate" value="5">
                <label for="star5" id="5" title="text"></label>
                <?php
            } else if($data["pontos"] == "4"){
                ?>
                <input type="radio" id="star1" name="rate" value="1">
                <label for="star1" id="1" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star2" name="rate" value="2">
                <label for="star2" id="2" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star3" name="rate" value="3">
                <label for="star3" id="3" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star4" name="rate" value="4">
                <label for="star4" id="4" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star5" name="rate" value="5">
                <label for="star5" id="5" title="text"></label>
                <?php
            } else if($data["pontos"] == "5"){
                ?>
                <input type="radio" id="star1" name="rate" value="1">
                <label for="star1" id="1" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star2" name="rate" value="2">
                <label for="star2" id="2" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star3" name="rate" value="3">
                <label for="star3" id="3" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star4" name="rate" value="4">
                <label for="star4" id="4" title="text" style="color:#ffc700"></label>
                <input type="radio" id="star5" name="rate" value="5">
                <label for="star5" id="5" title="text" style="color:#ffc700"></label>
                <?php
            }
            ?>
        </div>
        <h4 class="aval">Data do Serviço:</h4>
        <p><?php echo $data["data"]?></p>
        <h4 class="aval">Avaliação:</h4>
        <p>
        <?php echo $data["avaliação"]?>
        </p>
        <h4 class = "txt" <?php 
            if($data["filename1"] == "n" || $data["filename2"] == "n" || $data["filename3"] == "n"){
                echo "style" . "=" . "display:none;";
            } else {
                echo "style" . "=" . "display:block;";
                }
                ?>>Imagens</h4>
        <div id="display-image">
                <div class="depoimg"><img class="depo"<?php 
                    if($data["filename1"] == "n"){
                        echo "style" . "=" . "display:none;";
                    } else {
                        echo "src=img/rating/" . $data["id"] . "/" . $data["filename1"];
                        }
                        ?>>
                </div>
                <div class="depoimg"><img class="depo"<?php 
                    if($data["filename2"] == "n"){
                        echo "style" . "=" . "display:none;";
                    } else {
                        echo "src=img/rating/" . $data["id"] . "/" . $data["filename2"];
                        }
                        ?>>
                </div>
                <div class="depoimg"><img class="depo"<?php 
                    if($data["filename3"] == "n"){
                        echo "style" . "=" . "display:none;";
                    } else {
                        echo "src=img/rating/" . $data["id"] . "/" . $data["filename3"];
                        }
                        ?>>
                        
                </div>
        </div>
        </div>
    <?php
    }
    ?>      
    </div>
    <div class=sociall>
        <div class="icons-container animated" style="background-color: rgba(0 0 0 / 60%);border-radius: 20px;flex-wrap: wrap;">
            <a class="avaliar" href="avaliar.php">Faça sua Avaliação!</a>
        </div>
    </div>
    <footer style="position: relative;">
        <p>Copyright © 2022 | <a href="inicio.php" style="color:white">Pedro Tech</a> | Todos os Direitos Reservados
            <br><a href="termos.php#politica" style="color:#0095ff;">Política de Privacidade</a> e <a href="termos.php#termos" style="color:#0095ff;">Termos e Condições</a>
            <br>Hospedado por <a href="https://www.infinityfree.net/" target="_blank" style="color:#0095ff">InfinityFree</a>
        </p>
    </footer>
</body>