import { createContext, useEffect, useState } from "react";
import { httpGETsolicitud, httpGETtipoSolicitud } from "../services/gestiones-services";


export const GestionContext = createContext();

export const GestionState = (props) => {
    const [loading, setLoading] = useState(false);
    const [solicitud, setSolicitud] = useState([]);
    const [tipoSolicitud, setTipoSolicitud] = useState([]);




    useEffect(() => {
        GetAll();
    }, [])

    const GetAll = async () => {
        setLoading(true);
        httpGETsolicitud().then((res) => setSolicitud(res));
        await httpGETtipoSolicitud().then((res) => setTipoSolicitud(res)).finally(() => setLoading(false));
    }


    return (
        <GestionContext.Provider
            value={{ solicitud, tipoSolicitud, loading, setLoading, GetAll }}
        >
            {props.children}
        </GestionContext.Provider>
    );
};
