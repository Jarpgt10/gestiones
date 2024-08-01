DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addOrUpdateSolicitud`(
    IN p_id_solicitud INT,
    IN p_id_tipo_solicitud INT,
    IN p_titulo_solicitud VARCHAR(100),
    IN p_descripcion_solicitud VARCHAR(100),
    IN p_estado INT
)
BEGIN
    IF p_id_solicitud > 0 THEN
        UPDATE solicitud
        SET 
			id_tipo_solicitud = p_id_tipo_solicitud,
			titulo_solicitud = p_titulo_solicitud,
			descripcion_solicitud = p_descripcion_solicitud,
			estado = p_estado
        WHERE
            id_solicitud = p_id_solicitud;
    ELSE
        INSERT INTO solicitud (id_tipo_solicitud,titulo_solicitud,descripcion_solicitud)
        VALUES (p_id_tipo_solicitud , p_titulo_solicitud, p_descripcion_solicitud);
    END IF;
END$$
DELIMITER ;
