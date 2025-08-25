<?php

include 'connexion.php';

if(isset($_POST['Firstname'], $_POST['Lastname'], $_POST['Email'], $_POST['Username'], $_POST['Password'])) {
    
    $Firstname = mysqli_real_escape_string($connexion, $_POST['Firstname']);
    $Lastname = mysqli_real_escape_string($connexion, $_POST['Lastname']);
    $Email = mysqli_real_escape_string($connexion, $_POST['Email']);
    $Username = mysqli_real_escape_string($connexion, $_POST['Username']);
    $Password = mysqli_real_escape_string($connexion, $_POST['Password']);

    $hashedPassword = password_hash($Password, PASSWORD_DEFAULT);

    $requete = "INSERT INTO `signup`(`Firstname`, `Lastname`, `Email`, `Username`, `Password`) 
                VALUES ('$Firstname','$Lastname','$Email','$Username','$hashedPassword')";

    $resultat = mysqli_query($connexion, $requete);

    
    if($resultat) {
        header("Location: Main.html");
        exit(); 
    } else {
        
        echo "Erreur lors de l'enregistrement : " . mysqli_error($connexion);
    }
} else {
    header("Location: Main.html");
}
?>

