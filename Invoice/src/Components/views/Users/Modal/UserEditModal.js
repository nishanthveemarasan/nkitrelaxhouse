import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CAlert from "src/Components/UI/Alert/CAlert";
import FormSelect from "src/Components/UI/Input/FormSelect";
import CModal from "src/Components/UI/Modal/CModal";
import useFormValidate from "src/Hooks/input-validation";
import {
  closeUserModal,
  disableUser,
  editUserRole,
} from "src/store/user-slice";
const UserEditModal = () => {
  const {
    inputValue: role,
    inputChangeHandler: onRoleChange,
    setInputValue: setRole,
  } = useFormValidate();
  const mapStateToProps = (state) => {
    return {
      userModalData: state.userStore.userModalData,
      updateUserData: state.userStore.updateUserData,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    if (state.userModalData.actionType === "assign") {
      setRole(state.userModalData.userRole);
    }
  }, [state.userModalData, setRole]);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state.userModalData.actionType === "assign") {
      const data = {
        id: state.userModalData.userId,
        role: role,
      };
      dispatch(editUserRole(data));
    } else {
      const data = {
        id: state.userModalData.userId,
        currentStatus: state.userModalData.userStatus,
      };
      dispatch(disableUser(data));
    }
  };

  const modalCloseHandler = () => {
    dispatch(closeUserModal());
  };
  return (
    <CModal
      onShow={state.userModalData.isModalOpen}
      heading={state.userModalData.modalHeading}
      variant={state.userModalData.variant}
      action={state.userModalData.modalAction}
      size="md"
      onSubmitHandler={onSubmitHandler}
      loading={state.updateUserData.isLoading}
      onClose={modalCloseHandler}
      showButton={
        state.updateUserData.isDataUpdated &&
        state.userModalData.actionType !== "assign"
          ? false
          : true
      }
    >
      {state.updateUserData.isDataUpdated && (
        <CAlert
          color={state.updateUserData.color}
          text={state.updateUserData.msg}
        />
      )}
      {state.userModalData.actionType === "delete" &&
        !state.updateUserData.isDataUpdated && (
          <CAlert
            color="danger"
            text={`please confirm that you are going to this ${
              state.userModalData.userStatus === "1" ? "DISABLE" : "ENABLE"
            } User`}
          />
        )}
      {state.userModalData.actionType === "assign" && (
        <>
          <FormSelect
            label="User Roles"
            value={role}
            change={onRoleChange}
            options={["Admin", "User"]}
            readOnly={false}
          />
        </>
      )}
    </CModal>
  );
};
export default UserEditModal;
