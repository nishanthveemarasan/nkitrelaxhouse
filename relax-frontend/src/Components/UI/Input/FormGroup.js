import { Col, FormControl, InputGroup } from "react-bootstrap";

const FormGroup = (props) => {
  return (
    <Col md={props.md} sm={props.sm}>
      <InputGroup className="mb-3">
        <FormControl
          type={props.type}
          placeholder={props.placeholder}
          aria-label={props.label}
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">{props.group}</InputGroup.Text>
      </InputGroup>
    </Col>
  );
};
export default FormGroup;
