<?php

$_DIR = explode('api', __DIR__)[0];
date_default_timezone_set('America/Guatemala');
require_once $_DIR . 'config/helpers.php';
require_once $_DIR . 'api/class/mysql.php';
require_once $_DIR . 'api/models/Gestiones.php';

getHeader();

$conn = new Mysql();
$_model = new Gestiones($conn);

$activeOnly = $_GET['ActiveOnly'] == 'true' ? 1 : 0;

if (isset($_GET['get-solicitud'])) {
    $res = $_model->getSolicitud($activeOnly);
}

if (isset($_GET['get-tipo-solicitud'])) {
    $res = $_model->getTipoSolicitud($activeOnly);
}

if (isset($_GET['add-or-update-solicitud'])) {
    if ($_model->addOrUpdateSolicitud($_POST)) {
        $res = [
            'err' => false,
            'message' => 'Realizado con exito',
        ];
    } else {
        $res = [
            'err' => false,
            'message' => 'Error al realizar la accion',
        ];
    }
}

$res = json_encode($res);
echo json_encode($res);
$conn->db_close();
?>
