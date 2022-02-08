import TextField from "@mui/material/TextField";
import React from "react";
import './ParsedTextArea.css'
import { ParsedTextAreaProps } from "./types";
import Button from "@mui/material/Button";

export const ParsedTextArea = ({ pdfData, setPdfData }: ParsedTextAreaProps) =>
    <div className='parsedTextArea__container'>
        <TextField
            id="outlined-multiline-flexible"
            label="Parsed Text"
            multiline
            maxRows={20}
            minRows={8}
            value={pdfData?.text}
            fullWidth
        />

        <Button
            className='parsedTextArea__button'
            variant={'contained'}
            color='success'
            onClick={() => setPdfData(undefined)}
        >
            Convert Another
        </Button>

    </div>

