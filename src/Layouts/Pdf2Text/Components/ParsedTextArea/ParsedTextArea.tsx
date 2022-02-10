import React from "react";
import './ParsedTextArea.css'
import Button from "@mui/material/Button";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ParsedTextAreaProps } from "./";
import { downloadTxtFile } from './'

export const ParsedTextArea = ({ pdfData, setPdfData }: ParsedTextAreaProps) => {
    return <div className='parsedTextArea__container'>
        <textarea value={pdfData?.text} disabled className='parsedTextArea__textArea' placeholder='Parsed text will appear here'/>

        <div className='parsedTextArea__actionButtonsContainer'>
            <Button
                className='parsedTextArea__button'
                variant={'contained'}
                color='primary'
                onClick={() => setPdfData(undefined)}
                startIcon={<ArrowBackIcon />}
                fullWidth
            >
                Convert Another
            </Button>

            <Button
                className='parsedTextArea__button'
                variant={'contained'}
                color='success'
                onClick={() => downloadTxtFile(pdfData)}
                startIcon={<FileDownloadIcon />}
                fullWidth
            >
                Download Text File
            </Button>
        </div>
    </div>
}


