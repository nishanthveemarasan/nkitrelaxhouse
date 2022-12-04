import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { getDate } from "src/custom-functions";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <CCard>
      <CCardHeader color={props.color}>
        <h5 className={classes.cardHeader}>{props.header}</h5>
        {props.subTitle && (
          <p className="text-white"> {`By ${props.by} on ${getDate(props.date)}`}</p>
        )}
      </CCardHeader>
      <CCardBody>{props.children}</CCardBody>
    </CCard>
  );
};
export default Card;
