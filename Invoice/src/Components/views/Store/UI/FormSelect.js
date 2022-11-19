const SFormSelect = (props) => {
  return (
    <div className="form-group">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={(e) => props.change(e, props.id)}
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
  );
};
export default SFormSelect;
