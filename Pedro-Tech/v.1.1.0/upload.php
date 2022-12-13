<?php
error_reporting(0);
 
$msg = "";

// If upload button is clicked ...
if (isset($_POST['upload'])) {


    $files = array_filter($_FILES["uploadfile"]["name"]);
    $total_count = count($_FILES["uploadfile"]["name"]);
    
    for( $i=0 ; $i < $total_count ; $i++ ) {

        $filename = $_FILES["uploadfile"]["name"][$i];
        $tempname = $_FILES["uploadfile"]["tmp_name"][$i];

        $folder = "./img/rating/" . $filename;
        $db = mysqli_connect("localhost", "root", "", "pedro_tech");

        $sql = "INSERT INTO depoimentos (filename) VALUES ('$filename')";

        mysqli_query($db, $sql);

        if (move_uploaded_file($tempname, $folder)) {
            echo "<h3>  Image uploaded successfully!</h3>";
        } else {
            echo "<h3>  Failed to upload image!</h3>";
        }
     }
    header("location: depoimentos.php");
    exit();
    mysqli_close($db);
}
?>