
<?php

include 'connexion.php';

$username = $_POST['username'];
$password = $_POST['password'];

$requet = "INSERT INTO `login`(`username`, `password`) VALUES ('$username','$password')";

$resultat = mysqli_query($connexion, $requet);

if($resultat) {
    header("Location: Main.html");
    exit; 
} else {
    echo "Erreur lors de l'enregistrement dans la base de données";
}

?>
