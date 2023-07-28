import { toast } from "react-hot-toast";


export const fetchPdf = async (apiUrl) => {
    try {
        const response = await fetch(apiUrl);
        toast.success('PDF loaded successfully');
        return response.arrayBuffer();
    } catch (error) {
        toast.error('Something went wrong!');
    }
}

export const uploadPdf = async (apiUrl, data) => {
    try {
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: data,
        })
        response = await response.json();

        toast.success(response.message);
        return response;
    } catch (error) {
        toast.error('Something went wrong!');
        return null;
    }
}