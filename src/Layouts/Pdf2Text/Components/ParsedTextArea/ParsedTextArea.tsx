import React from "react";
import './ParsedTextArea.css'
import { ParsedTextAreaProps } from "./types";
import Button from "@mui/material/Button";

export const ParsedTextArea = ({ pdfData, setPdfData }: ParsedTextAreaProps) =>
    <div className='parsedTextArea__container'>
        <textarea value={pdfData?.text} disabled className='parsedTextArea__textArea' placeholder='Parsed Text'/>

        <Button
            className='parsedTextArea__button'
            variant={'contained'}
            color='success'
            onClick={() => setPdfData(undefined)}
        >
            Convert Another
        </Button>

    </div>

