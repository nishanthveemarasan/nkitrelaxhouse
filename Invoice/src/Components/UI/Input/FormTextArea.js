const FormTextArea = (props) => {
  return (
    <div className="form-group">
      <label>{props.labelName}</label>
      <textarea
        className="form-control"
        readOnly={props.readOnly}
        onChange={props.change}
        value={props.value}
        rows={props.rows}
      >
        {props.children}
      </textarea>
    </div>
  );
};
export default FormTextArea;
