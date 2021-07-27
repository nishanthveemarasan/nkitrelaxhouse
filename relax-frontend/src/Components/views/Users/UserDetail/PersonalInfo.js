import { useEffect, useState } from "react";
import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import { getUpperCaseString } from "src/service/customService";
import { getDate } from "src/custom-functions";
import CAlert from "src/Components/UI/Alert/CAlert";
import { sendPostAdminApi } from "src/service/appService";
import classes from "./UserDetail.module.css";
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
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    msg: "",
    dataReceived: false,
    color: "",
  });
  const [selectedImage, setSelectedImage] = useState({
    profileImage: "",
    src: "",
  });
  useEffect(() => {
    if (data) {
      setFname(data.name);
      setLname(data.last_name);
      setEmail(data.email);
      setUsername(data.username);
      setRole(getUpperCaseString(data.roles, " "));
      setCreateDate(getDate(data.created_at));
      setSelectedImage((prevState) => {
        return {
          ...prevState,
          src: data.profile_photo_path,
        };
      });
    }
  }, [
    setFname,
    setLname,
    setEmail,
    setUsername,
    setRole,
    setCreateDate,
    setSelectedImage,
    data,
  ]);

  const onSubmitPersonalInfoHandler = (e) => {
    e.preventDefault();
    const data = {
      name: fname,
      last_name: lname,
    };
    if (!fname || !lname) {
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
      sendPostAdminApi("users/update-a-user", data)
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
  const fileSelectedHandler = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setSelectedImage((prevState) => {
      return {
        ...prevState,
        profileImage: event.target.files[0],
        src: url,
      };
    });
    var formData = new FormData();
    formData.append("file", event.target.files[0]);
    sendPostAdminApi("users/update-prifile-image", formData)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Card color="primary" header="Personal Information">
      {response.dataReceived && (
        <CAlert color={response.color} text={response.msg} />
      )}
      <Form onSubmit={onSubmitPersonalInfoHandler}>
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
          <FormInputLabel
            label="Change Profile"
            type="file"
            readOnly={false}
            md={8}
            sm={12}
            change={fileSelectedHandler}
          />
          <CCol xs={4} sm={3} md={4} lg={4} xl={4}>
            <img src={selectedImage.src} className={classes["user-image"]} />
          </CCol>
        </CRow>
        {props.show && (
          <CRow className="mt-3">
            <CCol md={12} sm={12} className="text-left">
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
export default PersonalInfo;
