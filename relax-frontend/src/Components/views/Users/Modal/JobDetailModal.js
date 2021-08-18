import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CAlert from "src/Components/UI/Alert/CAlert";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import FormSelect from "src/Components/UI/Input/FormSelect";
import CModal from "src/Components/UI/Modal/CModal";
import { getDate } from "src/custom-functions";
import useFormValidate from "src/Hooks/input-validation";
import { userStoreAction } from "src/store/store";
import { updateJobModalData } from "src/store/user-slice";
const JobDetailModal = () => {
  const {
    inputValue: jobId,
    setInputValue: setJobId,
    inputChangeHandler: jobIdChangeHandler,
    inputBlurHandler: jobIdBlurHandler,
  } = useFormValidate();
  const {
    inputValue: title,
    setInputValue: setTitle,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useFormValidate();
  const {
    inputValue: date,
    setInputValue: setDate,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
  } = useFormValidate();
  const {
    inputValue: type,
    setInputValue: setType,
    inputChangeHandler: typeChangeHandler,
    inputBlurHandler: typeBlurHandler,
  } = useFormValidate();
  const mapStateToProps = (state) => {
    return {
      data: state.userStore.jobModal,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.data.details) {
      setTitle(state.data.details.title);
      setDate(state.data.details.joinedDate);
      setType(state.data.details.jobType);
      setJobId(state.data.details.jobId);
    }
  }, [setTitle, setDate, setType, setJobId, state.data]);
  const onModalCloseHandler = () => {
    dispatch(userStoreAction.closeJobModal());
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: state.data.id,
      jobData: {
        job_title: title,
        job_started_date: date,
        job_type: type,
      },
    };
    dispatch(updateJobModalData(data));
  };
  return (
    <CModal
      onShow={state.data.isModalOpen}
      heading="View/Update the job Details"
      variant="primary"
      action="Update"
      loading={state.data.isLoading}
      onClose={onModalCloseHandler}
      onSubmitHandler={onSubmitHandler}
      width="20%"
    >
      {state.data.isDataUpdated && (
        <CAlert color={state.data.color} text={state.data.msg} />
      )}
      <FormInputLabel
        type="text"
        readOnly={true}
        label="Employee ID"
        value={jobId}
        change={jobIdChangeHandler}
        blur={jobIdBlurHandler}
      />
      <FormInputLabel
        type="text"
        readOnly={false}
        label="Job Title"
        value={title}
        change={titleChangeHandler}
        blur={titleBlurHandler}
      />
      <FormInputLabel
        type="date"
        readOnly={false}
        label="Joined Date"
        value={date}
        change={dateChangeHandler}
        blur={dateBlurHandler}
      />
      <FormSelect
        label="Job Type"
        value={type}
        options={["Part-Time", "Full-Time"]}
        readOnly={false}
        change={typeChangeHandler}
        blur={typeBlurHandler}
      />
    </CModal>
  );
};
export default JobDetailModal;
