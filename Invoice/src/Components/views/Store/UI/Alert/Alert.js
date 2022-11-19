import { Alert } from "react-bootstrap";

const SAlert = (props) => {
  return (
    <Alert variant={props.color} onClose={props.close} dismissible>
      {props.msg}
    </Alert>
  );
};
export default SAlert;
