import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { userStoreAction } from "src/store/store";
import { getUserData } from "src/store/user-slice";
import UserEditModal from "../Modal/UserEditModal";
import UserTableBody from "./UserTableBody";
const AllUsers = () => {
  const mapStateToProps = (state) => {
    return {
      isUserDataLoaded: state.userStore.isUserDataLoaded,
      userData: state.userStore.userData,
      reRunComponent: state.userStore.reRunComponent,
    };
  };
  const state = useSelector(mapStateToProps);

  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunComponent.isDataChanged) {
      const data = {
        param: state.reRunComponent.queryParam,
      };
      dispatch(getUserData(data));
    }
  }, [
    state.reRunComponent.isDataChanged,
    state.reRunComponent.queryParam,
    dispatch,
  ]);
  const pageChangeHandler = (url) => {
    if (url) {
      const param = url.split("?")[1];
      dispatch(userStoreAction.updateParam({ param }));
      const data = {
        param,
      };
      dispatch(getUserData(param));
    }
  };
  return (
    <>
      <UserEditModal />
      {!state.isUserDataLoaded && <Loader />}
      {state.isUserDataLoaded && (
        <CTable
          header={[
            "#",
            "First Name",
            "Email",
            "Job Title",
            "Phone Number",
            "Role",
            "Posts",
            "Comments",
            "likes",
            "Status",
            "Action",
          ]}
        >
          <UserTableBody body={state.userData.data} />
        </CTable>
      )}
      {state.isUserDataLoaded && (
        <Pagination body={state.userData} change={pageChangeHandler} />
      )}
    </>
  );
};
export default AllUsers;
