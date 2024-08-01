import { request } from "../utilities/request";
const path = 'api/controllers/gestiones.php?';

export const httpGETsolicitud = async (ActiveOnly = false) => {
    const result = await request(`${path}get-solicitud=true&ActiveOnly=${ActiveOnly}`)
    return JSON.parse(result)
}

export const httpGETtipoSolicitud = async (ActiveOnly = false) => {
    const result = await request(`${path}get-tipo-solicitud=true&ActiveOnly=${ActiveOnly}`)
    return JSON.parse(result)
}

export const httpAddOrUpdateSolicitud = async (body) => {
    const result = await request(`${path}add-or-update-solicitud=true`, {
        method: 'POST',
        body,
    })
    return JSON.parse(result)
}

