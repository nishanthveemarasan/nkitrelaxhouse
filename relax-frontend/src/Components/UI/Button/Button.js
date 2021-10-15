import { Button } from "react-bootstrap";
import CButtonSpinner from "../Spinner/CButtonSpinner";
const CButton = (props) => {
  return (
    <>
      {props.control ? (
        <Button
          variant={props.color}
          onClick={() => props.click(props.input, props.index)}
          type={props.type}
          style={{ minWidth: props.width }}
          block={props.block}
          disabled={props.disabled}
          input={props.input}
        >
          {props.loading && <CButtonSpinner />} {props.name}
        </Button>
      ) : (
        <Button
          variant={props.color}
          onClick={props.click}
          type={props.type}
          style={{ minWidth: props.width }}
          block={props.block}
          disabled={props.disabled}
        >
          {props.loading ? <CButtonSpinner /> : props.name}
        </Button>
      )}
    </>
  );
};
export default CButton;
