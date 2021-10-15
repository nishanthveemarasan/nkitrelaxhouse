import { useEffect, useState } from "react";
import Card from "src/Components/UI/Card/Card";
import { CRow, CCol } from "@coreui/react";
import { sendGetAdminApi } from "src/service/appService";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import PasswordReset from "./PasswordReset";
import Job from "./Job";
const UserDetail = () => {
  const [data, setData] = useState({
    data: "",
    changed: true,
  });
  useEffect(async () => {
    if (data.changed) {
      try {
        const response = await sendGetAdminApi("users/get-a-user");
        setData((prevState) => {
          return {
            ...prevState,
            data: response.data.data,
          };
        });
      } catch (error) {
        console.log(error.response);
      }
      // sendGetAdminApi("users/get-a-user")
      //   .then((response) => {
      //     setData((prevState) => {
      //       return {
      //         ...prevState,
      //         data: response.data.data,
      //       };
      //     });
      //   })
      //   .catch();
    }
  }, [data.changed]);
  // console.log(data.data.job_title);
  // console.log(data);
  return (
    <>
      <CRow>
        <CCol md={6} sm={12}>
          <PersonalInfo body={data.data} show={true} />
          <PasswordReset body={data.data} />
        </CCol>
        <CCol md={6} sm={12}>
          <ContactInfo body={data.data} show={true} />
          <Job body={data.data} />
        </CCol>
      </CRow>
    </>
  );
};
export default UserDetail;
/**
 * about_me: null
city: "Hawthorn east"
country: "Australia"
created_at: "2020-11-05T13:58:43.000000Z"
current_team_id: null
email: "nis@gmail.com"
email_verified_at: null
id: 1
job_title: "BackPacker/Bendwood"
last_name: "Veemarasan"
name: "Nishanthan"
phone: "+61402457102"
postal_code: "3123"
profile_photo_path: "http://relaxreact.test/react-backend/storage/app/public/profileImage/download.png"
roles: "admin"
status: "1"
two_factor_recovery_codes: null
two_factor_secret: null
updated_at: "2021-06-28T08:56:13.000000Z"
username: "nisha_veema"

 */
