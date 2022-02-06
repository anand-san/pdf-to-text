import React from 'react';
import { UploadSection } from "./Components/UploadSection";
import { HeadingSection } from "./Components/HeadingSection";
import './Pdf2Text.css'

export const Pdf2Text = () => {
  return (
      <div className='pdfToText'>
          <HeadingSection />
          <UploadSection />
      </div>
  );
}
