<?php

session_start();
$array = array();
$completed = 0;
$arr = json_decode($_SESSION['json'], true);
array_push($array, (count($arr)));
for ($i = 0; $i < count($arr); $i++) {
  if ($arr[$i]['complete'])
    $completed++;
}
array_push($array, $completed);
echo json_encode($array);
