<!DOCTYPE html>
    <html lang="en">
<head>
    <link rel="stylesheet" href="style_php.css">
    <meta charset="UTF-8">
    <title>Forms</title>
</head>
<body>

<?php

$name = $_GET["fullName"];
$email = $_GET["mail"];

echo "<h1>Well done! ".$name." Your have the ability to succeed in the degree. We will send you registration forms to the address provided ".$email."</h1><br>";

?>

</body>
</html>
