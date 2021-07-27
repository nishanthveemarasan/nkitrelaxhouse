import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormGroup from "src/Components/UI/Input/FormGroup";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
const PasswordReset = (props) => {
  const data = props.body;
  //console.log(data);
  return (
    <Card color="primary" header="Change Password">
      <Form>
        <CRow>
          <FormGroup
            placeholder="New Password"
            type="password"
            group="view"
            md={9}
            sm={12}
          />
          <CCol md={3} sm={12} className="text-right">
            <CButton
              color="light"
              width="30%"
              type="button"
              loading={false}
              name="generate"
              block={true}
            />
          </CCol>
        </CRow>
        <CRow>
          <FormInputLabel
            label={false}
            type="text"
            readOnly={false}
            md={9}
            sm={12}
            placeHolder="Confirm Password"
          />
        </CRow>
        <CRow>
          <CCol md={12} sm={12} className="text-right">
            <CButton
              color="success"
              width="30%"
              type="submit"
              loading={false}
              name="Reset"
            />
          </CCol>
        </CRow>
      </Form>
    </Card>
  );
};

export default PasswordReset;
