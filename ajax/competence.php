
<?php

require_once '../inc/config.inc.php';
require_once '../classes/dbhandler.class.php';
require_once '../classes/db.class.php';
require_once '../classes/question.class.php';
require_once '../classes/hashtag.class.php';
require_once '../classes/profile.class.php';

DBHandler::initDB();

if(isset($_POST["newCompetence"]){
    $newComp = $_POST["newCompetence"];
} else {
    die("query string missing");
}
