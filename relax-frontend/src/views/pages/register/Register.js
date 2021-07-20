import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CButton,
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
import useFormValidate from "src/Hooks/input-validation";
import Error from "src/Components/UI/Error/Error";
import { registerData } from "src/store/register-slice";
import RAlert from "src/Components/UI/Alert/RAlert";

const Register = () => {
  const mapStateToProps = (state) => {
    return {
      isLoading: state.registerStore.isLoading,
      message: state.registerStore.message,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const {
    inputValue: fname,
    inputIsTouched: fnameIsTouched,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: fnameResetHandler,
  } = useFormValidate();
  const {
    inputValue: lname,
    inputIsTouched: lnameIsTouched,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: lnameResetHandler,
  } = useFormValidate();
  const {
    inputValue: username,
    inputIsTouched: usernameIsTouched,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameResetHandler,
  } = useFormValidate();
  const {
    inputValue: email,
    inputIsTouched: emailIsTouched,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useFormValidate();
  const {
    inputValue: password,
    inputIsTouched: passwordIsTouched,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordResetHandler,
  } = useFormValidate();
  const {
    inputValue: cPassword,
    inputIsTouched: cPasswordIsTouched,
    inputChangeHandler: cPasswordChangeHandler,
    inputBlurHandler: cPasswordBlurHandler,
    reset: cPasswordResetHandler,
  } = useFormValidate();

  let isFormValid = false;
  const fnameIsValid = fname.trim() !== "";
  const fnameIsInvalid = !fnameIsValid && fnameIsTouched;

  const lnameIsValid = lname.trim() !== "";
  const lnameIsInvalid = !lnameIsValid && lnameIsTouched;

  const usernameIsValid = username.trim() !== "";
  const usernameIsInvalid = !usernameIsValid && usernameIsTouched;

  const emailIsValid = email.trim().includes("@");
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  const passwordIsValid = password.trim() !== "";
  const passwordIsInvalid = !passwordIsValid && passwordIsTouched;

  const cPasswordIsValid = cPassword.trim() === password.trim();
  const cPasswordIsInvalid = !cPasswordIsValid && cPasswordIsTouched;

  if (
    fnameIsValid &&
    lnameIsValid &&
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    cPasswordIsValid
  ) {
    isFormValid = true;
  }

  const onRegisterHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const data = {
        name: fname,
        last_name: lname,
        username,
        email,
        password,
        password_confirmation: cPassword,
      };

      dispatch(registerData(data));
      fnameResetHandler("");
      lnameResetHandler("");
      usernameResetHandler("");
      emailResetHandler("");
      passwordResetHandler("");
      cPasswordResetHandler("");
    } else {
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={onRegisterHandler}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {state.message.isRegistered && (
                    <RAlert alert={state.message} />
                  )}
                  <RInput
                    class="mb-3"
                    iconName="cil-user"
                    name="First Name"
                    auto="firstname"
                    icon={true}
                    value={fname}
                    change={fnameChangeHandler}
                    blur={fnameBlurHandler}
                  />
                  {fnameIsInvalid && <Error error="First name is required" />}
                  <RInput
                    class="mb-3"
                    iconName="cil-user"
                    name="Last Name"
                    auto="lastname"
                    icon={true}
                    value={lname}
                    change={lnameChangeHandler}
                    blur={lnameBlurHandler}
                  />
                  {lnameIsInvalid && <Error error="Last name is required" />}
                  <RInput
                    class="mb-3"
                    iconName="cil-user"
                    name="Username"
                    auto="username"
                    icon={true}
                    value={username}
                    change={usernameChangeHandler}
                    blur={usernameBlurHandler}
                  />
                  {usernameIsInvalid && <Error error="Username is required" />}
                  <RInput
                    class="mb-3"
                    iconName="@"
                    name="Email Address"
                    auto="email"
                    icon={false}
                    value={email}
                    change={emailChangeHandler}
                    blur={emailBlurHandler}
                  />
                  {emailIsInvalid && (
                    <Error error="Enter a Valid Email Address" />
                  )}
                  <RInput
                    class="mb-3"
                    iconName="cil-lock-locked"
                    name="Password"
                    auto="password"
                    icon={true}
                    value={password}
                    change={passwordChangeHandler}
                    blur={passwordBlurHandler}
                  />
                  {passwordIsInvalid && (
                    <Error error="Password is required!!" />
                  )}
                  <RInput
                    class="mb-3"
                    iconName="cil-lock-locked"
                    name="Confirm Password"
                    auto="confirm password"
                    icon={true}
                    value={cPassword}
                    change={cPasswordChangeHandler}
                    blur={cPasswordBlurHandler}
                  />
                  {cPasswordIsInvalid && (
                    <Error error="Password does n't match!!" />
                  )}

                  <RButton
                    name="Create Account"
                    color="success"
                    block={true}
                    type="submit"
                    loading={state.isLoading}
                  />
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
