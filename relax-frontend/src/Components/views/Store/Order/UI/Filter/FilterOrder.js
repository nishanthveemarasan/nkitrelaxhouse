import { CCol, CRow } from "@coreui/react";
import { FormInput } from "src/Components/UI/Input/FormInput";
import FormSelect from "src/Components/UI/Input/FormSelect";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { shopStoreAction } from "src/store/store";
import {
  getAllOrderIds,
  getStoreOrderData,
  getStoreProductById,
} from "src/store/shop-slice";
import classes from "./FIlterOrder.module.css";
import SearchContent from "./SearchContent";
const FilterOrder = (props) => {
  const mapStateToProps = (state) => {
    return {
      orderData: state.shopStore.order,
      reRunComponent: state.shopStore.reRunComponent.isDataChanged,
    };
  };

  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    payMethod: "all",
    payStatus: "all",
    deliveryStatus: "all",
  });
  const [orderId, setorderId] = useState({
    value: "",
    touched: false,
  });
  useEffect(() => {
    let debounce;
    if (orderId.touched) {
      debounce = setTimeout(() => {
        dispatch(getAllOrderIds(orderId.value));
      }, 500);
    }
    return () => {
      clearTimeout(debounce);
    };
  }, [orderId]);
  const onPayStautsChangeHandler = (e) => {
    const status = e.target.value;
    console.log(status);
    setFilter((prevState) => {
      return {
        ...prevState,
        payStatus: status,
      };
    });
    setorderId((prevState) => {
      return {
        ...prevState,
        value: "",
        touched: false,
      };
    });
    dispatch(shopStoreAction.updatePayStatus({ status }));
    dispatch(
      getStoreOrderData(
        state.orderData.param,
        status,
        state.orderData.method,
        state.orderData.orderStatus
      )
    );
  };
  const onPayMethodChangeHandler = (e) => {
    const value = e.target.value;
    setorderId((prevState) => {
      return {
        ...prevState,
        value: "",
        touched: false,
      };
    });
    setFilter((prevState) => {
      return {
        ...prevState,
        payMethod: value,
      };
    });
    const method = e.target.value.split(" ").join("_");
    dispatch(shopStoreAction.updatePayMethod({ method }));
    dispatch(
      getStoreOrderData(
        state.orderData.param,
        state.orderData.status,
        method,
        state.orderData.orderStatus
      )
    );
  };
  const onDeliveryStatusChangeHandler = (e) => {
    const status = e.target.value;
    setorderId((prevState) => {
      return {
        ...prevState,
        value: "",
        touched: false,
      };
    });
    setFilter((prevState) => {
      return {
        ...prevState,
        deliveryStatus: status,
      };
    });
    dispatch(shopStoreAction.updateDeliveryStatus({ status }));
    dispatch(
      getStoreOrderData(
        state.orderData.param,
        state.orderData.status,
        state.orderData.method,
        status
      )
    );
  };
  const onOrderIdChangeHandler = (e) => {
    const value = e.target.value;
    setFilter((prevState) => {
      return {
        ...prevState,
        payMethod: "all",
        payStatus: "all",
        deliveryStatus: "all",
      };
    });
    setorderId((prevState) => {
      return {
        ...prevState,
        value: value,
        touched: true,
      };
    });
  };
  const onIdChangeHandler = (id) => {
    dispatch(shopStoreAction.clearOrderIdArray());
    setorderId((prevState) => {
      return {
        ...prevState,
        value: id,
        touched: false,
      };
    });
    dispatch(getStoreProductById(id));
  };
  return (
    <CRow>
      <CCol sm={12} md={3}>
        <FormSelect
          label="Pay Status"
          options={["All", "Paid", "Refund"]}
          value={filter.payStatus}
          change={onPayStautsChangeHandler}
        />
      </CCol>
      <CCol sm={12} md={3}>
        <FormSelect
          label="Pay Method"
          options={["All", "Credit Card", "Stripe", "Paypal"]}
          value={filter.payMethod}
          change={onPayMethodChangeHandler}
        />
      </CCol>
      <CCol sm={12} md={3}>
        <FormSelect
          label="Order Status"
          options={["All", "Processing", "Packed", "Delivered"]}
          value={filter.deliveryStatus}
          change={onDeliveryStatusChangeHandler}
        />
      </CCol>
      <CCol sm={12} md={3}>
        <div className={classes.dropDown}>
          <div className={classes.searchBox}>
            <div style={{ marginBottom: "2.5%" }}>Search</div>
            <FormInput
              label={false}
              label="Search Order ID"
              value={orderId.value}
              change={onOrderIdChangeHandler}
            />

            <div className={classes.content}>
              <SearchContent idChange={onIdChangeHandler} />
            </div>
          </div>
        </div>
      </CCol>
    </CRow>
  );
};
export default FilterOrder;
