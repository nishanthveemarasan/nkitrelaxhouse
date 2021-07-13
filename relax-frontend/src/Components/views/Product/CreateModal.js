import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "src/axios/axios";
import { FormInput } from "src/Components/UI/Input/FormInput";
import CModal from "src/Components/UI/Modal/CModal";
import useFormValidate from "src/Hooks/input-validation";
import { productStoreAction } from "src/store/store";
import { Alert } from "react-bootstrap";
const CreateModal = () => {
  const {
    inputValue: productName,
    inputChangeHandler: productNameChangeHandler,
    reset: productNameRestHandler,
  } = useFormValidate("");
  const {
    inputValue: productCode,
    inputChangeHandler: productCodeChangeHandler,
    reset: productCodeRestHandler,
  } = useFormValidate("");
  const {
    inputValue: stockCount,
    inputChangeHandler: stockCountChangeHandler,
    reset: stockCountRestHandler,
  } = useFormValidate("");
  const [modalData, setModalData] = useState({
    isLoading: false,
    alertText: "",
    alertType: "",
  });
  const mapStateToProps = (state) => {
    return {
      openModal: state.productStore.openModal,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(productStoreAction.addProductModal({ data: false }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      itemname: productName,
      itemcode: productCode,
      count: stockCount,
    };
    setModalData((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      };
    });
    dispatch(productStoreAction.dataNotChanged());
    API.post("add-product", data)
      .then((response) => {
        const msg = response.data.data.msg;
        const type = response.data.data.type;
        dispatch(productStoreAction.dataChanged());
        if (type === "success") {
          setModalData((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              alertText: msg,
              alertType: "success",
            };
          });
        } else {
          setModalData((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              alertText: msg,
              alertType: "danger",
            };
          });
        }
        productNameRestHandler("");
        productCodeRestHandler("");
        stockCountRestHandler("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <CModal
      onShow={state.openModal}
      onClose={modalCloseHandler}
      heading={"Add a Product"}
      variant={"primary"}
      action={"Add Product"}
      size="md"
      onSubmitHandler={onSubmitHandler}
      loading={modalData.isLoading}
    >
      {modalData.alertText && (
        <Alert variant={modalData.alertType}>{modalData.alertText}</Alert>
      )}
      <FormInput
        type="text"
        readOnly={false}
        label="Product Name"
        value={productName}
        change={productNameChangeHandler}
      />
      <FormInput
        type="text"
        readOnly={false}
        label="Product Code"
        value={productCode}
        change={productCodeChangeHandler}
      />
      <FormInput
        type="number"
        readOnly={false}
        label="Stock Count"
        value={stockCount}
        change={stockCountChangeHandler}
      />
    </CModal>
  );
};
export default CreateModal;
