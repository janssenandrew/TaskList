<?php
session_start();
$file = "tasks.json";
$_SESSION['json'] = file_get_contents($file);
