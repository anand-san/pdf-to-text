import React from 'react'
import './uploadFile.css'
import { useDropzone, FileWithPath } from 'react-dropzone';
import PDFToText from './assets/pdftotext.png'
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LoopIcon from '@mui/icons-material/Loop';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadFile } from '../../'
import { UploadSectionProps } from "./";

export const UploadSection = ({ setPdfData }: UploadSectionProps) => {
    const [convertInProgress, setConvertInProgress] = React.useState<boolean>(false)

    const {acceptedFiles, fileRejections, getRootProps, getInputProps} = useDropzone({
        accept: 'application/pdf',
        maxFiles: 1
    });

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleConvert = async () => {
        setConvertInProgress(convertInProgress => !convertInProgress)
        const parsedFile = await uploadFile(acceptedFiles[0])
        setConvertInProgress(convertInProgress => !convertInProgress)
        setPdfData(parsedFile)
    }

    return (
        <div className='uploadSection'>
        <div className='uploadSection__container'>
            <div className='uploadSection__fileUploadWrapper'>
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
        </div>

    <div className='uploadSection__convertContainer'>
        <Button
            className='uploadSection__convertButton'
            variant={'contained'}
            color='primary'
            disabled={!files.length || convertInProgress}
            startIcon={convertInProgress ? <CircularProgress size={18} color={'inherit'}/>  : <LoopIcon />}
            onClick={handleConvert}
        >
            Convert
        </Button>
    </div>
    </div>
    )
}
