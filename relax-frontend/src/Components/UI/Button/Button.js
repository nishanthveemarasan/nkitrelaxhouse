import { Button } from "react-bootstrap";
const CButton = (props) => {
  return (
    <Button variant={props.color} onClick={props.click}>
      {props.name}
    </Button>
  );
};
export default CButton;
