import { Col, Form } from "react-bootstrap";
const FormInput = (props) => {
  //   console.log(props.id);
  return (
    <Col md={props.md} sm={props.sm}>
      <Form.Group>
        {props.label && <Form.Label>{props.label}</Form.Label>}
        <Form.Control
          type={props.type}
          readOnly={props.readOnly}
          onChange={(e) => props.change(e, props.id)}
          value={props.value}
          onBlur={props.blur}
          list={props.list}
          placeholder={props.placeHolder}
        />
      </Form.Group>
    </Col>
  );
};
export default FormInput;
