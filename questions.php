<?php
$question = $_POST['question'];
$user = $_POST['user'];
if (!empty($question)) {
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
     $SELECT = "SELECT Question From questions Where Question = ? Limit 1";
     $INSERT = "INSERT Into questions (Question,username) values(?,?)";
     //Prepare statement
     //$likeQuestion = '%'.$question.'%';
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $question);
     $stmt->execute();
     $stmt->bind_result($question);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     $stmt->close();
     if ($rnum==0) {
      $stmt2 = $conn->prepare($INSERT);
      $stmt2->bind_param("ss",$question,$user);
      $stmt2->execute();
      $stmt2->close();
      $message = "New question inserted sucessfully";
      $userinfo = array($message,$question,$user);
      echo json_encode($userinfo);
     } else {
        $message = "Someone has asked the exact question";
        $userinfo = array($message);
        echo json_encode($userinfo);
     }
     $conn->close();
    }
} else {
 echo "All field are required";
}
die();
?>