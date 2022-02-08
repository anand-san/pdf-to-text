import { ParsedPDFData } from "../../";
import React from "react";

export interface ParsedTextAreaProps {
    pdfData: ParsedPDFData | undefined,
    setPdfData: React.Dispatch<React.SetStateAction<ParsedPDFData | undefined>>
}
