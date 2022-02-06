import './uploadFile.css'
import { useDropzone } from 'react-dropzone';
import PDFToText from './assets/pdftotext.png'

export const UploadSection = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map((file: File | any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className='uploadSection'>
            <div className='uploadSection__wrapper'>
                <div {...getRootProps({className: 'dropzone'})}>
                    <div className='uploadSection__contents'>
                        <input {...getInputProps()} />
                        <img src={PDFToText} alt={'pdftotext'} height={110} width={80}/>
                        <div className='uploadSection__content_actions'>
                            <h2>Drop your file here or</h2>
                            <button>Choose File</button>
                        </div>

                    </div>
                </div>
                {
                    !!files.length &&
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                }
            </div>
        </div>
    )
}
