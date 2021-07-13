import { Form } from "react-bootstrap";
export const FormInput = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        readOnly={props.readOnly}
        onChange={props.change}
        value={props.value}
        onBlur={props.blur}
        list={props.list}
      />
    </Form.Group>
  );
};
