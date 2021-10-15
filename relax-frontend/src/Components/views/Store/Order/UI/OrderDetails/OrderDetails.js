import { CRow, CCol } from "@coreui/react";
import classes from "./OrderDetails.module.css";
import OrderItem from "./OrderItem";
const OrderDetails = (props) => {
  const data = props.data;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <OrderItem item={item} />
          </div>
        );
      })}
    </>
  );
};
export default OrderDetails;
