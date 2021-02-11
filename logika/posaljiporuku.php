<?php
require_once __DIR__ . '/../tabele/poruka.php';
if(isset($_POST['submit']) && $_POST['submit'] == 'Send message'){
    $podaciPoruke = $_POST;
    $formErrors = array();
    if(!isset($podaciPoruke['ime'])){
        $formErrors[] = "'Name' field is required";
    }else{
        $ime = trim($podaciPoruke['ime']);
        if(empty($ime)){
            $formErrors[] = "'Name' field can't be empty";
        }
    }
    if(!isset($podaciPoruke['email'])){
        $formErrors[] = "'Email' field is required";
    }else{
        $email = trim($podaciPoruke['email']);
        if(empty($email)){
            $formErrors[] = "'Email' field can't be empty";
        }
        elseif(strpos($email, '@') < 1){
            $formErrors[] = "Invalid email format";
        }
    }
    if(!isset($podaciPoruke['poruka'])){
        $formErrors[] = "'Message' field is required";
    }else{
        if(empty($podaciPoruke['poruka'])){
            $formErrors[] = "'Message' field can't be empty";
        }
    }
    if(empty($formErrors)){
        $formErrors['success'] = 'Your message has been sent successfully!';
        Poruka::unesiPoruku($podaciPoruke['ime'], $podaciPoruke['email'], $podaciPoruke['poruka']);
    }
}
else{
    header('Location: ../index.php');
    die();
}

echo json_encode($formErrors);