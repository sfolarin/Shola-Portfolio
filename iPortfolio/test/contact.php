<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\OAuth;

require 'vendor/autoload.php';

// Email credentials
$emailAddress = 'sfolarin@aust.edu.ng';
$emailPassword = '40688@aust';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data (example with htmlspecialchars)
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone_number']);
    $message = htmlspecialchars($_POST['message']);

    // Create PHPMailer instance
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email credentials (Gmail)
        $mail->Username = $emailAddress;
        $mail->Password = $emailPassword;

        // Sender and recipient
        $mail->setFrom($email, "$firstName $lastName");
        $mail->addAddress($emailAddress, 'Shola Folarin'); // Replace with your email and name

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $firstName $lastName\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

        // Send email
        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo "Failed to send message. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
