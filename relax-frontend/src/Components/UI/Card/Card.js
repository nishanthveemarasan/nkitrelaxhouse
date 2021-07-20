import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <CCard>
      <CCardHeader color={props.color}>
        <h5 className={classes.cardHeader}>{props.header}</h5>
      </CCardHeader>
      <CCardBody>{props.children}</CCardBody>
    </CCard>
  );
};
export default Card;
