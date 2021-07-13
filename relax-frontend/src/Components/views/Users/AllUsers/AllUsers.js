import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getUserData } from "src/store/user-slice";
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
    if (state.reRunComponent) {
      dispatch(getUserData());
    }
  }, [state.reRunComponent, dispatch]);
  const pageChangeHandler = (url) => {
    if (url) {
      const getParam = url.split("?")[1];
      dispatch(getUserData(getParam));
    }
  };
  return (
    <>
      {!state.isUserDataLoaded && <Loader />}
      {state.isUserDataLoaded && (
        <CTable
          header={[
            "#",
            "First Name",
            "Last Name",
            "User Name",
            "Email",
            "Job Title",
            "Phone Number",
            "Role",
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
