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
          value={props.value}
          onChange={props.change}
        />
        <InputGroup.Text id="basic-addon2" onClick={props.viewHandler}>
          {props.group}
        </InputGroup.Text>
      </InputGroup>
    </Col>
  );
};
export default FormGroup;
