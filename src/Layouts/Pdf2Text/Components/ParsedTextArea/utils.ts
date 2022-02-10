import { ParsedPDFData } from "../../types";

export const downloadTxtFile = (pdfData: ParsedPDFData | undefined) => {
    if(!pdfData?.text)
        return false

    const element = document.createElement("a");
    const file = new Blob([pdfData.text],
        {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "pdf2text-converted.txt";
    document.body.appendChild(element);
    element.click();
    element.remove()

    return true
}
