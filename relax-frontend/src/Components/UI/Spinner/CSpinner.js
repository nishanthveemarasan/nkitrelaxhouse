import { Spinner } from "react-bootstrap";
const CSpinner = (props) => {
  return (
    <span className={props.class}>
      <Spinner animation="border" size={props.size} />
    </span>
  );
};
export default CSpinner;
