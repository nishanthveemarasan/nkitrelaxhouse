import { CRow, CCol } from "@coreui/react";
import classes from "./OrderDetails.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { shopStoreAction } from "src/store/store";
import { getProductDetails } from "src/store/shop-slice";
const OrderItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const item = props.item;
  const itemDetails = item.itemname.split("-");
  const onProductViewHandler = (id) => {
    dispatch(getProductDetails(id));
    history.push(`/admin/store/edit/${item.id}`);
  };
  return (
    <CRow className="mb-1">
      <CCol sm={12} md={3} lg={3} className={`d-flex ${classes.colSize}`}>
        <img
          src={item.image_url}
          className={`mx-auto my-auto ${classes.cartImg}`}
        />
      </CCol>
      <CCol sm={12} md={3} lg={3} className={`d-flex ${classes.colSize}`}>
        <span
          className="mx-auto my-auto font-italic font-weight-bolder"
          style={{
            fontSize: "130%",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => onProductViewHandler(item.id)}
        >
          {itemDetails[0]}
        </span>
      </CCol>
      <CCol sm={12} md={2} lg={2} className={`d-flex ${classes.colSize}`}>
        <span
          className="mx-auto my-auto font-italic font-weight-bolder"
          style={{ fontSize: "130%" }}
        >
          {itemDetails[1]}
        </span>
      </CCol>

      <CCol sm={12} md={2} lg={2} className={`d-flex ${classes.colSize}`}>
        <span
          className="mx-auto my-auto font-italic font-weight-bolder"
          style={{ fontSize: "130%" }}
        >
          {`${item.unitPrice} X ${item.count}`}
        </span>
      </CCol>
      <CCol sm={12} md={2} lg={2} className={`d-flex ${classes.colSize}`}>
        <span
          className="mx-auto my-auto font-italic font-weight-bolder"
          style={{ fontSize: "130%" }}
        >
          {item.totalPrice}
        </span>
      </CCol>
    </CRow>
  );
};
export default OrderItem;
