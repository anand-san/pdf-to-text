import axios from 'axios'
import { ParsedPDFData } from "./";

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://6mosdmxik3.execute-api.us-east-1.amazonaws.com/dev/' : 'http://localhost:4000/'

export const uploadFile = async (file: File): Promise<ParsedPDFData> => {
    let formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(BASE_URL + 'upload', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })

    return response.data.pdfData
};
