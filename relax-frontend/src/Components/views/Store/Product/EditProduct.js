import { useState, useEffect } from "react";
import { CButtonToolbar, CCol, CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import FormInput from "../UI/FormInput";
import SButtonGroup from "../UI/SButtonGroup/SButtonGroup";
import SFormSelect from "../UI/FormSelect";
import SFormTextArea from "../UI/SFormTextArea";
import CButton from "src/Components/UI/Button/Button";
import { decimal, offer, required } from "../UI/validator/Validator";
import classes from "./Product.module.css";
import { sendGetAdminApi, sendPostAdminApi } from "src/service/appService";
import SAlert from "../UI/Alert/Alert";
import { useParams } from "react-router";
import Loader from "src/Components/UI/Loader/Loader";
const EditProduct = () => {
  const history = useHistory();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: "",
    status: "",
    show: false,
  });
  const onGoBackHandler = () => {
    history.push("/admin/store/item");
  };
  const [change, setChange] = useState({
    color: ["black"],
    height: ["46cm"],
  });
  const [productDetails, setProductDetails] = useState({
    id: "",
    isDataReceived: false,
    isRequestSend: false,
  });
  const [formData, setFormData] = useState({
    name: {
      value: "",
      valid: false,
      validators: [required],
    },
    price: {
      value: "",
      offerValue: "",
      valid: false,
      validators: [required, decimal],
    },
    offerPrice: {
      value: "",
      valid: true,
      validators: [offer],
    },
    color: {
      value: "black",
      valid: true,
      validators: [required],
    },
    image: {
      value: "",
      file: "",
      valid: false,
      src: "",
      validators: [required],
    },
    description: {
      value: "",
      valid: false,
      validators: [required],
    },
    height: { value: "46cm", valid: true, validators: [required] },
    status: { value: "active", valid: true, validators: [required] },
  });

  useEffect(async () => {
    const id = params.id;
    try {
      const response = await sendGetAdminApi(`store/get-product-details/${id}`);
      const product = response.data.data;
      if (product) {
        const color = product.color;
        const height = product.height;
        setChange((prevState) => {
          return {
            ...prevState,
            color: color.split(","),
            height: height.split(","),
          };
        });
        setFormData((prevState) => {
          return {
            ...prevState,
            name: {
              ...prevState["name"],
              value: product.name,
              valid: true,
            },
            price: {
              ...prevState["price"],
              value: product.price,
              valid: true,
            },
            offerPrice: {
              ...prevState["offerPrice"],
              value: product.offer_price ? product.offer_price : "",
              valid: true,
            },
            image: {
              ...prevState["image"],
              src: product.image_url,
              valid: true,
            },
            description: {
              ...prevState["description"],
              value: product.description,
              valid: true,
            },
            status: {
              ...prevState["description"],
              value: product.status,
              valid: true,
            },
          };
        });

        setProductDetails((prevState) => {
          return {
            ...prevState,
            id: product.id,
            isDataReceived: true,
            isRequestSend: true,
          };
        });
      } else {
        setProductDetails((prevState) => {
          return {
            ...prevState,
            isDataReceived: false,
            isRequestSend: true,
          };
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  }, [setFormData, setChange]);

  const onInputChangeHandler = (event, input) => {
    let value = event.target.value;
    let url, file;
    if (input === "color" || input === "height") {
      let array = change[input].slice();
      if (!array.includes(value)) {
        array.push(value);
        setChange((prevState) => {
          return {
            ...prevState,
            [input]: array,
          };
        });
      }
    }
    if (input === "image") {
      url = URL.createObjectURL(event.target.files[0]);
      file = event.target.files[0];
      value = event.target.value;
    }
    setFormData((prevState) => {
      let isValid = true;
      for (const validator of prevState[input].validators) {
        isValid = isValid && validator(value);
      }
      if (input === "image") {
        const updatedForm = {
          ...prevState,
          [input]: {
            ...prevState[input],
            value: value,
            file: file,
            src: url,
            valid: isValid,
          },
        };
        return updatedForm;
      } else {
        const updatedForm = {
          ...prevState,
          [input]: {
            ...prevState[input],
            value: value,
            valid: isValid,
          },
        };
        return updatedForm;
      }
    });
  };
  let isFormValid = true;
  for (const input in formData) {
    isFormValid = isFormValid && formData[input].valid;
  }
  const onArrayChangeHandler = (type, index) => {
    let array = change[type].slice();
    if (array.length !== 1) {
      array.splice(index, 1);
      setChange((prevState) => {
        return {
          ...prevState,
          [type]: array,
        };
      });
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    var product = new FormData();
    product.append("id", productDetails.id);
    product.append("name", formData.name.value);
    product.append("price", formData.price.value);
    product.append("offerPrice", formData.offerPrice.value);
    product.append("color", change.color);
    product.append("height", change.height);
    product.append("description", formData.description.value);
    product.append("status", formData.status.value);
    if (formData.image.file) {
      product.append("file", formData.image.file);
    } else {
      product.append("image", formData.image.src);
    }
    try {
      setLoading(true);
      const response = await sendPostAdminApi("store/update-product", product);
      setAlert((prevState) => {
        return {
          ...prevState,
          msg: response.data.data.msg,
          status: "success",
          show: true,
        };
      });
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const closeAlertHandler = () => {
    setAlert((prevState) => {
      return {
        ...prevState,
        msg: "",
        status: "",
        show: false,
      };
    });
  };
  return (
    <>
      <div className="text-right mb-3">
        <CButton name="GO BACK" color="dark" click={onGoBackHandler} />
      </div>
      {!productDetails.isDataReceived && !productDetails.isRequestSend && (
        <Loader />
      )}
      {!productDetails.isDataReceived && productDetails.isRequestSend && (
        <h1>No Data Found</h1>
      )}
      {productDetails.isDataReceived && productDetails.isRequestSend && (
        <>
          {alert.show && (
            <SAlert
              color={alert.status}
              msg={alert.msg}
              close={closeAlertHandler}
            />
          )}
          <Form onSubmit={onSubmitHandler}>
            <CRow>
              <CCol md={6} sm={12}>
                <CRow>
                  <CCol md={8} sm={12}>
                    <FormInput
                      md={12}
                      sm={12}
                      label="Product Name"
                      id="name"
                      type="text"
                      readOnly={false}
                      value={formData.name.value}
                      change={onInputChangeHandler}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md={4} sm={12}>
                    <FormInput
                      md={12}
                      sm={12}
                      label="Price($)"
                      id="price"
                      type="text"
                      readOnly={false}
                      value={formData.price.value}
                      change={onInputChangeHandler}
                    />
                  </CCol>
                  <CCol md={4} sm={12}>
                    <FormInput
                      md={12}
                      sm={12}
                      label="Offer Price($)"
                      id="offerPrice"
                      type="text"
                      placeHolder="$0.00"
                      readOnly={false}
                      value={formData.offerPrice.value}
                      change={onInputChangeHandler}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="mr-1">
                    <FormInput
                      md={12}
                      sm={12}
                      label="Product Image"
                      id="image"
                      type="file"
                      readOnly={false}
                      value={formData.image.value}
                      change={onInputChangeHandler}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="ml-3">
                    <div className="mb-2">Product Color</div>
                    {change.color.length > 0 && (
                      <CButtonToolbar>
                        {change.color.map((el, i) => {
                          return (
                            <div className="mb-2" key={i}>
                              <SButtonGroup
                                color={el}
                                control={true}
                                input="color"
                                index={i}
                                click={onArrayChangeHandler}
                              />
                            </div>
                          );
                        })}
                      </CButtonToolbar>
                    )}

                    <div style={{ display: "inline-block" }}>
                      <SFormSelect
                        md={4}
                        sm={12}
                        label={false}
                        id="color"
                        options={["black", "white", "walnet", "Natural"]}
                        change={onInputChangeHandler}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="ml-3">
                    <div className="mb-2">Product Height</div>
                    {change.height.length > 0 && (
                      <CButtonToolbar>
                        {change.height.map((el, i) => {
                          return (
                            <div className="mb-2" key={i}>
                              <SButtonGroup
                                color={el}
                                control={true}
                                input="height"
                                index={i}
                                click={onArrayChangeHandler}
                              />
                            </div>
                          );
                        })}
                      </CButtonToolbar>
                    )}
                    <div style={{ display: "inline-block" }}>
                      <SFormSelect
                        md={12}
                        sm={12}
                        label={false}
                        id="height"
                        options={["46cm", "68cm", "74cm"]}
                        change={onInputChangeHandler}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <SFormTextArea
                      rows="5"
                      labelName="Product Description"
                      id="description"
                      type="textarea"
                      readOnly={false}
                      value={formData.description.value}
                      change={onInputChangeHandler}
                    ></SFormTextArea>
                  </CCol>
                </CRow>
                <CRow className="ml-1">
                  <CCol md={4} sm={12}>
                    <SFormSelect
                      md={12}
                      sm={12}
                      label="Product Status"
                      id="status"
                      options={["draft", "active"]}
                      value={formData.status.value}
                      change={onInputChangeHandler}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="ml-3">
                    <CButton
                      color="success"
                      width="30%"
                      type="submit"
                      name="Save Product"
                      block={false}
                      width="30%"
                      loading={loading}
                      disabled={isFormValid ? false : true}
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6} sm={12} className="d-flex">
                <CCol
                  xs={4}
                  sm={3}
                  md={4}
                  lg={4}
                  xl={4}
                  className="mx-auto my-auto"
                >
                  {formData.image.src && (
                    <img
                      src={formData.image.src}
                      className={classes.productImage}
                    />
                  )}
                </CCol>
              </CCol>
            </CRow>
          </Form>
        </>
      )}
    </>
  );
};
export default EditProduct;
