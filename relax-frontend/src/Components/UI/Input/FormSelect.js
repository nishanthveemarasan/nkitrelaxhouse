import { CCol } from "@coreui/react";

const FormSelect = (props) => {
  return (
    <CCol sm={12}>
      <div className="form-group">
        {props.label && (
          <label htmlFor={props.id} style={{ color: "black" }}>
            {props.label}
          </label>
        )}
        <select
          className="form-control"
          id={props.id}
          value={props.value}
          onChange={props.change}
          disabled={props.readOnly && "readOnly"}
        >
          {props.chooseOption && <option>Choose One Option</option>}
          {props.options.map((option, index) => {
            return (
              <option key={index} value={option.toLowerCase()}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </CCol>
  );
};
export default FormSelect;
