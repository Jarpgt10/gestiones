/*
    Alejandro Rivas
    Creacion de catalogo tipo solicitudes 
    31/07/2024
*/
INSERT INTO `gestiones`.`tipo_solicitud` (`tipo_solicitud`) VALUES ('Capacitacion');
INSERT INTO `gestiones`.`tipo_solicitud` (`tipo_solicitud`) VALUES ('Nuevo ingreso');
INSERT INTO `gestiones`.`tipo_solicitud` (`tipo_solicitud`) VALUES ('Cambio de equipo');

INSERT INTO `gestiones`.`solicitud` (`id_tipo_solicitud`, `titulo_solicitud`, `descripcion_solicitud`) VALUES ('1', 'Nueva Capacitacion', 'Detalle de la nueva capacitacion que se creara');
