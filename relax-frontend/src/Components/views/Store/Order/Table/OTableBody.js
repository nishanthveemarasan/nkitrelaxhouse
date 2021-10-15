import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import CBadge from "src/Components/UI/Badge/CBadge";
import { getDate } from "src/custom-functions";
import classes from "./OTableBody.module.css";
const OTableBody = (props) => {
  const data = props.body;
  return (
    <>
      {data.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.order_id}</td>
            <td>{getCustomerName(row.customer_details)}</td>
            <td>{row.amount}</td>
            <td>{getStatus(row.status)}</td>
            <td>{getMethod(row.pay_method)}</td>
            <td>{getOrderStatus(row.delivery_status)}</td>
            <td>{getDate(row.created_at)}</td>
            <td>
              <ActionButton
                value="Edit Product"
                class={classes.view}
                name="cil-align-center"
                action={() => props.action(i)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default OTableBody;

const getCustomerName = (data) => {
  return `${data.firstName} ${data.lastName}`;
};

const getStatus = (status) => {
  switch (status) {
    case "paid":
      return <CBadge color="success" value="Paid" />;
    default:
      return false;
  }
};
const getMethod = (method) => {
  switch (method) {
    case "credit_card":
      return <CBadge color="danger" value="Credit Card" />;
    case "stripe":
      return <CBadge color="primary" value="Stripe Payment" />;
    case "paypal":
      return <CBadge color="secondary" value="Paypal" />;
    default:
      return false;
  }
};
const getOrderStatus = (method) => {
  switch (method) {
    case "processing":
      return <CBadge color="info" value="Processing" />;
    case "packed":
      return <CBadge color="primary" value="Packed" />;
    case "delivered":
      return <CBadge color="secondary" value="Delivered" />;
    default:
      return false;
  }
};
