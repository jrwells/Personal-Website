<?php

$code = $_GET['code'];
$error_title = "";

switch($code) {
    # "400 - Bad Request"
    case 400:
    $error_code = "400 - Bad Request";
    $explanation = "What's that?";
    break;

    # "401 - Unauthorized"
    case 401:
    $error_code = "401 - Unauthorized";
    $explanation = "This isn't the page you're looking for.";
    break;

    # "403 - Forbidden"
    case 403:
    $error_code = "403 - Forbidden";
    $explanation = "This isn't the page you're looking for.";
    break;

    # "404 - Not Found"
    case 404:
    $error_code = "404 - Page Not Found";
    $explanation = "There's nothing here.";
    break;

    # "500 - Internal Server Error"
    case 500:
    $error_code = "500 - Internal Server Error";
    $explanation = "It's not you. It's us. We're sorry.";
    break;

    default:
    $error_code = strval($code);
    $error_title = $error_code." Error";
    $explanation = "Something went wrong.";
}

?>

<!DOCTYPE html>
<head>
    <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="octicons/octicons.css">
    <title><?php echo(empty($error_title) ? $error_code : $error_title); ?></title>
</head>
<body>
    <section id="error" class="content-section text-center">
        <div id="content">
            <div id="row">
                <div class="col-md-8 col-md-offset-2">
                    <h4><?php echo($error_code); ?></h4>
                    <h1><?php echo($explanation); ?></h1>
                </div>
            </div>
        </div>
    </section>
</body>
</html>