<?php

  $mail = 'settimomarzo@gmail.com';

  include_once ('mail.class.php');
  $mail_credit = new mail('utf-8');
  $mail_credit -> To($mail);
  $mail_credit -> Subject('Заказ с сайта Samsung (менеджер)');
  $mail_credit -> Body(file_get_contents('manager.html'), 'html');
  $mail_credit -> Priority(3);
  $mail_credit -> Send();

  echo "Показывает исходный текст письма:<br><pre>", $mail_credit -> Get(), "</pre>";

  include_once ('mail.class.php');
  $mail_credit = new mail('utf-8');
  $mail_credit -> To($mail);
  $mail_credit -> Subject('Заказ с сайта Samsung (кредит)');
  $mail_credit -> Body(file_get_contents('credit.html'), 'html');
  $mail_credit -> Priority(3);
  $mail_credit -> Send();

  echo "Показывает исходный текст письма:<br><pre>", $mail_credit -> Get(), "</pre>";

  include_once ('mail.class.php');
  $mail_credit = new mail('utf-8');
  $mail_credit -> To($mail);
  $mail_credit -> Subject('Заказ с сайта Samsung (карта)');
  $mail_credit -> Body(file_get_contents('map.html'), 'html');
  $mail_credit -> Priority(3);
  $mail_credit -> Send();

  echo "Показывает исходный текст письма:<br><pre>", $mail_credit -> Get(), "</pre>";

?>