import { Button } from "react-bootstrap";
import CButtonSpinner from "../Spinner/CButtonSpinner";
const CButton = (props) => {
  return (
    <Button
      variant={props.color}
      onClick={props.click}
      type={props.type}
      style={{ minWidth: props.width }}
    >
      {props.loading && <CButtonSpinner />} {props.name}
    </Button>
  );
};
export default CButton;
