<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aleksandar | Front-End Engineer</title>
    <link rel="icon" href="imgs/logo.png">
    <style>
        <?php require_once __DIR__ . '/css/style.css' ?>
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        <?php require_once __DIR__ . '/js/main.js'; ?>
    </script>
</head>

<div class="overflow">
    <body>
        <header class="small-header header" id="z-index">
            <div class="header-container">
                <img class="header-container-img" id="rotate-logo" src="imgs/logowhite.png" alt="logo">
                <ul class="navigation">
                    <a href="https://stackoverflow.com/users/13468559/aleksandar" target="_blank">
                        <li class="social-title">
                            <img class="social" id="stack" src="imgs/st.png" alt="">
                            <span class="social-title-text">Stack Overflow</span>
                        </li>
                    </a>
                    <a href="https://github.com/vukojevicc/" target="_blank">
                        <li class="social-title">
                            <img class="social" id="git" src="imgs/github1.png" alt="">
                            <span class="social-title-text">GitHub</span>
                        </li>
                    </a>
                    <a href="tel:+381603388389">
                        <li class="social-title">
                            <img class="social" id="phone" src="imgs/phone.png" alt="">
                            <span class="social-title-text">Phone</span>
                        </li>
                    </a>
                    <a href="mailto:aleksandar.vukojevicc@gmail.com">
                        <li class="social-title">
                            <img class="social" id="mail" src="imgs/email.png" alt="">
                            <span class="social-title-text">Email</span>
                        </li>
                    </a>
                    <a href="#" target="_blank">
                        <li class="social-title">
                            <img class="social" id="link" src="imgs/linked.png" alt="">
                            <span class="social-title-text">LinkedIn</span>
                        </li>
                    </a>
                </ul>
            </div>
        </header>
        <header class="main-header header">
            <div class="header-container">
                <img class="header-container-img" src="imgs/logoex1.png" alt="logo">
                <ul class="navigation" id="main-menu">
                    <a href="#">
                        <li>home</li>
                    </a>
                    <a href="#">
                        <li>about me</li>
                    </a>
                    <a href="#">
                        <li>projects</li>
                    </a>
                    <a href="#">
                        <li>contact me</li>
                    </a>
                </ul>
            </div>
        </header>
        <div id="particles-js">
            <div id="particles-info">
                Click on area to add particles! <sup>&times;</sup>
            </div>
        </div>
        <main>
            <div class="technologies">
                <div>
                    <div>front end focused with <br>full stack experience</div>
                </div>
            </div>
            <script src="js/particles.js"></script>
            <script src="js/app.js"></script>
        </main>
    </body>
</div>
</html>