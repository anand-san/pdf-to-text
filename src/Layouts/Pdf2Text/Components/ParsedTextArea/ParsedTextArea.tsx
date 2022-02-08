import TextField from "@mui/material/TextField";
import React from "react";
import './ParsedTextArea.css'
import { ParsedTextAreaProps } from "./types";

export const ParsedTextArea = ({ pdfData }: ParsedTextAreaProps) => <div className='parsedTextArea__container'>
    <TextField
        id="outlined-multiline-flexible"
        label="Parsed Text"
        multiline
        maxRows={20}
        minRows={8}
        value={pdfData?.text}
        fullWidth
    />
</div>

