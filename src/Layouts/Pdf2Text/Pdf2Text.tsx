import React from 'react';
import './Pdf2Text.css'
import Logo from './assets/logo.png'

export const Pdf2Text = () => {
  return (
      <div className='pdfToText'>
          <div className='topHeading'>
              <div className='topHeading__image'>
                  <img src={Logo} alt='logo' height='80px' width='80px'/>
              </div>
              <div>
                  <h2>PDF to Text</h2>
                  <p>Convert a PDF to a text file</p>
              </div>
          </div>
      </div>
  );
}
