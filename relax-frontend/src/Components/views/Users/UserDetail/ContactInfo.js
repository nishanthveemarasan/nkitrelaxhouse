import { useEffect } from "react";
import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
const ContactInfo = (props) => {
  const data = props.body;
  const {
    inputValue: phone,
    setInputValue: setPhone,
    inputChangeHandler: phoneChangeHandler,
  } = useFormValidate();
  const {
    inputValue: city,
    setInputValue: setCity,
    inputChangeHandler: cityChangeHandler,
  } = useFormValidate();
  const {
    inputValue: country,
    setInputValue: setCountry,
    inputChangeHandler: countryChangeHandler,
  } = useFormValidate();
  const {
    inputValue: zip,
    setInputValue: setZip,
    inputChangeHandler: zipChangeHandler,
  } = useFormValidate();

  useEffect(() => {
    if (data) {
      setPhone(data.phone);
      setCity(data.city);
      setCountry(data.country);
      setZip(data.postal_code);
    }
  }, [setPhone, setCity, setCity, setZip, data]);
  return (
    <Card color="primary" header="Contact Information">
      <Form>
        <CRow>
          <FormInputLabel
            label="Phone Number"
            type="text"
            readOnly={false}
            md={12}
            sm={12}
            value={phone}
            change={phoneChangeHandler}
          />
        </CRow>
        <CRow>
          <FormInputLabel
            label="ZIP Code"
            type="text"
            readOnly={false}
            md={4}
            sm={12}
            value={zip}
            change={zipChangeHandler}
          />
          <FormInputLabel
            label="City"
            type="text"
            readOnly={false}
            md={4}
            sm={12}
            value={city}
            change={cityChangeHandler}
          />
          <FormInputLabel
            label="Country"
            type="text"
            readOnly={false}
            md={4}
            sm={12}
            value={country}
            change={countryChangeHandler}
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
export default ContactInfo;
