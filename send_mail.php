<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your Google reCAPTCHA secret key
    $secretKey = "6LeDF_kpAAAAABY2j37G6v1ilBocnmOvyLfmrzNn";
    // reCAPTCHA response from the form
    $captcha = $_POST['g-recaptcha-response'];

    // Verify the reCAPTCHA response
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = array(
        'secret' => $secretKey,
        'response' => $captcha
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);

    // Check if reCAPTCHA verification was successful
    if ($result->success) {
        // Proceed with form handling
        $name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $rating = filter_var($_POST['rating'], FILTER_SANITIZE_NUMBER_INT);
        $opinion = filter_var($_POST['opinion'], FILTER_SANITIZE_SPECIAL_CHARS);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format";
            exit;
        }

        $to = "J.Gross@JGroFabricationLLC.com";
        $subject = "New Opinion Submission from $name";
        $message = "
            <html>
            <head>
                <title>Opinion Submission</title>
            </head>
            <body>
                <h2>New Opinion Submission</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Rating:</strong> $rating</p>
                <p><strong>Opinion:</strong> $opinion</p>
            </body>
            </html>
        ";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: <$email>" . "\r\n";

        if (mail($to, $subject, $message, $headers)) {
            header("Location: thank_you.html"); // Redirect to a thank-you page
            exit;
        } else {
            echo "Failed to send message.";
        }
    } else {
        // CAPTCHA validation failed
        echo "CAPTCHA validation failed. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
