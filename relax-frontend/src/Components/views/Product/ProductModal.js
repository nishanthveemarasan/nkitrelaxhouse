import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CAlert from "src/Components/UI/Alert/CAlert";
import { FormInput } from "src/Components/UI/Input/FormInput";
import CModal from "src/Components/UI/Modal/CModal";
import useFormValidate from "src/Hooks/input-validation";
import { updateProductData } from "src/store/product-slice";
import { productStoreAction } from "src/store/store";

const ProductModal = () => {
  const {
    inputValue: productName,
    setInputValue: setProductName,
    inputChangeHandler: productNameChangeHandler,
  } = useFormValidate();
  const {
    inputValue: productCode,
    setInputValue: setProductCode,
    inputChangeHandler: productCodeChangeHandler,
  } = useFormValidate();
  const {
    inputValue: stock,
    setInputValue: setstock,
    inputChangeHandler: stockChangeHandler,
  } = useFormValidate();

  const mapStateToProps = (state) => {
    return {
      modalData: state.productStore.modalData,
      id: state.productStore.modalData.productId,
      isLoading: state.productStore.isLoading,
      initialLoad: state.productStore.initialLoad,
      updateData: state.productStore.updateData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(productStoreAction.modalClose());
  };
  useEffect(() => {
    if (state.modalData.isModalOpen && state.initialLoad.action === "Update") {
      setProductCode(state.modalData.data.itemcode);
      setProductName(state.modalData.data.itemname);
      setstock(state.modalData.data.count);
    }
  }, [
    state.modalData,
    state.initialLoad.action,
    setProductCode,
    setProductName,
    setstock,
  ]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      itemId: state.id,
      itemCount: stock,
      action: state.initialLoad.action.toLowerCase(),
    };
    dispatch(updateProductData(data));
  };
  return (
    <CModal
      onShow={state.modalData.isModalOpen}
      onClose={modalCloseHandler}
      heading={state.modalData.modalHeading}
      variant={state.modalData.variant}
      action={state.modalData.modalAction}
      size="md"
      onSubmitHandler={onSubmitHandler}
      loading={state.updateData.isLoading}
    >
      {state.updateData.dataUpdated && (
        <CAlert color={state.updateData.color} text={state.updateData.msg} />
      )}
      {state.initialLoad.action === "Delete" &&
        !state.updateData.dataUpdated && (
          <CAlert
            color="danger"
            text={`please confirm that you are going to delete ${state.modalData.data?.itemname.toUpperCase()}`}
          />
        )}
      {state.initialLoad.action === "Update" && (
        <>
          <FormInput
            type="text"
            readOnly={true}
            label="Product Name"
            value={productName}
            change={productNameChangeHandler}
          />
          <FormInput
            type="text"
            readOnly={true}
            label="Product Code"
            value={productCode}
            change={productCodeChangeHandler}
          />
          <FormInput
            type="number"
            readOnly={false}
            label="Current Stock"
            value={stock}
            change={stockChangeHandler}
          />
        </>
      )}
    </CModal>
  );
};
export default ProductModal;
