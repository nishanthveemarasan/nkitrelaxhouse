import { CCol, CRow } from "@coreui/react";
import { Form } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import { useEffect, useState } from "react";
import Card from "src/Components/UI/Card/Card";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import { getDate } from "src/custom-functions";
import { getUpperCaseString } from "src/service/customService";
const Job = (props) => {
  const data = props.body;
  const {
    inputValue: jobTitle,
    setInputValue: setJobTitle,
    inputChangeHandler: jobTitleChangeHandler,
  } = useFormValidate();
  const {
    inputValue: jobStartedDate,
    setInputValue: setJobStartedDate,
    inputChangeHandler: jobStartedDateChangeHandler,
  } = useFormValidate();
  const {
    inputValue: jobType,
    setInputValue: setJobType,
    inputChangeHandler: jobTypeChangeHandler,
  } = useFormValidate();

  useEffect(() => {
    if (data) {
      setJobTitle(data.job_title);
      if (data.job_started_date) {
        setJobStartedDate(getDate(data.job_started_date));
      } else {
        setJobStartedDate("N/A");
      }
      if (data.job_type) {
        setJobType(getUpperCaseString(data.job_type, "_"));
      } else {
        setJobType("N/A");
      }
    }
  }, [setJobTitle, data]);
  return (
    <Card color="primary" header="Job Information">
      <Form>
        <CRow>
          <FormInputLabel
            label="Job Title"
            type="text"
            readOnly={true}
            md={12}
            sm={12}
            value={jobTitle}
            change={jobTitleChangeHandler}
          />
        </CRow>
        <CRow>
          <FormInputLabel
            label="Joined Date"
            type="text"
            readOnly={true}
            md={6}
            sm={12}
            value={jobStartedDate}
            change={jobStartedDateChangeHandler}
          />
          <FormInputLabel
            label="Job Type"
            type="text"
            readOnly={true}
            md={6}
            sm={12}
            value={jobType}
            change={jobTypeChangeHandler}
          />
        </CRow>
      </Form>
    </Card>
  );
};
export default Job;
