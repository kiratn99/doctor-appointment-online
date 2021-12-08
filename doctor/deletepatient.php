<?php
include_once '../assets/conn/dbconnect.php';
$icPatient = $_POST['ic'];
$delete = mysqli_query($con,"DELETE FROM patient WHERE icPatient=$icPatient");
 if(isset($delete)) {
   echo "YES";
 } else {
    echo "NO";
 }



?>

