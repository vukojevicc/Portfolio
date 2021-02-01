<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../includes/Database.php';

class Poruka{
    public $id;
    public $ime;
    public $email;
    public $poruka;

    public static function unesiPoruku($ime, $email, $poruka){
        $db = Database::getInstance();
        $db->insert('Poruka', "INSERT INTO `poruke` (`ime`, `email`, `poruka`) VALUES (:ime, :email, :poruka);", [
            ':ime'=>$ime,
            ':email'=>$email,
            ':poruka'=>$poruka
        ]);
    }
}