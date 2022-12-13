<?php
error_reporting(0);
 
$msg = "";

// If upload button is clicked ...
if (isset($_POST['upload'])) {

    $db = mysqli_connect("localhost", "root", "", "pedro_tech");

    $name = mysqli_real_escape_string($db, $_POST['name']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $data = mysqli_real_escape_string($db, $_POST['data']);
    $message = mysqli_real_escape_string($db, $_POST['message']);
    $pontos = mysqli_real_escape_string($db, $_POST['pontos']); 
    $files = array_filter($_FILES["uploadfile"]["name"]);
    $total_count = count($_FILES["uploadfile"]["name"]);
    $total_tmp_count = count($_FILES["uploadfile"]["tmp_name"]);
    $q = mysqli_query($db, 'SELECT MAX(id) as id from `depoimentos`');
    $row = mysqli_fetch_assoc($q);
    $id = $row['id'] + 1;

        for( $i=0 ; $i < $total_count ; $i++ ) {

            $filename = $_FILES["uploadfile"]["name"][$i];
            $filename = preg_replace('/\s+/', '_', $filename);
            $filename2 = $_FILES["uploadfile"]["name"][$i+1];
            $filename2 = preg_replace('/\s+/', '_', $filename2);
            $filename3 = $_FILES["uploadfile"]["name"][$i+2];
            $filename3 = preg_replace('/\s+/', '_', $filename3);
            $tempname = $_FILES["uploadfile"]["tmp_name"][$i];
            
            if ($tempname == ""){
                $sql = "INSERT INTO depoimentos (id, nome, email, pontos, data, avaliação, filename1, filename2, filename3) VALUES ('" . $id . "', '" . $name . "', '" . $email . "', '" . $pontos . "', '" . $data . "', '" . $message . "', '" . "n" . "', '" . "n" . "', '" . "n" . "')";
                mysqli_query($db, $sql);
            } else {
                if ($total_count == 1){
                    mkdir("./img/rating/$id/");
                    $folder = "./img/rating/$id/" . $filename;
                    $sql = "INSERT INTO depoimentos (id, nome, email, pontos, data, avaliação, filename1, filename2, filename3) VALUES ('" . $id . "', '" . $name . "', '" . $email . "', '" . $pontos . "', '" . $data . "', '" . $message . "', '" . $filename . "', '" . "n" . "', '" . "n" . "')";
                    mysqli_query($db, $sql);
                    move_uploaded_file($tempname, $folder);
                } else if($total_count == 2){
                    mkdir("./img/rating/$id/");
                    $folder = "./img/rating/$id/" . $filename;
                    $sql = "INSERT INTO depoimentos (id, nome, email, pontos, data, avaliação, filename1, filename2, filename3) VALUES ('" . $id . "', '" . $name . "', '" . $email . "', '" . $pontos . "', '" . $data . "', '" . $message . "', '" . $filename . "', '" . $filename2 . "', '" . "n" . "')";
                    mysqli_query($db, $sql);
                    move_uploaded_file($tempname, $folder);
                } else if($total_count == 3){
                    mkdir("./img/rating/$id/");
                    $folder = "./img/rating/$id/" . $filename;
                    $sql = "INSERT INTO depoimentos (id, nome, email, pontos, data, avaliação, filename1, filename2, filename3) VALUES ('" . $id . "', '" . $name . "', '" . $email . "', '" . $pontos . "', '" . $data . "', '" . $message . "', '" . $filename . "', '" . $filename2 . "', '" . $filename3 . "')";
                    mysqli_query($db, $sql);
                    move_uploaded_file($tempname, $folder);
                }
        }
    }
    header("location: obrigado.php");
    exit();
    mysqli_close($db);
}
?>
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
   <title>Avaliar</title>
   <link rel="stylesheet" href="style.css">
   <script src="main.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
    <script type="text/javascript">
        $("#data").mask("00/00/0000");
    </script>
</head>
<body onload="size()">
<img src="img/bkg (4).jpg" class="hero-image" id="hero-image">
<div class = "hero-text">
        <a class="logo" href="inicio.php">
            <h1 style="font-family: Azonix;color:white;padding-top: 5px;">Pedro</h1>
            <h2 style="margin-top: -15px;font-family: Azonix;padding-bottom: 5px;">Tech</h2>
        </a>
        <nav>
        <div id="menuToggle">
        <input type="checkbox"/>
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
    <div class="wrapper">
        <h2>Faça sua Avaliação</h2>
        <h3 style="font-family: Inter;text-align: center;margin-bottom: 30px;color: gray; font-size:smaller; margin-top:-15px; text-shadow: none; box-shadow: none;background-color: rgba(0 0 0 / 0%);">Clicando em um dos botões abaixo e com o formulário preenchido sua mensagem já estará predefinada para ser enviada</h3>
        <div id="error_message">
            
        </div>
        <div id="confirm_message">

        </div>
            
        <form method="post" action="" enctype="multipart/form-data" id="rating">
            <div class="input_field">
                <input type="text" placeholder="Nome" name="name" id="name">
            </div>
            <div class="input_field">
                <input type="text" placeholder="E-mail" name="email" id="email">
            </div>
            <div class="input_field">
                <input type="text" placeholder="Data do Serviço" name="data" id="data">
            </div>
            <div class="input_field">
                <textarea placeholder="Avaliação" name="message" id="message"></textarea>
            </div>
            <div class="input_field" id="i">
                <div id="imagem">
                
                <label id= "l" for='file1' class="labels" style="padding: 6px 114px 10px;">Envie fotos (Opcional)<br>Máximo Permitido: 3
                <input type="file" class="inputs" name="uploadfile[]" id="file1" accept="image/*" onchange="handleFiles(this.files)" multiple="multiple"/>
                </label>
                </div>
                <p id="imgn"></p>
            </div>
            <div class="rate" id="rate">
                    <input type="radio" id="star5" name="rate" value="5"  onclick='document.getElementById("pontos").setAttribute("value","5")'/>
                    <label for="star5" id="lstar5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"  onclick='document.getElementById("pontos").setAttribute("value","4")'/>
                    <label for="star4" id="lstar4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3"  onclick='document.getElementById("pontos").setAttribute("value","3")'/>
                    <label for="star3" id="lstar3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"  onclick='document.getElementById("pontos").setAttribute("value","2")'/>
                    <label for="star2" id="lstar2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1" onclick='document.getElementById("pontos").setAttribute("value","1")'/>
                    <label for="star1" id="lstar1" title="text"></label>
                    <input type="text" id="pontos" name="pontos" value="0"/>
                </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
            <div class="contain">
                <div class="icons-container animated">
                    <div class="icon-container">
                        <button style="color: white; padding: 0px 2px; font-family: Inter; background: none; font-size: 17px;" id="finish" type="submit" name="upload" onclick="return rating()">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
   <footer style="position: relative;">
        <p>Copyright © 2022 | <a href="inicio.php" style="color:white">Pedro Tech</a> | Todos os Direitos Reservados
       <br><a href="termos.php#politica" style="color:#0095ff;">Política de Privacidade</a> e <a href="termos.php#termos" style="color:#0095ff;">Termos e Condições</a>
       <br>Hospedado por <a href="https://www.infinityfree.net/" target= "_blank" style="color:#0095ff">InfinityFree</a></p>
   </footer>
</body>