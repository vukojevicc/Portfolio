<?php
require_once __DIR__ . '/../tabele/poruka.php';

$podaciPoruke = $_POST;
Poruka::unesiPoruku($podaciPoruke['ime'], $podaciPoruke['email'], $podaciPoruke['poruka']);
header('Location: ../index.php');
die();