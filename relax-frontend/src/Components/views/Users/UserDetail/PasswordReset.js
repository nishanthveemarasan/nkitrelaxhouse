import { useState } from "react";
import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormGroup from "src/Components/UI/Input/FormGroup";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import { generateRandomPassword } from "src/service/customService";
import useFormValidate from "src/Hooks/input-validation";
import CAlert from "src/Components/UI/Alert/CAlert";
import { sendPostAdminApi } from "src/service/appService";
const PasswordReset = (props) => {
  const data = props.body;
  const {
    inputValue: password,
    setInputValue: setPassword,
    inputChangeHandler: passwordChangeHandler,
  } = useFormValidate();
  const {
    inputValue: password_confirmation,
    inputChangeHandler: passwordConfirmationChangeHandler,
  } = useFormValidate();
  const [view, setView] = useState("view");
  const [type, setType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    msg: "",
    dataReceived: false,
    color: "",
  });
  const generateRandomPasswordHandler = () => {
    const password = generateRandomPassword(15);
    setPassword(password);
  };

  const onViewHandler = () => {
    if (view === "view") {
      setView("hide");
      setType("text");
    } else if (view === "hide") {
      setView("view");
      setType("password");
    }
  };

  const onResetPasswordHandler = async (e) => {
    e.preventDefault();
    const passwordData = {
      user_id: data.id,
      password,
      password_confirmation,
    };
    if (
      password &&
      password_confirmation &&
      password === password_confirmation
    ) {
      setLoading(true);
      setResponse((prevState) => {
        return {
          ...prevState,
          dataReceived: false,
        };
      });
      const response = await sendPostAdminApi(
        "users/password-reset",
        passwordData
      );
      setResponse((prevState) => {
        return {
          ...prevState,
          dataReceived: true,
          msg: response.data.data.msg,
          color: "success",
        };
      });
      setLoading(false);
    } else {
      setResponse((prevState) => {
        return {
          ...prevState,
          dataReceived: true,
          msg: "Password does not match!!",
          color: "danger",
        };
      });
    }
  };
  return (
    <Card color="primary" header="Change Password">
      {response.dataReceived && (
        <CAlert color={response.color} text={response.msg} />
      )}
      <Form onSubmit={onResetPasswordHandler}>
        <CRow>
          <FormGroup
            placeholder="New Password"
            type={type}
            group={view}
            md={8}
            sm={12}
            value={password}
            change={passwordChangeHandler}
            viewHandler={onViewHandler}
          />
          <CCol md={4} sm={12} className="text-right">
            <CButton
              color="light"
              width="30%"
              type="button"
              loading={false}
              name="generate"
              block={true}
              click={generateRandomPasswordHandler}
            />
          </CCol>
        </CRow>
        <CRow>
          <FormInputLabel
            label={false}
            type={type}
            readOnly={false}
            md={8}
            sm={12}
            placeHolder="Confirm Password"
            value={password_confirmation}
            change={passwordConfirmationChangeHandler}
          />
        </CRow>
        <CRow>
          <CCol md={12} sm={12} className="text-right">
            <CButton
              color="success"
              width="30%"
              type="submit"
              loading={loading}
              name="Reset"
            />
          </CCol>
        </CRow>
      </Form>
    </Card>
  );
};

export default PasswordReset;
