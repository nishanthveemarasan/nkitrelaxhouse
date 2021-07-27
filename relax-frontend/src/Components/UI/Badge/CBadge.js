import { Badge } from "react-bootstrap";
const CBadge = (props) => {
  return (
    <Badge
      variant={props.color}
      style={{ fontSize: props.size }}
      onClick={props.click}
    >
      {props.value}
    </Badge>
  );
};
export default CBadge;
