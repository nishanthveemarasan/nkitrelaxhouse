import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CRow,
} from "@coreui/react";
import RInput from "src/Components/UI/Register/RInput";
import RButton from "src/Components/UI/Register/RButton";
import { registerData } from "src/store/register-slice";
import RAlert from "src/Components/UI/Alert/RAlert";
import { Link } from "react-router-dom";
import { required } from "src/Components/views/Store/UI/validator/Validator";
import {
  email,
  length,
  validPassword,
} from "src/Components/UI/Validation/Validator";
import Error from "src/Components/UI/Error/Error";
import { generateRandomPassword } from "src/service/customService";

const Register = () => {
  const mapStateToProps = (state) => {
    return {
      isLoading: state.registerStore.isLoading,
      message: state.registerStore.message,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fname: {
      value: "",
      valid: false,
      touched: false,
      validator: [required],
      error: "First Name is Required!",
    },
    lname: {
      value: "",
      valid: false,
      touched: false,
      validator: [required],
      error: "Last Name is Required!",
    },
    email: {
      value: "",
      valid: false,
      touched: false,
      validator: [email],
      error: "Enter Valid Email Address!",
    },
    username: {
      value: "",
      valid: false,
      touched: false,
      validator: [required, length({ min: 6 })],
      error: "Username must be atleast 6 characters!",
    },
    password: {
      value: "",
      valid: false,
      touched: false,
      validator: [required, length({ min: 8 })],
      error: "Password must be atleast 8 characters!",
    },
    cPassword: {
      value: "",
      valid: false,
      touched: false,
      error: "Password does not match!",
    },
  });
  const onInputChangeHandler = (e, type) => {
    const value = e.target.value;
    let isValid = true;
    if (type === "cPassword") {
      isValid = isValid && formData.password.value.trim() === value.trim();
    } else {
      for (const validator of formData[type].validator) {
        isValid = isValid && validator(value);
      }
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        [type]: {
          ...prevState[type],
          value,
          valid: isValid,
        },
      };
    });
  };
  const onInputBlurHandler = (e, type) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [type]: {
          ...prevState[type],
          touched: true,
        },
      };
    });
  };
  const onPasswordGenerateHandler = () => {
    const password = generateRandomPassword(15);
    setFormData((prevState) => {
      return {
        ...prevState,
        password: {
          ...prevState.password,
          value: password,
          valid: true,
          touched: true,
        },
      };
    });
  };
  const onRegisterHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const data = {
        name: formData.fname.value,
        last_name: formData.lname.value,
        username: formData.username.value,
        email: formData.email.value,
        password: formData.password.value,
        password_confirmation: formData.cPassword.value,
      };

      dispatch(registerData(data));
    } else {
    }
  };
  let isFormValid = true;
  for (const key in formData) {
    isFormValid = isFormValid && formData[key].valid;
  }
  return (
    <>
      <div
        className="c-app c-default-layout flex-row align-items-center"
        style={{ marginTop: "5%" }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={12} lg={7} xl={6} sm={12}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={onRegisterHandler}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    {state.message.isRegistered && (
                      <RAlert alert={state.message} />
                    )}
                    <div className="mb-3">
                      <RInput
                        iconName="cil-user"
                        name="First Name"
                        auto="firstname"
                        id="fname"
                        icon={true}
                        value={formData.fname.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                      />
                      {!formData.fname.valid && formData.fname.touched && (
                        <Error error={formData.fname.error} />
                      )}
                    </div>
                    <div className="mb-3">
                      <RInput
                        iconName="cil-user"
                        name="Last Name"
                        auto="lastname"
                        id="lname"
                        icon={true}
                        value={formData.lname.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                      />
                      {!formData.lname.valid && formData.lname.touched && (
                        <Error error={formData.lname.error} />
                      )}
                    </div>
                    <div className="mb-3">
                      <RInput
                        iconName="cil-user"
                        name="Username"
                        auto="username"
                        icon={true}
                        id="username"
                        value={formData.username.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                      />
                      {!formData.username.valid &&
                        formData.username.touched && (
                          <Error error={formData.username.error} />
                        )}
                    </div>
                    <div className="mb-3">
                      <RInput
                        iconName="@"
                        name="example@gmail.com"
                        auto="email"
                        id="email"
                        icon={false}
                        value={formData.email.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                      />
                      {!formData.email.valid && formData.email.touched && (
                        <Error error={formData.email.error} />
                      )}
                    </div>
                    <div className="mb-3">
                      <RInput
                        iconName="cil-lock-locked"
                        name="Password"
                        auto="password"
                        id="password"
                        icon={true}
                        value={formData.password.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                        append={true}
                        click={onPasswordGenerateHandler}
                      />
                      {!formData.password.valid &&
                        formData.password.touched && (
                          <Error error={formData.password.error} />
                        )}
                    </div>
                    <div className="mb-3">
                      <RInput
                        iconName="cil-lock-locked"
                        name="Confirm Password"
                        auto="confirm password"
                        icon={true}
                        id="cPassword"
                        value={formData.cPassword.value}
                        change={onInputChangeHandler}
                        control={true}
                        blur={onInputBlurHandler}
                        append={false}
                      />
                      {!formData.cPassword.valid &&
                        formData.cPassword.touched && (
                          <Error error={formData.cPassword.error} />
                        )}
                    </div>
                    <RButton
                      name="Create Account"
                      color="success"
                      block={true}
                      type="submit"
                      loading={state.isLoading}
                      disabled={!isFormValid}
                    />
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <CRow>
                    <div>
                      If you have already an account with us, please
                      <Link to="/login"> Login here</Link>
                    </div>
                    {/* <CCol xs="12" sm="6">
                      <CButton className="btn-facebook mb-1" block>
                        <span>facebook</span>
                      </CButton>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CButton className="btn-twitter mb-1" block>
                        <span>twitter</span>
                      </CButton>
                    </CCol> */}
                  </CRow>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Register;
