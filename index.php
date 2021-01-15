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
                <?php include __DIR__ . '/partials/social-icons.php'; ?>
            </div>
        </header>
        <header class="main-header header">
            <div class="header-container">
                <img id="main-logo" class="header-container-img" src="" alt="logo">
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
                    <a href="#">
                        <div class="li">
                            <div class="menu-btn">
                                <div class="menu-btn-burger"></div>
                            </div>
                        </div>
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