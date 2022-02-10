import { downloadTxtFile } from './'
import {ParsedPDFData} from "../../types";

Object.defineProperty(URL, 'createObjectURL', {
    writable: true,
    value: jest.fn()
})

describe('#ParsedTextArea', () => {
    it('returns false if valid pdfData is not passed', () => {
        const downloadText = downloadTxtFile(undefined)
        expect(downloadText).toBeFalsy()
    })


    it('returns true if valid pdfData is passed', () => {
        const pdfData: ParsedPDFData = {
            "numpages":1,
            "numrender":1,
            "info": "",
            "metadata":null,
            "text":"\n\nTest",
            "version":"v1.10.100"
        }
        const downloadText = downloadTxtFile(pdfData)
        expect(downloadText).toBeTruthy()
    })
})

