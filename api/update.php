<?php

session_start();
$arr = json_decode($_SESSION['json'], true);
$arr[$_POST['id'] - 1]['complete'] = !$arr[$_POST['id'] - 1]['complete'];
$_SESSION['json'] = json_encode($arr);
echo ($arr[$_POST['id'] - 1]['complete']) ? 'true' : 'false';
