import React from "react";
import './ParsedTextArea.css'
import { ParsedTextAreaProps } from "./types";
import Button from "@mui/material/Button";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ParsedTextArea = ({ pdfData, setPdfData }: ParsedTextAreaProps) => {
    const downloadTxtFile = () => {
        if(!pdfData?.text)
            return

        const element = document.createElement("a");
        const file = new Blob([pdfData.text],
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "pdf2text-converted.txt";
        document.body.appendChild(element);
        element.click();
        element.remove()
    }

    return <div className='parsedTextArea__container'>
        <textarea value={pdfData?.text} disabled className='parsedTextArea__textArea' placeholder='Parsed Text'/>

        <div className='parsedTextArea__actionButtonsContainer'>
            <Button
                className='parsedTextArea__button'
                variant={'contained'}
                color='primary'
                onClick={() => setPdfData(undefined)}
                startIcon={<ArrowBackIcon />}
            >
                Convert Another
            </Button>

            <Button
                className='parsedTextArea__button'
                variant={'contained'}
                color='success'
                onClick={downloadTxtFile}
                startIcon={<FileDownloadIcon />}
            >
                Download Text File
            </Button>
        </div>
    </div>
}


