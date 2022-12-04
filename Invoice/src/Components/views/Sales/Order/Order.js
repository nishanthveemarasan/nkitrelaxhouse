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
      addSaleModalData: state.saleStore.addSaleModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  
  const openCreateModalHandler = () => {
    // dispatch(openAddOrderModal());
  };
  return (
    <>
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
    </>
  );
};
export default Order;
