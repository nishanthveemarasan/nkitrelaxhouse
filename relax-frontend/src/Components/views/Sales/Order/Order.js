import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CButton from "src/Components/UI/Button/Button";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getSaleData, openAddOrderModal } from "src/store/sale-slice";
import { saleStoreAction } from "src/store/store";
import CreateSaleModal from "../Modal/CreateSaleModal";
import SaleActionModal from "../Modal/SaleActionModal";
import OrderTableBody from "./OrderTableBody";

const Order = () => {
  const mapStateToProps = (state) => {
    return {
      isDataLoaded: state.saleStore.isDataLoaded,
      saleData: state.saleStore.saleData,
      reRunComponent: state.saleStore.reRunComponent,
      addSaleModalData: state.saleStore.addSaleModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunComponent.isDataChanged) {
      const data = {
        param: state.reRunComponent.queryParam,
      };
      dispatch(getSaleData(data));
    }
  }, [
    state.reRunComponent.isDataChanged,
    dispatch,
    state.reRunComponent.queryParam,
  ]);

  const pageChangeHandler = (url) => {
    const param = url.split("?")[1];
    dispatch(saleStoreAction.updateParam({ param }));
    const data = {
      param,
    };
    dispatch(getSaleData(data));
  };

  const openCreateModalHandler = () => {
    dispatch(openAddOrderModal());
  };
  return (
    <>
      <SaleActionModal />
      <CreateSaleModal />
      <Row>
        <Col sm={12} className="text-right mb-3">
          <CButton
            name="Add Order"
            color="success"
            click={openCreateModalHandler}
            loading={state.addSaleModalData.isLoading}
          />
        </Col>
      </Row>
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
