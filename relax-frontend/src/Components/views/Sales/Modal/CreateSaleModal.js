import { useEffect } from "react";
import CModal from "src/Components/UI/Modal/CModal";
import { useSelector, useDispatch } from "react-redux";
import {
  closeSaleModal,
  initiateCreateOrder,
  refreshOrderIdData,
} from "src/store/sale-slice";
import { FormInput } from "src/Components/UI/Input/FormInput";
import useFormValidate from "src/Hooks/input-validation";
import Card from "src/Components/UI/Card/Card";
import { Col, Row } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import { saleStoreAction } from "src/store/store";
import AddOrderItem from "../OrderItem/AddOrderItem";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import DataList from "src/Components/UI/DataList/DataList";
import CAlert from "src/Components/UI/Alert/CAlert";
const CreateSaleModal = () => {
  const {
    inputValue: orderId,
    setInputValue: setOrderId,
    inputChangeHandler: idChangeHandler,
  } = useFormValidate("");
  const {
    inputValue: productName,
    setInputValue: setProductname,
    inputChangeHandler: nameChangeHandler,
  } = useFormValidate("");
  const {
    inputValue: quantity,
    setInputValue: setQuantity,
    inputChangeHandler: quantityChangeHandler,
  } = useFormValidate(1);

  const mapStateToProps = (state) => {
    return {
      data: state.saleStore.addSaleModalData,
      addOrder: state.saleStore.addOrder,
      refreshORderId: state.saleStore.refreshORderId,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(closeSaleModal());
  };

  useEffect(() => {
    setOrderId(state.data.latestOrderId);
  }, [setOrderId, state.data.latestOrderId]);

  const addMoreToCardHandler = () => {
    if (productName.length > 0 && +quantity > 0) {
      const data = {
        name: productName,
        quantity: quantity,
      };
      dispatch(saleStoreAction.addOrderItemCart({ data }));
      setProductname("");
      setQuantity(1);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      orderId: orderId,
      list: state.addOrder.orderItem,
    };
    if (data.list.length > 0) dispatch(initiateCreateOrder(data));
  };

  const onReloadNewOrderIdHandler = () => {
    dispatch(refreshOrderIdData());
  };
  return (
    <CModal
      onShow={state.data.isModalOpen}
      heading={state.data.modalHeading}
      variant="primary"
      action={state.data.modalActionButton}
      onClose={modalCloseHandler}
      onSubmitHandler={onSubmitHandler}
      loading={state.addOrder.isLoading}
      size="lg"
    >
      {state.addOrder.orderCreated && (
        <CAlert color={state.addOrder.color} text={state.addOrder.msg} />
      )}
      <Row>
        <Col>
          <FormInputLabel
            type="text"
            label="Order Number"
            readOnly={true}
            value={orderId}
            change={idChangeHandler}
            size="6"
          />
        </Col>
        <Col>
          <CButton
            color="info"
            name="Get New Order"
            loading={state.refreshORderId}
            click={onReloadNewOrderIdHandler}
          />
        </Col>
      </Row>

      <Card header="Add Items To Order" color="info">
        <Row>
          <FormInput
            type="text"
            label="Product Name"
            readOnly={false}
            value={productName}
            change={nameChangeHandler}
            size={4}
            list="data"
          />
          <DataList body={state.data.productNames} listName="data" />

          <FormInput
            type="number"
            label="Quantity"
            readOnly={false}
            size={2}
            value={quantity}
            change={quantityChangeHandler}
          />
          <Col md={3}>
            <CButton
              color="danger"
              name="ADD MORE"
              click={addMoreToCardHandler}
              type="button"
            />
          </Col>
        </Row>
        <AddOrderItem />
      </Card>
    </CModal>
  );
};
export default CreateSaleModal;
