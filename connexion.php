<?php
$machine = "localhost";
$utilisateur = "root";
$mot_de_passe = "";
$bd = "traducode";
$connexion = mysqli_connect($machine, $utilisateur, $mot_de_passe, $bd) or die('Problème de connexion au serveur');
?>