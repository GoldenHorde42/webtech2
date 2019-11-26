<?php
$question = $_POST['question'];
$allquestion ="";
$createdate = "";
$username = "";
$createdate1 = "";
$username1 = "";
$questions = [];
$allquestions = [];
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
        $message = "These questions have been found : ";
        $SELECT = "SELECT Question,createdate,username From questions Where Question LIKE ? ";
        //Prepare statement
        $likeQuestion = '%'.$question.'%';

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $likeQuestion);
        $stmt->execute();
        $stmt->bind_result($question,$createdate,$username);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum!=0) 
        {
            while($stmt->fetch())
            {
                $questions[$question] = array($createdate,$username); 
            }
        }
        $stmt->close();
        
        $SELECTALL = "SELECT Question,createdate,username From questions"; 
        $stmt1 = $conn->prepare($SELECTALL);
        $stmt1->execute();
        $stmt1->bind_result($allquestion,$createdate1,$username1);
        $stmt1->store_result();
        $rnum1 = $stmt1->num_rows;
        if($rnum1!=0)
        {
            while($stmt1->fetch())
            {
                $allquestions[$allquestion] = array($createdate,$username); 
            }
        }
        $userinfo = array($message,$questions,$allquestions);
        echo json_encode($userinfo);
        $stmt1->close();
        $conn->close();
    }
} else {
 echo "All field are required";
}
die();
?>