import axios from 'axios'
import { ParsedPDFData } from "./";

export const uploadFile = async (file: File): Promise<ParsedPDFData> => {
    let formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(process.env.REACT_APP_API_BASE_URL + 'uploadPdf', formData )

    return response.data.pdfData
};
