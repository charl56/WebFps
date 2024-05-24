import axios from 'axios';

export const sendRequest = async (methodType, route, data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (methodType === 'GET' || methodType === 'POST') {
            config.method = methodType;
        } else {
            throw new Error(`Unsupported method type: ${methodType}`);
        }

        const backendAddress = import.meta.env.VITE_BACK_URL || "http://127.0.0.1:3000/"     // Addresse du back pour les requêtes

        if (data) config.data = data;
        const response = await axios(backendAddress + route, config);

        return {
            status: "success",
            data: response.data
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response
        };
    }
};
