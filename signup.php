<?php
$email = $_POST['email'];
$pswfirst = $_POST['pswfirst'];
$phonenumber = $_POST['phonenumber'];
if (!empty($email) && !empty($pswfirst) && !empty($phonenumber)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "users";
    //echo "Received= " . $email . ":" . $pswfirst . ":" . $phonenumber;
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From logindetails Where email = ? Limit 1";
     $INSERT = "INSERT Into logindetails (email, pswfirst, phonenumber) values(?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssi", $email,$pswfirst,$phonenumber);
      $stmt->execute();
      $message = "New record inserted sucessfully";
      $userinfo = array($message,$email,$pswfirst,$phonenumber);
      echo json_encode($userinfo);
     } else {
        $message = "Someone already registered using this email";
        $userinfo = array($message);
        echo json_encode($userinfo);
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
}
die();
?>