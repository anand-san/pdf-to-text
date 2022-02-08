import React from "react";
import { ParsedPDFData } from "../../";

export interface UploadSectionProps {
    setPdfData: React.Dispatch<React.SetStateAction<ParsedPDFData | undefined>>
}
