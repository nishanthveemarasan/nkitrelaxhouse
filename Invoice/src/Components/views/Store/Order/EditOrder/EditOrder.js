import { useState, useEffect } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import classes from "./EditOrder.module.css";
import { getDate } from "src/custom-functions";
import DetailItem from "../UI/DetailItem";
import DetailBox from "../UI/DetailBox";
import OrderDetails from "../UI/OrderDetails/OrderDetails";
import OrderSummary from "../OrderSummary/OrderSummary";
import CButton from "src/Components/UI/Button/Button";
import FormSelect from "src/Components/UI/Input/FormSelect";
import { Form } from "react-bootstrap";
import { sendPostAdminApi } from "src/service/appService";
import SAlert from "../../UI/Alert/Alert";
import { useHistory } from "react-router";
const EditOrder = () => {
  const history = useHistory();
  const mapStateToProps = (state) => {
    return {
      data: state.shopStore.singleOrderData.data,
    };
  };
  const state = useSelector(mapStateToProps);
  const [orderStatus, setOrderStatus] = useState({ value: "", touched: false });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({
    show: false,
    msg: "",
    color: "",
  });
  useEffect(() => {
    if (state.data) {
      setOrderStatus((prevState) => {
        return {
          ...prevState,
          value: state.data.delivery_status,
        };
      });
    }
  }, [state.data]);
  const onStatusChangeHandler = (e) => {
    const value = e.target.value;
    setOrderStatus((prevState) => {
      return {
        ...prevState,
        value: value,
        touched: true,
      };
    });
  };
  const onStatusSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      id: state.data.id,
      delivery_status: orderStatus.value,
    };
    setLoading(false);
    try {
      const response = await sendPostAdminApi(
        "store/update-order-status",
        data
      );
      setStatus((prevState) => {
        return {
          ...prevState,
          msg: response.data.data.msg,
          color: "success",
          show: true,
        };
      });
      setOrderStatus((prevState) => {
        return {
          ...prevState,
          touched: false,
        };
      });
    } catch (error) {
      setStatus((prevState) => {
        return {
          ...prevState,
          msg: error.response.error,
          color: "danger",
          show: true,
        };
      });
    }
    setLoading(true);
  };
  const closeAlertHandler = () => {
    setStatus((prevState) => {
      return {
        ...prevState,
        msg: "",
        color: "",
        show: false,
      };
    });
  };
  const onGoBackHandler = () => {
    history.push("/admin/store/order");
  };
  return (
    <>
      {!state.data && <h1>No Data Found</h1>}
      {state.data && (
        <CContainer>
          <CRow>
            <CCol sm={12} className="text-right mb-3">
              <CButton
                name="Go Back"
                color="success"
                click={onGoBackHandler}
                // loading={state.addSaleModalData.isLoading}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={8} sm={12} style={{ width: "100%" }}>
              <div className={classes.orderDetails}>
                <OrderDetails data={state.data.order_details} />
              </div>
              <div>
                <hr />
              </div>
              <div className={classes.summary}>
                <OrderSummary
                  total={state.data.amount}
                  orderDetails={state.data.order_details}
                />
              </div>
            </CCol>
            <CCol md={4} sm={12} style={{ width: "100%" }}>
              <div className={classes.lineBreak}>
                <h5>Order Status</h5>
                <div className={classes.note}>
                  {status.show && (
                    <SAlert
                      color={status.color}
                      msg={status.msg}
                      close={closeAlertHandler}
                    />
                  )}
                  <Form onSubmit={onStatusSubmitHandler}>
                    <FormSelect
                      label={false}
                      options={["Processing", "Packed", "Delivered"]}
                      value={orderStatus.value}
                      change={onStatusChangeHandler}
                    />
                    <CButton
                      control={false}
                      block={true}
                      type="submit"
                      color="primary"
                      name="Save"
                      disabled={!orderStatus.touched}
                      loading={!loading}
                    />
                  </Form>
                </div>
              </div>
              <div className={classes.lineBreak}>
                <h5>Customer Node</h5>
                <div className={classes.note}>
                  {state.data.note ? (
                    state.data.note
                  ) : (
                    <span>No Notes from Customer</span>
                  )}
                </div>
              </div>
              <div>
                <h5>Customer Details</h5>
                <DetailBox
                  mainClass={classes.customerInfo}
                  headingClass={classes.heading}
                  heading={"Customer Name"}
                >
                  <DetailItem
                    class={classes.font}
                    value={`${state.data.customer_details.firstName} ${state.data.customer_details.lastName}`}
                  />
                </DetailBox>
              </div>
              <DetailBox
                mainClass={classes.contactInfo}
                headingClass={classes.heading}
                heading={"Contact Information"}
              >
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.email}`}
                />
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.phone}`}
                />
              </DetailBox>
              <DetailBox
                mainClass={classes.contactInfo}
                headingClass={classes.heading}
                heading={"Billing Address"}
              >
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.lineOne}`}
                />
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.town}`}
                />
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.zip} ${state.data.customer_details.state}`}
                />
                <DetailItem
                  class={classes.font}
                  value={`${state.data.customer_details.country}`}
                />
              </DetailBox>
              <DetailBox
                mainClass={classes.contactInfo}
                headingClass={classes.heading}
                heading={"Shipping Address"}
              >
                {state.data.shipping_address ? (
                  <p>there</p>
                ) : (
                  <DetailItem
                    class={classes.font}
                    value={`Same as Billing Address`}
                  />
                )}
              </DetailBox>
              <DetailBox
                mainClass={classes.contactInfo}
                headingClass={classes.heading}
                heading={"Order Creation Date"}
              >
                <DetailItem
                  class={classes.font}
                  value={`${getDate(state.data.created_at)}`}
                />
              </DetailBox>
            </CCol>
          </CRow>
        </CContainer>
      )}
    </>
  );
};
export default EditOrder;
