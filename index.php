<?php
?>

<!DOCTYPE HTML>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="handler.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>Task List</title>
</head>

<body>
  <h1 class='heading'>Task List App</h1>
  <div>
    <input type='text' name='task' id='input' placeholder='Enter a task' />
    <button id='button' type='submit' name='add'> Add </button>
  </div>

  <ul id='container'> </ul>
</body>

</html>