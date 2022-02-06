import './uploadFile.css'
import { useDropzone, FileWithPath } from 'react-dropzone';
import PDFToText from './assets/pdftotext.png'
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LoopIcon from '@mui/icons-material/Loop';

export const UploadSection = () => {
    const {acceptedFiles, fileRejections, getRootProps, getInputProps} = useDropzone({
        accept: 'application/pdf',
        maxFiles: 1
    });

    const files = acceptedFiles.map((file: FileWithPath) => (
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
                            <h2>Drop your <strong>PDF</strong> file here or</h2>
                            <Button startIcon={<UploadFileIcon />}>
                                Choose File
                            </Button>
                        </div>
                    </div>
                </div>
                {
                    !!files.length &&
                    <aside>
                        <h4>Selected File</h4>
                        <ul>{files}</ul>
                    </aside>
                }

                {
                    !!fileRejections.length && <p>Couldn't upload last file</p>
                }

            </div>

            <div className='uploadSection__convertContainer'>
                <Button className='uploadSection__convertButton' variant={'contained'} color='success' disabled={!files.length} startIcon={<LoopIcon />}>
                    Convert
                </Button>
            </div>
        </div>
    )
}
