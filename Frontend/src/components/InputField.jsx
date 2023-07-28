import "./pdf.css";

const InputField = (props) => {
  const {
    name,
    type,
    options,
    value,
    textUpdate,
    dropDownUpdate,
    radioUpdate,
  } = props;

  if (type === "PDFTextField2") {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => textUpdate(e, name)}
        />
      </div>
    );
  } else if (type === "PDFDropdown2") {
    return (
      <div>
        <select value={value[0]} onChange={(e) => dropDownUpdate(e, name)}>
          {options.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else if (type === "PDFRadioGroup2") {
    return (
      <div className="radioBoxParent">
        {options.map((opt) => {
          return (
            <div className="radioBox" key={opt}>
              <div>
                <input
                  type="radio"
                  name={name}
                  checked={opt === value}
                  onChange={(e) => radioUpdate(e, name, opt)}
                />
              </div>
              <div>
                <label>{opt}</label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default InputField;
