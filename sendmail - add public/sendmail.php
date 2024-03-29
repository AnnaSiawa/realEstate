<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail->setFrom('agentstvo-etalon32@agentstvo-etalon32.ru'); // от кого будет уходить письмо?
$mail->addAddress('etalon76@bk.ru');     // Кому будет уходить письмо
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка с сайта';
$mail->Body = '' . $name . ' ' . ' оставил(a) сообщение, номер телефона: ' . $phone . '<br>Сообщение пользователя: ' . $message;

if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
