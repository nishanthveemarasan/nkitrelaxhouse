import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStoreOrderData } from "src/store/shop-slice";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/Table/CTable";
import OTableBody from "./Table/OTableBody";
import { shopStoreAction } from "src/store/store";
import Pagination from "src/Components/UI/Table/Pagination";
import { useHistory } from "react-router";
import FilterOrder from "./UI/Filter/FilterOrder";
const StoreOrder = () => {
  const history = useHistory();
  const mapStateToProps = (state) => {
    return {
      orderData: state.shopStore.order,
      reRunComponent: state.shopStore.reRunComponent.isDataChanged,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunComponent) {
      dispatch(
        getStoreOrderData(
          state.orderData.param,
          state.orderData.status,
          state.orderData.method,
          state.orderData.orderStatus
        )
      );
    }
  }, [state.reRunComponent, dispatch]);
  const pageChangeHandler = (url) => {
    if (url) {
      const param = url.split("?")[1];
      dispatch(shopStoreAction.updateOrderParam({ param }));
      dispatch(
        getStoreOrderData(
          param,
          state.orderData.status,
          state.orderData.method,
          state.orderData.orderStatus
        )
      );
    }
  };
  const onEditOrderHandler = (id) => {
    const data = state.orderData.data.data[id];
    dispatch(shopStoreAction.getSingleOrder({ data }));
    history.push("/admin/store/order-edit");
  };
  return (
    <>
      <div className="bg-white mb-3 pt-3">
        <FilterOrder />
      </div>
      {!state.orderData.isDataReceived && <Loader />}
      {state.orderData.isDataReceived && (
        <>
          <CTable
            header={[
              "#",
              "order_id",
              "Customer",
              "Total Amount",
              "Payment Status",
              "Pay Method",
              "Order Status",
              "Order Date",
              "Action",
            ]}
          >
            <OTableBody
              body={state.orderData.data.data}
              action={onEditOrderHandler}
            />
          </CTable>
        </>
      )}
      {state.orderData.isDataReceived && state.orderData.data.to && (
        <Pagination body={state.orderData.data} change={pageChangeHandler} />
      )}
    </>
  );
};
export default StoreOrder;
