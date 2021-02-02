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
    <script src="https://kit.fontawesome.com/6daab8fd44.js" crossorigin="anonymous"></script>
</head>
<div class="overflow">

    <body>
        <header class="small-header header fixed" id="z-index">
            <div class="header-container" id="top">
                <img class="header-container-img" id="rotate-logo" src="imgs/logowhite.png" alt="logo">
                <?php include __DIR__ . '/partials/social-icons.php'; ?>
            </div>
        </header>
        <header class="main-header header">
            <div class="header-container">
                <img id="main-logo" class="header-container-img" src="" alt="logo">
                <ul class="navigation" id="main-menu">
                    <?php
                    include __DIR__ . '/partials/main-menu.php';
                    ?>
                    <div class="menu-btn">
                        <div class="menu-btn-burger"></div>
                    </div>
                </ul>
            </div>
            <aside class="side-menu">
                <ul>
                    <?php
                    include __DIR__ . '/partials/main-menu.php';
                    ?>
                </ul>
            </aside>
        </header>
        <div id="particles-js">
        </div>
        <main>
            <div class="main-container-technologies">
                <div class="technologies" id="technologies">
                    <div class="flex-heading">
                        <div class="technologies-heading">front end focused with <br>full stack experience</div>
                    </div>
                    <div class="about-me-grid">
                        <div class="about-me-section fade">
                            <h2>
                                About me
                            </h2>
                            <p>
                                Hi! my name is Aleksandar, tenacious programmer eager for new knowledge in web development industry. I love witing JavaScript and PHP while randomly switching channels on <a href="https://www.youtube.com/watch?v=BD_guK9b64k" target="_blank">spinnin' tv live</a>.
                            </p>
                            <p>
                                When not working, I like to research for new, better and easier ways to implement my programming ideas, play basketball and enjoy life.
                            </p>
                        </div>
                        <div class="about-me-section about-me-section-img fade"><img src="imgs/me.jpeg" alt="My image"></div>
                        <div class="about-me-section fade">
                            <?php include __DIR__ . '/partials/basic-info.php'; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="languages">
                <?php include __DIR__ . '/partials/languages.php'; ?>
            </div>
            <section class="projects" id="projects">

            </section>
            <footer class="contact" id="contact">
                <div class="footer-container">
                    <form action="logika/posaljiporuku.php" method="post">
                        <div class="inputBox">
                            <input type="text" name="ime" placeholder="ime">
                        </div>
                        <div class="inputBox">
                            <input type="email" name="email" placeholder="imejl">
                        </div>
                        <div class="inputBox">
                            <textarea name="poruka" id="" cols="30" rows="10" placeholder="poruka"></textarea>
                        </div>
                        <div class="inputBox">
                            <label for="save_data">Save data</label>
                            <input type="checkbox" name="save_data" id="save_data" value="true">
                        </div>
                        <div class="inputBox">
                            <button type="submit">Posalji poruku</button>
                        </div>
                    </form>
                </div>
                <p class="copyrights">
                    2021. copyrights aleksandar &copy;. all rights reserved
                </p>
            </footer>
            <a href="#particles-js" id="jump-to-top" class="anchor-scroll">
                <i class="fas fa-rocket fa-2x"></i>
            </a>
            <!-- importing particles library -->
            <script src="js/particles.js"></script>
            <script src="js/app.js"></script>
            <!-- importing smooth scroll jQuery plugin -->
            <script src="js/jquery-scroll/jquery.anchorScroll.js"></script>
        </main>
    </body>
</div>

</html>