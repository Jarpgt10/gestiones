<?php

require_once 'Utils.php';
class Gestiones
{
    public function __construct($conexion)
    {
        $this->_CONN = $conexion;
    }

    public function getSolicitud(int $activeOnly)
    {
        $WHERE = $activeOnly > 0 ? 'WHERE estado = 1' : '';
        $arr = [];
        $strQuery = "SELECT * FROM solicitud $WHERE;";
        $qTmp = $this->_CONN->db_consulta($strQuery);

        while ($rTmp = $this->_CONN->db_fetch_object($qTmp)) {
            $arr[] = $rTmp;
        }

        return $arr;
    }

    public function getTipoSolicitud(int $activeOnly)
    {
        $WHERE = $activeOnly > 0 ? 'WHERE estado = 1' : '';
        $arr = [];
        $strQuery = "SELECT * FROM tipo_solicitud $WHERE;";
        $qTmp = $this->_CONN->db_consulta($strQuery);
        while ($rTmp = $this->_CONN->db_fetch_object($qTmp)) {
            $arr[] = $rTmp;
        }

        return $arr;
    }

    public function addOrUpdateSolicitud(array $data)
    {
        $data = $this->FormData($data);
        $strQuery = "CALL addOrUpdateSolicitud({$data['id_solicitud']},{$data['id_tipo_solicitud']},{$data['titulo_solicitud']},{$data['descripcion_solicitud']},{$data['estado']})";

        return $this->_CONN->db_consulta($strQuery);
    }

    private function FormData($data)
    {
        $data['titulo_solicitud'] = Utils::validateField(
            $data['titulo_solicitud']
        );
        $data['descripcion_solicitud'] = Utils::validateField(
            $data['descripcion_solicitud']
        );
        $data['estado'] = Utils::validateId($data['estado']);
        $data['id_solicitud'] = Utils::validateId($data['id_solicitud']);
        $data['id_tipo_solicitud'] = Utils::validateId(
            $data['id_tipo_solicitud']
        );

        return $data;
    }
}
