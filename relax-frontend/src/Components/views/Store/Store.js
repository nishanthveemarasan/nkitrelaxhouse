import { useState } from "react";
import { CButtonToolbar, CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import classes from "./Store.module.css";
import SFormSelect from "./UI/FormSelect";
import FormInput from "./UI/FormInput";
import { decimal, offer, required } from "./UI/validator/Validator";
import { sendPostAdminApi, sendPostApi } from "src/service/appService";
import SAlert from "./UI/Alert/Alert";
import SButtonGroup from "./UI/SButtonGroup/SButtonGroup";
import FormTextArea from "src/Components/UI/Input/FormTextArea";
import SFormTextArea from "./UI/SFormTextArea";
const Store = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: "",
    status: "",
    show: false,
  });
  const [change, setChange] = useState({ color: ["black"], height: ["46cm"] });
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
  let isFormValid = true;

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
  //check if it is valid
  for (const input in formData) {
    isFormValid = isFormValid && formData[input].valid;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (formData.image.file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      var product = new FormData();
      product.append("name", formData.name.value);
      product.append("price", formData.price.value);
      product.append("offerPrice", formData.offerPrice.value);
      product.append("file", formData.image.file);
      product.append("color", change.color);
      product.append("height", change.height);
      product.append("description", formData.description.value);
      product.append("status", formData.status.value);
      try {
        setLoading(true);
        const response = await sendPostAdminApi("store/add-product", product);
        setAlert((prevState) => {
          return {
            ...prevState,
            msg: response.data.data.msg,
            status: "success",
            show: true,
          };
        });
        setLoading(false);

        setFormData((prevState) => {
          return {
            ...prevState,
            name: {
              ...prevState["name"],
              value: "",
              valid: false,
            },
            price: {
              ...prevState["price"],
              value: "",
              valid: false,
            },
            offerPrice: {
              ...prevState["offerPrice"],
              value: "",
              valid: true,
            },
            description: {
              ...prevState["description"],
              value: "",
              valid: false,
            },
            image: {
              ...prevState["image"],
              src: "",
              value: "",
              valid: false,
            },
          };
        });

        setChange((prevState) => {
          return {
            ...prevState,
            color: ["black"],
            height: ["46cm"],
          };
        });
      } catch (error) {
        setAlert((prevState) => {
          return {
            ...prevState,
            msg: error.response.data.error,
            status: "danger",
            show: true,
          };
        });
      }
    } else {
      setAlert((prevState) => {
        return {
          ...prevState,
          msg: "Image that you have uploaded is invalid and it should be one of the following(jpg|jpeg|png|gif)",
          status: "danger",
          show: true,
        };
      });
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
  return (
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
                  placeHolder="$0.00"
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
                  readOnly={false}
                  placeHolder="$0.00"
                  value={formData.offerPrice.value}
                  change={onInputChangeHandler}
                />
              </CCol>
            </CRow>
            <CRow>
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
            </CRow>
            <CRow>
              <CCol>
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
              <CCol>
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
              <SFormTextArea
                rows="5"
                labelName="Product Description"
                id="description"
                type="textarea"
                readOnly={false}
                value={formData.description.value}
                change={onInputChangeHandler}
              ></SFormTextArea>
            </CRow>
            <CRow className="ml-1">
              <SFormSelect
                md={12}
                sm={12}
                label="Product Status"
                id="status"
                options={["draft", "active"]}
                value={formData.status.value}
                change={onInputChangeHandler}
              />
            </CRow>

            <CRow className="mx-auto">
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
            </CRow>
          </CCol>
          <CCol md={5} sm={12} className="d-flex">
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
  );
};
export default Store;
