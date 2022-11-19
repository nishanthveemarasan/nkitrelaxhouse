import { useEffect } from "react";
import CModal from "src/Components/UI/Modal/CModal";
import { useSelector, useDispatch } from "react-redux";
import { closeSaleModal, updateSaleData } from "src/store/sale-slice";
import CAlert from "src/Components/UI/Alert/CAlert";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import FormSelect from "src/Components/UI/Input/FormSelect";
import FormTextArea from "src/Components/UI/Input/FormTextArea";
const SaleActionModal = () => {
  const {
    inputValue: orderNumber,
    inputChangeHandler: orderNumberChangeHandler,
    setInputValue: setOrderNumber,
  } = useFormValidate();
  const {
    inputValue: productName,
    inputChangeHandler: productNameChangeHandler,
    setInputValue: setProductName,
  } = useFormValidate();
  const {
    inputValue: quantity,
    inputChangeHandler: quantityChangeHandler,
    setInputValue: setQuantity,
  } = useFormValidate();
  const {
    inputValue: status,
    inputChangeHandler: onStatusChange,
    setInputValue: setStatus,
  } = useFormValidate();
  const {
    inputValue: note,
    inputChangeHandler: onNoteChange,
    setInputValue: setNote,
  } = useFormValidate();

  const mapStateToProps = (state) => {
    return {
      saleModalData: state.saleStore.saleModalData,
      updateSaleData: state.saleStore.updateSaleData,
      saleData: state.saleStore.saleData,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    if (state.saleModalData.modalAction === "Update") {
      setOrderNumber(state.saleModalData.modalData?.order_number);
      setProductName(state.saleModalData.modalData?.itemname);
      setQuantity(state.saleModalData.modalData?.sellcount);
      setStatus(state.saleModalData.modalData?.sell_type); //note
      setNote(state.saleModalData.modalData?.note);
    }
  }, [
    state.saleModalData,
    setOrderNumber,
    setProductName,
    setStatus,
    setNote,
    setQuantity,
  ]);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(closeSaleModal());
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state.saleModalData.modalAction === "Update") {
      const data = {
        sell_type: status,
        sellcount: quantity,
        note: note,
        action: state.saleModalData.modalAction.toLowerCase(),
        id: state.saleModalData.modalData.id,
        itemname: productName,
      };
      dispatch(updateSaleData(data));
    } else {
      const saleId = state.saleModalData.modalData.id;
      const saleData = findSale(state.saleData.data, saleId);
      const data = {
        id: saleId,
        itemname: saleData.itemname,
        action: "delete",
      };
      dispatch(updateSaleData(data));
    }
  };
  return (
    <CModal
      onShow={state.saleModalData.isModalOpen}
      heading={state.saleModalData.modalHeading}
      variant={state.saleModalData.variant}
      action={state.saleModalData.modalAction}
      size="md"
      onClose={modalCloseHandler}
      onSubmitHandler={onSubmitHandler}
      loading={state.updateSaleData.isLoading}
      showButton={
        state.updateSaleData.isUpdated &&
        state.saleModalData.modalAction === "Cancel"
          ? false
          : true
      }
    >
      {state.updateSaleData.isUpdated && (
        <CAlert
          color={state.updateSaleData.variant}
          text={state.updateSaleData.msg}
        />
      )}
      {state.saleModalData.modalAction === "Cancel" &&
        !state.updateSaleData.isUpdated && (
          <CAlert
            color="danger"
            text={`please confirm that you are going to Cencel the Order(${state.saleModalData.modalData?.order_number} )`}
          />
        )}
      {state.saleModalData.modalAction === "Update" && (
        <>
          <FormInputLabel
            type="text"
            readOnly={true}
            label="Order NUmber"
            value={orderNumber}
            change={orderNumberChangeHandler}
          />
          <FormInputLabel
            type="text"
            readOnly={true}
            label="Product"
            value={productName}
            change={productNameChangeHandler}
          />
          <FormInputLabel
            type="number"
            readOnly={false}
            label="Quantity"
            value={quantity}
            change={quantityChangeHandler}
          />
          <FormSelect
            label="Order Satus"
            value={status}
            change={onStatusChange}
            options={["Received", "Processing", "Packed", "Sent"]}
            readOnly={false}
          />
          <FormTextArea
            type="textarea"
            labelName="Note"
            readOnly={false}
            rows="3"
            change={onNoteChange}
            value={!note ? " " : note}
          ></FormTextArea>
        </>
      )}
    </CModal>
  );
};
export default SaleActionModal;

const findSale = (data, id) => {
  const element = data.find((el) => {
    return el.id === id;
  });
  return element;
};
