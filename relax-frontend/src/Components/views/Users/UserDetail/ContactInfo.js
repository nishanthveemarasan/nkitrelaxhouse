import { useEffect, useState } from "react";
import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import CAlert from "src/Components/UI/Alert/CAlert";
import { sendPostAdminApi } from "src/service/appService";
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
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    msg: "",
    dataReceived: false,
    color: "",
  });
  useEffect(() => {
    if (data) {
      setPhone(data.address.phone);
      setCity(data.address.city);
      setCountry(data.address.country);
      setZip(data.address.postal_code);
    }
  }, [setPhone, setCity, setCity, setZip, data]);

  const onUpdateContactInfoHandler = (e) => {
    e.preventDefault();
    const data = {
      phone,
      postal_code: zip,
      city,
      country,
    };
    console.log(data);
    if (!phone || !zip || !city || !country) {
      setResponse((prevState) => {
        return {
          ...prevState,
          dataReceived: true,
          msg: "Some Fields are missing!!!",
          color: "danger",
        };
      });
    } else {
      setLoading(true);
      setResponse((prevState) => {
        return {
          ...prevState,
          dataReceived: false,
        };
      });
      sendPostAdminApi("users/update-contact-info", data)
        .then((response) => {
          setResponse((prevState) => {
            return {
              ...prevState,
              dataReceived: true,
              msg: response.data.data.msg,
              color: "success",
            };
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
          setLoading(false);
        });
    }
  };
  return (
    <Card color="primary" header="Contact Information">
      {response.dataReceived && (
        <CAlert color={response.color} text={response.msg} />
      )}
      <Form onSubmit={onUpdateContactInfoHandler}>
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
            md={3}
            sm={12}
            value={zip}
            change={zipChangeHandler}
          />
          <FormInputLabel
            label="City"
            type="text"
            readOnly={false}
            md={5}
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
        {props.show && (
          <CRow>
            <CCol md={12} sm={12} className="text-right">
              <CButton
                color="success"
                width="30%"
                type="submit"
                loading={loading}
                name="update"
              />
            </CCol>
          </CRow>
        )}
      </Form>
    </Card>
  );
};
export default ContactInfo;
