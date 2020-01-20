<?php

session_start();
$arr = json_decode($_SESSION['json'], true);
$new['id'] = count($arr) + 1;
$new['task'] = $_POST['value'];
$new['complete'] = false;
array_push($arr, $new);
$_SESSION['json'] = json_encode($arr);
echo json_encode($new);
