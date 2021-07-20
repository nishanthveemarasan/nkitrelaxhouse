import { Col, Form } from "react-bootstrap";
export const FormInput = (props) => {
  return (
    <Col md={props.size}>
      <Form.Group>
        <Form.Control
          type={props.type}
          readOnly={props.readOnly}
          onChange={props.change}
          value={props.value}
          onBlur={props.blur}
          list={props.list}
          placeholder={props.label}
        />
      </Form.Group>
    </Col>
  );
};
