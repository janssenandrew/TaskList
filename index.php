<?php
require_once('init.php');
?>

<!DOCTYPE HTML>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>Task List</title>
</head>

<body>
  <h1 class='heading'>Task List App</h1>
  <div class="input-group mb-3">
    <input type='text' class="form-control" name='task' id='input' placeholder='Enter a task' />
    <div class="input-group-append">
      <button id='button' type='submit' name='add' class="btn btn-outline-secondary"> Add </button>
    </div>
  </div>

  <ul class='list-group list-group-flush' id='container'> </ul>

  <script src="handler.js"></script>
</body>

</html>