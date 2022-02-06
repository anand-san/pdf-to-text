import React from "react";
import Logo from "../../assets/logo.png";
import './headingSection.css'

export const HeadingSection = () => {
    return <div className='pdf2text__heading'>
        <div className='pdf2text__heading__image'>
            <img src={Logo} alt='logo' height='80px' width='80px'/>
        </div>
        <div>
            <h2>PDF to Text</h2>
            <p>Convert a PDF to a text file</p>
        </div>
    </div>
}
