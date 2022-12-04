import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "src/axios/axios";
import { FormInput } from "src/Components/UI/Input/FormInput";
import CModal from "src/Components/UI/Modal/CModal";
import useFormValidate from "src/Hooks/input-validation";
import { productStoreAction } from "src/store/store";
import { Alert, Col, Row } from "react-bootstrap";
import FormRadio from "src/Components/UI/Input/FormRadio";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import { sendPostAdminApi } from "src/service/appService";
const CreateModal = () => {
  const {
    inputValue: productName,
    inputChangeHandler: productNameChangeHandler,
    reset: productNameRestHandler,
  } = useFormValidate();
  const {
    inputValue: productCode,
    inputChangeHandler: productCodeChangeHandler,
    reset: productCodeRestHandler,
  } = useFormValidate();
  const {
    inputValue: stockCount,
    inputChangeHandler: stockCountChangeHandler,
    reset: stockCountRestHandler,
  } = useFormValidate();

  const [trackType, setTrackType] = useState("singleProduct");
  const [selectedFile, setSelectedFile] = useState("");
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onTrackTypeChange = (e) => {
    setTrackType(e.target.value);
  };
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
    setModalData((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      };
    });
    if (trackType === "multipleProducts") {
      dispatch(productStoreAction.dataNotChanged());
      var formData = new FormData();
      formData.append("file", selectedFile);
      sendPostAdminApi("product/add-multiple-products", formData)
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
        })
        .catch((error) => {
          setModalData((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              alertText: error.response.data.error.msg,
              alertType: "danger",
            };
          });
        });
    } else {
      const data = {
        itemname: productName,
        itemcode: productCode,
        count: stockCount,
      };

      dispatch(productStoreAction.dataNotChanged());
      sendPostAdminApi("add-product", data)
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
    }
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
      showButton={true}
    >
      {modalData.alertText && (
        <Alert variant={modalData.alertType}>{modalData.alertText}</Alert>
      )}
      <Row className="mt-4 mb-4">
        <Col sm={12} md={5}>
          <FormRadio
            inline={true}
            label="Create Single Product"
            type="radio"
            value="singleProduct"
            name="inLineProduct"
            change={onTrackTypeChange}
            checked={trackType === "singleProduct"}
          />
        </Col>
        <Col sm={12} md={6}>
          <FormRadio
            inline={true}
            label="Create Multiple Products(CSV)"
            type="radio"
            value="multipleProducts"
            name="inLineProduct"
            change={onTrackTypeChange}
            checked={trackType === "multipleProducts"}
          />
        </Col>
      </Row>
      {trackType === "singleProduct" && (
        <>
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
        </>
      )}
      {trackType === "multipleProducts" && (
        <>
          <FormInputLabel
            type="file"
            readOnly={false}
            label="UpLoad CSV File"
            change={fileSelectedHandler}
          />
        </>
      )}
    </CModal>
  );
};
export default CreateModal;
