import CIcon from "@coreui/icons-react";
import { CRow, CCol } from "@coreui/react";
import img from "../../../assets/images/vienna-18-chair-black-hero.png";
import Counter from "../UI/Counter";
import { useSelector, useDispatch } from "react-redux";
import { cartStoreAction } from "src/store/store";
import classes from "./CheckoutCartItems.module.css";
const CheckoutCartItems = (props) => {
  const item = props.item;
  console.log(item?.id);
  const mapStateToProps = (state) => {
    return {
      data: state.cartStore.cartData,
      store: state.cartStore.storeData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const totalAmount = state.data.reduce((acc, el) => acc + el.totalPrice, 0);

  const onRemoveCartItemHandler = (id) => {
    dispatch(cartStoreAction.removeCartItem({ id }));
  };
  return (
    <>
      <CRow className="mb-1">
        <CCol
          sm={12}
          md={1}
          lg={1}
          className={`d-flex mr-1 ${classes.colSize}`}
        >
          <CIcon
            name="cil-trash"
            style={{ color: "red", fontSize: "200%" }}
            className="mx-auto my-auto"
            onClick={onRemoveCartItemHandler.bind(null, item?.id)}
          />
        </CCol>
        <CCol
          sm={12}
          md={3}
          lg={3}
          className={`d-flex mr-1 ${classes.colSize}`}
        >
          <img src={img} className={`mx-auto my-auto ${classes.cartImg}`} />
        </CCol>
        <CCol
          sm={12}
          md={4}
          lag={4}
          className={`d-flex mr-1 ${classes.colSize}`}
        >
          <span
            className="mx-auto my-auto font-italic font-weight-bolder"
            style={{ fontSize: "130%" }}
          >
            {item?.itemname}
          </span>
        </CCol>
        <CCol
          sm={12}
          md={2}
          lg={2}
          className={`d-flex mr-1 ${classes.colSize}`}
        >
          <span className="mx-auto my-auto">
            <Counter
              productData={{
                id: item.id,
                itemname: item.itemname,
                price: item.unitPrice,
                count: 1,
              }}
            />
          </span>
        </CCol>
        <CCol
          sm={12}
          md={1}
          lg={1}
          className={`d-flex mr-1 ${classes.colSize}`}
        >
          <span className="mx-auto my-auto font-italic font-weight-bolder">{`$${+item?.totalPrice}`}</span>
        </CCol>
      </CRow>
    </>
  );
};
export default CheckoutCartItems;
