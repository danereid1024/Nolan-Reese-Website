<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    if (!filter_var($mailFromm, FILTER_VALIDATE_EMAIL)) {
        $error_msg = "Please enter a valid email address.";

    }
    $message = $_POST['message'];


    $mailTo = "danereid1024@icloud.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.",\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>
