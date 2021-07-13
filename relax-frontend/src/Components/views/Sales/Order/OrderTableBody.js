import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { getDate } from "src/custom-functions";
import classes from "./Order.module.css";
import { CBadge } from "@coreui/react";
const OrderTableBody = (props) => {
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.order_number}</td>
            <td>{row.itemname}</td>
            <td>{row.sellcount}</td>
            <td>{getStatus(row.sell_type)}</td>
            <td>{getDate(row.updated_at)}</td>
            <td>
              <ActionButton
                value="Update"
                class={classes.view}
                name="cil-align-center"
              />{" "}
              |{" "}
              <ActionButton
                value="Delete"
                class={classes.delete}
                name="cil-trash"
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default OrderTableBody;

const getStatus = (value) => {
  switch (value) {
    case "received":
      return <CBadge color="danger">Received</CBadge>;
    case "processing":
      return <CBadge color="warning">Processing</CBadge>;
    case "packed":
      return <CBadge color="info">Packed</CBadge>;
    case "sent":
      return <CBadge color="success">Sent</CBadge>;
    default:
      return false;
  }
};
