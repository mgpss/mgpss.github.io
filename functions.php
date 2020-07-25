<?php
    $mysqli=false;
	function connectDB () {
		global $mysqli;
		$mysqli = new mysqli ("localhost","root","","messeger.github"
		);
	}
	function closeDB () {
		global $mysqli;
		$mysqli->close ();
	}
?>