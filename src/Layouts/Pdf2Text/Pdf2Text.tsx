import React from 'react';
import { UploadSection } from "./Components/UploadSection";
import { HeadingSection } from "./Components/HeadingSection";
import './Pdf2Text.css'
import { ParsedTextArea } from "./Components/ParsedTextArea";
import { ParsedPDFData } from "./";

export const Pdf2Text = () => {
    const [parsedFileData, setParsedFileData] = React.useState<ParsedPDFData>()

    return (
      <div className='pdfToText'>
          <HeadingSection />
          <UploadSection setParsedFileData={setParsedFileData} />
          <ParsedTextArea pdfData={parsedFileData}/>
      </div>
  );
}
