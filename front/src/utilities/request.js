const dev = 'http://localhost:8080/gestiones/back/';


export const request = async (path, options = {}) => {
    try {
        const PATH = dev + path;
        const fetchOptions = {
            method: options.method || 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                ...(options.headers || {}),
            },
            body: options.body ? new URLSearchParams(DataTransform(options.body)).toString() : null,
        };

        const response = await fetch(PATH, fetchOptions);

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la petición:', error.message);
        throw error;
    }
};



function DataTransform(obj) {
    const transformedData = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            transformedData[key] = typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key];
        }
    }
    return transformedData;
}