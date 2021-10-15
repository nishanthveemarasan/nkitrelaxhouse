import { CCol } from "@coreui/react";

const SFormTextArea = (props) => {
  return (
    <CCol sm={12} md={12}>
      <div className="form-group">
        <label>{props.labelName}</label>
        <textarea
          className="form-control"
          readOnly={props.readOnly}
          onChange={(e) => props.change(e, props.id)}
          value={props.value}
          rows={props.rows}
        >
          {props.children}
        </textarea>
      </div>
    </CCol>
  );
};
export default SFormTextArea;
