import React, { useState, useContext } from 'react';
import Loading from './Loading';
import { GestionContext } from '../context/GestionContext';
import { FaEdit } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { IoMdAddCircle } from "react-icons/io";
import { Input, Modal } from 'antd';
import FormGestiones from './FormGestiones';

export default function GridGestiones() {
    const [openModal, setOpenModal] = useState(false);
    const { solicitud, loading, GetAll } = useContext(GestionContext);
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');

    const columns = [
        { name: 'No.Solicitud' },
        { name: 'Titulo' },
        { name: 'Descripción' },
        { name: 'Estado' },
        { name: 'Opciones' },
    ];

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setData(null);
        GetAll();
    };

    const handleEdit = (values) => {
        setOpenModal(true);
        setData(values);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };


    const filtered = solicitud && solicitud.filter((client) =>
        client.titulo_solicitud.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div className="container mx-auto mt-8 px-4">
                <h1 className="text-2xl font-bold mb-4">Solicitudes</h1>
                <div className='flex justify-between my-5 text-center items-center'>
                    <div></div>
                    <div className='flex gap-5'>
                        <RxUpdate size={25} className='hover:text-slate-500 cursor-pointer' onClick={() => GetAll()} />
                        <Input.Search onChange={handleSearchChange}
                            placeholder="Buscar por titulo" />
                        <IoMdAddCircle size={30} className='hover:text-slate-500 cursor-pointer' onClick={() => handleOpen()} />
                    </div>
                    <div></div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        {loading && (<Loading />)}

                        <thead className="bg-gray-100">
                            <tr>
                                {columns.map((col, index) => (
                                    <th
                                        className="py-2 px-4 border-b text-left text-sm sm:text-base md:text-lg lg:text-xl"
                                        key={index}
                                    >
                                        {col.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length > 0 ? (
                                filtered.map((data, index) => (
                                    <tr key={index} className="hover:bg-gray-50 text-start" >
                                        <td className="py-2 px-4 border-b">
                                            {data.id_solicitud}
                                        </td>
                                        <td className="py-2 px-4 border-b text-start">
                                            {data.titulo_solicitud}
                                        </td>
                                        <td className="py-2 px-4 border-b text-start overflow-x-auto">
                                            {data.descripcion_solicitud}
                                        </td>
                                        <td className="py-2 px-4 border-b text-start">
                                            <span className={`${parseInt(data.estado) === 1 ? 'bg-green-600' : 'bg-red-600'} text-white px-2 py-1 rounded-md`}>{parseInt(data.estado) === 1 ? 'Activo' : 'Inactivo'}</span>
                                        </td>
                                        <td className="py-2 px-4 border-b text-start ">
                                            <FaEdit size={20} className='hover:text-slate-500 cursor-pointer' onClick={() => handleEdit(data)} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} className="py-2 px-4 text-center text-gray-400 text-xl">
                                        No hay datos disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                open={openModal}
                footer={null}
                onCancel={() => handleClose()}
                title={<div className='text-gray-800 text-lg'>{data ? 'Editar' : 'Crear'} gestion</div>}
            >
                <FormGestiones data={data} onClose={() => handleClose()} />
            </Modal>
        </>
    );
}
