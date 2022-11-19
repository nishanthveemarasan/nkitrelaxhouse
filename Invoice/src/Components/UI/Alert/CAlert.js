import { Alert } from "react-bootstrap";
const CAlert = (props) => {
  return (
    <Alert variant={props.color}>
      <div className={props.class}>{props.text}</div>
    </Alert>
  );
};
export default CAlert;
