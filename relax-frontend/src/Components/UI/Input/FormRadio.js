import { Form } from "react-bootstrap";

const FormRadio = (props) => {
  return (
    <Form.Check
      inline={props.inline}
      label={props.label}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.change}
      checked={props.checked}
    />
  );
};
export default FormRadio;
