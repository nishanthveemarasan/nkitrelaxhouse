import { useEffect } from "react";
import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import { getUpperCaseString } from "src/service/customService";
import { getDate } from "src/custom-functions";
const PersonalInfo = (props) => {
  const data = props.body;
  const {
    inputValue: fname,
    setInputValue: setFname,
    inputChangeHandler: fNameChangeHandler,
  } = useFormValidate();
  const {
    inputValue: lname,
    setInputValue: setLname,
    inputChangeHandler: lNameChangeHandler,
  } = useFormValidate();
  const {
    inputValue: email,
    setInputValue: setEmail,
    inputChangeHandler: emailChangeHandler,
  } = useFormValidate();
  const {
    inputValue: username,
    setInputValue: setUsername,
    inputChangeHandler: usernameChangeHandler,
  } = useFormValidate();
  const {
    inputValue: role,
    setInputValue: setRole,
    inputChangeHandler: roleChangeHandler,
  } = useFormValidate();
  const {
    inputValue: createDate,
    setInputValue: setCreateDate,
    inputChangeHandler: createDateChangeHandler,
  } = useFormValidate();

  useEffect(() => {
    if (data) {
      setFname(data.name);
      setLname(data.last_name);
      setEmail(data.email);
      setUsername(data.username);
      setRole(getUpperCaseString(data.roles, " "));
      setCreateDate(getDate(data.created_at));
    }
  }, [setFname, setLname, setEmail, setUsername, setRole, setCreateDate, data]);
  //  console.log(data.name);
  return (
    <Card color="primary" header="Personal Information">
      <Form>
        <CRow>
          <FormInputLabel
            label="First Name"
            type="text"
            readOnly={false}
            md={6}
            sm={12}
            value={fname}
            change={fNameChangeHandler}
          />
          <FormInputLabel
            label="Last Name"
            type="text"
            readOnly={false}
            md={6}
            sm={12}
            value={lname}
            change={lNameChangeHandler}
          />
        </CRow>
        <CRow>
          <FormInputLabel
            label="Email"
            type="email"
            readOnly={true}
            md={12}
            sm={12}
            value={email}
            change={emailChangeHandler}
          />
        </CRow>
        <CRow>
          <FormInputLabel
            label="User Name"
            type="text"
            readOnly={true}
            md={6}
            sm={12}
            value={username}
            change={usernameChangeHandler}
          />
          <FormInputLabel
            label="User Role"
            type="text"
            readOnly={true}
            md={6}
            sm={12}
            value={role}
            change={roleChangeHandler}
          />
        </CRow>
        <CRow>
          <FormInputLabel
            label="Created At"
            type="text"
            readOnly={true}
            md={6}
            sm={12}
            value={createDate}
            change={createDateChangeHandler}
          />
        </CRow>
        <CRow>
          <CCol md={12} sm={12} className="text-right">
            <CButton
              color="success"
              width="30%"
              type="submit"
              loading={false}
              name="update"
            />
          </CCol>
        </CRow>
      </Form>
    </Card>
  );
};
export default PersonalInfo;
