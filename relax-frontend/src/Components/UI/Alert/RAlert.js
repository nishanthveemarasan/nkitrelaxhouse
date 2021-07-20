import { Alert } from "react-bootstrap";

const RAlert = (props) => {
  const message = !props.alert.status ? (
    props.alert.msg.map((row, i) => {
      return <li key={i}>{row}</li>;
    })
  ) : (
    <>{props.alert.msg[0]}</>
  );
  return <Alert variant={props.alert.color}>{message}</Alert>;
};
export default RAlert;
