import { Col, Form } from "react-bootstrap";
export const FormInputLabel = (props) => {
  return (
    <Col md={props.size}>
      <Form.Group>
        {props.label && <Form.Label>{props.label}</Form.Label>}
        <Form.Control
          type={props.type}
          readOnly={props.readOnly}
          onChange={props.change}
          value={props.value}
          onBlur={props.blur}
          list={props.list}
          placeholder={props.placeHolder}
        />
      </Form.Group>
    </Col>
  );
};
export default FormInputLabel;
