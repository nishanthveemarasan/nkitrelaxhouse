import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getCommentData } from "src/store/comment-slice";
import { commentStoreAction } from "src/store/store";
import CContentModal from "./Model/CContentModal";
import CStatusModel from "./Model/CStatusModal";
import CTableBody from "./Table/CTableBody";
const Comment = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.commentStore.tableData,
      reRun: state.commentStore.reRunComponent,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRun.isDataChanged) {
      const data = {
        id: "all",
        param: state.reRun.queryParam,
      };
      dispatch(getCommentData(data));
    }
  }, [state.reRun.isDataChanged, state.reRun.queryParam, dispatch]);
  const pageChangeHandler = (url) => {
    if (url) {
      const param = url.split("?")[1];
      dispatch(commentStoreAction.updateParam({ param }));
      const data = {
        id: "all",
        param,
      };
      dispatch(getCommentData(data));
    }
  };
  return (
    <>
      <CStatusModel />
      <CContentModal />
      {!state.data.isDataLoaded && <Loader />}
      {state.data.isDataLoaded && (
        <>
          <CTable
            header={[
              "#",
              "Author",
              "Post Title",
              "Post Content",
              "Comment",
              "Date Created",
              "Status",
              "Action",
            ]}
          >
            <CTableBody body={state.data.data.data} />
          </CTable>
          <Pagination body={state.data.data} change={pageChangeHandler} />
        </>
      )}
    </>
  );
};
export default Comment;
