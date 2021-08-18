import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow,
} from "@coreui/react";
import CAlert from "src/Components/UI/Alert/CAlert";
import useFormValidate from "src/Hooks/input-validation";
import { useSelector, useDispatch } from "react-redux";
import RInput from "src/Components/UI/Register/RInput";
import CButton from "src/Components/UI/Button/Button";
import Error from "src/Components/UI/Error/Error";
import { LoginRequest } from "src/store/login-store";
import img from "../../../assets/img/logo.png";
const Login = (props) => {
  const {
    inputValue: username,
    inputIsTouched: usernameIsTouched,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameResetHandler,
  } = useFormValidate();
  const {
    inputValue: password,
    inputIsTouched: passwordIsTouched,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordResetHandler,
  } = useFormValidate();
  const [valid, setValid] = useState("");
  const mapStateToProps = (state) => {
    return {
      isLoading: state.loginStore.isLoading,
      message: state.loginStore.message,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  let isFormValid = false;
  const usernameIsValid = username.trim() !== "";
  const usernameIsInvalid = !usernameIsValid && usernameIsTouched;

  const passwordIsValid = password.trim() !== "";
  const passwordIsInvalid = !passwordIsValid && passwordIsTouched;
  if (usernameIsValid && passwordIsValid) {
    isFormValid = true;
  }
  const onLoginHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setValid("Some Fields are missing!!!!");
    } else {
      const data = {
        userName: username,
        password,
      };
      dispatch(LoginRequest(data, props.history));
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "6%" }}
      >
        <CRow>
          {state.message.isLoggedIn && (
            <CAlert color={state.message.color} text={state.message.msg} />
          )}
        </CRow>
      </div>
      <div
        className="c-app c-default-layout flex-row align-items-center"
        style={{ marginTop: "-7%" }}
      >
        <CContainer>
          <CRow className="justify-content-center mb-3">
            <img
              src={img}
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "3px",
                height: "7vh",
              }}
            />
          </CRow>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={onLoginHandler}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      {valid && <p className="text-danger">* {valid}</p>}
                      <RInput
                        class="mb-3"
                        iconName="cil-user"
                        type="text"
                        name="User name"
                        auto="username"
                        icon={true}
                        value={username}
                        change={usernameChangeHandler}
                        blur={usernameBlurHandler}
                      />
                      {usernameIsInvalid && (
                        <Error error="Username is required" />
                      )}
                      <RInput
                        class="mb-3"
                        iconName="cil-lock-locked"
                        name="Password"
                        auto="password"
                        type="password"
                        icon={true}
                        value={password}
                        change={passwordChangeHandler}
                        blur={passwordBlurHandler}
                      />
                      {passwordIsInvalid && (
                        <Error error="Password is required" />
                      )}
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            type="submit"
                            width="30%"
                            block={false}
                            name="Login"
                            loading={state.isLoading}
                          />
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton
                            color="link"
                            type="button"
                            width="40%"
                            block={false}
                            name=" Forgot password?"
                            loading={false}
                          />
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        If you dont have account, please Resgister and enjoy
                        with our applicaiton
                      </p>
                      <Link to="/register">
                        <CButton
                          color="success"
                          type="submit"
                          width="30%"
                          block={false}
                          name="Register Now!"
                          loading={state.isLoading}
                        />
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;
