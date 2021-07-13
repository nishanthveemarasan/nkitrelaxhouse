import { Alert } from "react-bootstrap";
const CAlert = (props) => {
  return <Alert variant={props.color}>{props.text}</Alert>;
};
export default CAlert;
