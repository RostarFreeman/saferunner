<?php

switch (@parse_url($_SERVER['REQUEST_URI'])['path']) {
    case '/':
        require_once __DIR__.'/entry_form.php';
        break;
    case '/makeroute.php':
        break;
    case '/test.php':
        require_once __DIR__.'/test.php';
        break;
    default:
        http_response_code(404);
        break;
}

?>