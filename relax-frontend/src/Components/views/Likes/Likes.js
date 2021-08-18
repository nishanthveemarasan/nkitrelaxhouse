import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPostLikeData } from "src/store/user-slice";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import LTableBody from "./Table/LTableBody";
const Likes = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.userStore.likes,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      param: state.data.param,
    };
    dispatch(getPostLikeData(data));
  }, [state.data.param]);
  return (
    <>
      {!state.data.isDataLoaded && <Loader />}
      {state.data.isDataLoaded && (
        <CTable
          header={[
            "#",
            "Title",
            "Content",
            "Date Created",
            "Comments",
            "Likes",
            "status",
          ]}
        >
          <LTableBody body={state.data.data} />
        </CTable>
      )}
    </>
  );
};
export default Likes;
