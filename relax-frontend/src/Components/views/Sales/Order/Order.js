import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getSaleData } from "src/store/sale-slice";
import OrderTableBody from "./OrderTableBody";

const Order = () => {
  const mapStateToProps = (state) => {
    return {
      isDataLoaded: state.saleStore.isDataLoaded,
      saleData: state.saleStore.saleData,
      reRunComponent: state.saleStore.reRunComponent,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunComponent) {
      dispatch(getSaleData());
    }
  }, [state.reRunComponent, dispatch]);
  const pageChangeHandler = (url) => {
    const getParam = url.split("?")[1];
    dispatch(getSaleData(getParam));
  };
  return (
    <>
      {!state.isDataLoaded && <Loader />}
      {state.isDataLoaded && (
        <CTable
          header={[
            "#",
            "Order ID",
            "Product",
            "Quantity",
            "Order Created",
            "Status",
            "Action",
          ]}
        >
          <OrderTableBody body={state.saleData.data} />
        </CTable>
      )}
      {state.isDataLoaded && (
        <Pagination body={state.saleData} change={pageChangeHandler} />
      )}
    </>
  );
};
export default Order;
/**
 * created_at: "2021-06-28T00:42:47.000000Z"
id: 210
itemname: "B9 Armchair - Natural"
note: null
order_number: "212125"
packed_by: null
sell_type: "received"
sellcount: "5"
updated_at: "2021-06-28T00:42:47.000000Z"
 */
