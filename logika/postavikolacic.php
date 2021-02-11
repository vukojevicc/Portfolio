<?php
setcookie('name', $_POST['name'], time()+60*60*24*365, '/');
setcookie('email', $_POST['email'], time()+60*60*24*365, '/');
