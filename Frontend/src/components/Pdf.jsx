
import { PDFDocument } from 'pdf-lib'
import { useState, useRef } from 'react';
import InputField from './InputField';
import './pdf.css'
import { getPdfInputFields } from '../utils/getInputFields';
import { fetchPdf, uploadPdf } from '../apis/pdfApis';


export const Pdf = () => {
    const [url, setUrl] = useState(null);
    const [inputs, setInputs] = useState([]);     
    const ref = useRef(null);


    const loadPdf = async () => {
        const pdfData = await fetchPdf(import.meta.env.VITE_API_URL);

        const doc = await PDFDocument.load(pdfData);
        
        ref.current = doc;
        saveAndRender(doc);
    }

    const saveAndRender = async (pdfDoc) => {

        const inputFieldData = getPdfInputFields(ref.current);
        setInputs([...inputFieldData]);
        const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
        
        setUrl(pdfDataUri);
    }

    const saveUpdate = async () => {
        const pdfBytes = await ref.current.save();

        const formData = new FormData();

        formData.append('file', new Blob([pdfBytes], { type: 'application/pdf' }));
        
        let response = await uploadPdf(import.meta.env.VITE_API_URL, formData);
    }

    const textUpdate = async (e, name) => {
        const value = e.target.value;
        const form = ref.current.getForm();
        const field = form.getTextField(name);
        field.setText(value);

        const newInputs = inputs.map((inp) => {
            if(inp.name === name){
                inp.value = value;
            }
            return inp;
        })
        setInputs([...newInputs]);

        const pdfDataUri = await ref.current.saveAsBase64({ dataUri: true });
        setUrl(pdfDataUri);
    }

    const dropDownUpdate = async (e, name) => {
        const value = e.target.value;

        const form = ref.current.getForm();
        const field = form.getDropdown(name);
        field.select(value);

        const newInputs = inputs.map((inp) => {
            if(inp.name === name){
                inp.value[0] = value;
            }
            return inp;
        })
        setInputs(newInputs);

        const pdfDataUri = await ref.current.saveAsBase64({ dataUri: true });
        setUrl(pdfDataUri);
    }

    const radioUpdate = async (e, name, option) => {

        const form = ref.current.getForm();
        const field = form.getRadioGroup(name);
        
        field.select(option);

        const newInputs = inputs.map((inp) => {
            if(inp.name === name){
                inp.value = option;
            }
            return inp;
        })
        setInputs(newInputs);

        const pdfDataUri = await ref.current.saveAsBase64({ dataUri: true });
        setUrl(pdfDataUri);
    }

    return (
        <div id="container">
            <div id="btnDiv">
                <button onClick={ loadPdf }>Load</button>
                <button onClick={ saveUpdate }>Save</button>
            </div>

            <div id="box">
                <div className='myFrame'>
                    { inputs[0] && inputs.map((inp) => {
                        return <InputField key={inp.name} {...inp} textUpdate={textUpdate} dropDownUpdate={dropDownUpdate} radioUpdate={radioUpdate}  />
                    })}
                </div>
                { url && 
                    <iframe className="myFrame"
                        title="PDF Viewer"
                        src={url} 
                    />
                }
            </div>

        </div>
    )
}