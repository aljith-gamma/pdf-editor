
/**
 * This functions is used to extract the input fields inside the pdf and it returns the fields along with its data related to it. 
 * @param {object} pdfDoc pdfDoc is the document object of the actual pdf.
 * @returns Array of field data object.
 */

export function getPdfInputFields(pdfDoc) {

    const formFields = pdfDoc.getForm().getFields();
    const inputs = [];
    formFields.forEach((field) => {
        const type = field.constructor.name;
        let name = field.getName();
        let value;
        let options;
    
        if (type === 'PDFTextField2') {
            value = field.getText();
        } else if( type === 'PDFDropdown2' || type === 'PDFRadioGroup2') {
            value = field.getSelected();
            options = field.getOptions();
        }

        inputs.push({
            name,
            type,
            value,
            ...(options && { options })
        })
    });
    return inputs;
}