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
            <div id="particles-info">
                Click on area to add particles! <sup>&times;</sup>
            </div>
        </div>
        <main>
            <div class="main-container">
                <div class="technologies" id="technologies">
                    <div class="flex-heading">
                        <div class="technologies-heading">front end focused with <br>full stack experience</div>
                    </div>
                    <div class="about-me-grid">
                        <div class="about-me-section about-me-section-img fade fade1"><img src="imgs/me.jpeg" alt="My image"></div>
                        <div class="about-me-section fade fade2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto, sunt officiis pariatur beatae magni! Dolore magnam similique consequuntur cupiditate, quidem laudantium unde delectus voluptate rerum! Dolores ipsam unde commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur. Velit corporis autem, aliquam nam esse repudiandae error quam nostrum, quaerat tenetur dolorum id magnam repellendus deleniti maiores. Quisquam, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quasi a! Rem delectus, quibusdam ipsum, neque quisquam ullam omnis id inventore sunt impedit tempore sint saepe eos ea. Temporibus, eum?</div>
                        <div class="about-me-section fade fade3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto, sunt officiis pariatur beatae magni! Dolore magnam similique consequuntur cupiditate, quidem laudantium unde delectus voluptate rerum! Dolores ipsam unde commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non laudantium iste corporis beatae debitis eius fugit repudiandae quis voluptates distinctio quisquam autem molestias, neque atque aliquid impedit minima repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fuga! Nostrum veritatis eligendi sequi fuga sapiente modi. Reprehenderit voluptatem consequuntur nobis, illum facilis molestias asperiores quaerat iusto et, excepturi tempora?</div>
                    </div>
                </div>
                <script src="js/particles.js"></script>
                <script src="js/app.js"></script>
            </div>
        </main>
    </body>
</div>

</html>