import React, { useEffect } from 'react';
import { Form, Input, Switch, Button, Select, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useContext } from 'react';
import { GestionContext } from '../context/GestionContext';
import { httpAddOrUpdateSolicitud } from '../services/gestiones-services';

export default function FormGestiones({ data, onClose, resetForm }) {
    const { tipoSolicitud } = useContext(GestionContext)
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            titulo_solicitud: '',
            descripcion_solicitud: '',
            estado: false,
        }
    });

    useEffect(() => {
        if (data) {
            reset({
                titulo_solicitud: data.titulo_solicitud || '',
                descripcion_solicitud: data.descripcion_solicitud || '',
                estado: data.estado || false,
                id_tipo_solicitud: data.id_tipo_solicitud || null,
            });
        } else {

            reset({
                titulo_solicitud: '',
                descripcion_solicitud: '',
                estado: false,
            });
        }
    }, [data, reset]);



    const onSubmit = async (formData) => {
        const dataSend = {
            ...formData,
            estado: formData.estado ? 1 : 0,
            id_solicitud: data?.id_solicitud ? parseInt(data.id_solicitud) : 0,
        }
        await httpAddOrUpdateSolicitud(dataSend).then((res) => {
            if (!res.err) {
                message.success(res.message);
            } else {
                message.error(res.message);
            }
        }).finally(() => onClose())
    };



    return (
        <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item label="Tipo de Solicitud" validateStatus={errors.id_tipo_solicitud ? 'error' : ''} help={errors.id_tipo_solicitud?.message}>
                <Controller
                    name="id_tipo_solicitud"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} defaultValue={field.value}>
                            {tipoSolicitud.map((opt) => (
                                <Select.Option key={opt.id_tipo_solicitud} value={opt.id_tipo_solicitud}>
                                    {opt.tipo_solicitud}
                                </Select.Option>
                            ))}

                        </Select>
                    )}
                    rules={{ required: 'Tipo de solicitud es requerido' }}
                />
            </Form.Item>

            <Form.Item label="Título" validateStatus={errors.titulo_solicitud ? 'error' : ''} help={errors.titulo_solicitud?.message}>
                <Controller
                    name="titulo_solicitud"
                    control={control}
                    render={({ field }) => <Input {...field} maxLength={99} />}
                    rules={{ required: 'Título es requerido' }}
                />
            </Form.Item>


            <Form.Item label="Descripción" validateStatus={errors.descripcion_solicitud ? 'error' : ''} help={errors.descripcion_solicitud?.message}>
                <Controller
                    name="descripcion_solicitud"
                    control={control}
                    render={({ field }) => <Input.TextArea {...field} maxLength={99} />}
                    rules={{ required: 'Descripción es requerida' }}
                />
            </Form.Item>

            <Form.Item label="Estado">
                <Controller
                    name="estado"
                    control={control}
                    render={({ field }) => <Switch {...field} checked={field.value} onChange={field.onChange} />}
                />
            </Form.Item>


            <Form.Item >
                <div className='flex  justify-end  gap-5'>
                    <Button type="primary" htmlType="submit">Enviar</Button>
                </div>
            </Form.Item>

        </Form>
    );
}
