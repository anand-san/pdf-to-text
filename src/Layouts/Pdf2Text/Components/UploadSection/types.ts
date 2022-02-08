import React from "react";
import { ParsedPDFData } from "../../";

export interface UploadSectionProps {
    setParsedFileData: React.Dispatch<React.SetStateAction<ParsedPDFData | undefined>>
}
