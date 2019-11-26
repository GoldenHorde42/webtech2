<?php
$email = $_POST['email'];
$pswfirst = $_POST['pswfirst'];
$pwdFromDb = '';
$phoneFromDb = '';
if (!empty($email) || !empty($pswfirst)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "users";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT pswfirst,phonenumber From logindetails Where email = ? Limit 1";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     
     //$stmt->bind_result($phoneFromDb);
     $stmt->store_result();
     $stmt->bind_result($pwdFromDb,$phoneFromDb);

     $rnum = $stmt->num_rows;
     //$stmt->close();
     $stmt->fetch();
     if ($rnum==0) {
        // No record found.
        $result = array("User not found");
     } else {
        if($pswfirst == $pwdFromDb)
        {
           $result = array("Welcome",$phoneFromDb);
        } 
        else
        {
           $result = array("Password wrong");
        }
        //echo $userdata;
        // Compare the passwords
        // If matched, proceed
        // If unmatched, send back to login page again.
     }
     $stmt->free_result();
     $stmt->close();
     echo json_encode($result);
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>