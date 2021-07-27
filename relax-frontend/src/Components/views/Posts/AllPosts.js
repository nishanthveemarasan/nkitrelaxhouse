import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CButton from "src/Components/UI/Button/Button";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getPostData, openAddPostModal } from "src/store/post.slice";
import { postStoreAction } from "src/store/store";
import AllPostBodyTable from "./AllPostBodyTable";
import CreateModal from "./Modal/CreateModal";
import PostEditModal from "./Modal/PostEditModal";
const AllPosts = () => {
  const mapStateToProps = (state) => {
    return {
      isPostDataLoaded: state.postStore.isPostDataLoaded,
      postData: state.postStore.postData,
      reRunPostComponent: state.postStore.reRunPostComponent,
    };
  };
  const state = useSelector(mapStateToProps);

  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunPostComponent.isDataChanged) {
      const data = {
        id: "all",
        param: state.reRunPostComponent.queryParam,
      };
      dispatch(getPostData(data));
    }
  }, [
    state.reRunPostComponent.isDataChanged,
    dispatch,
    state.reRunPostComponent.queryParam,
  ]);

  const pageChangeHandler = (url) => {
    if (url) {
      const param = url.split("?")[1];
      dispatch(postStoreAction.updateParam({ param }));
      const data = {
        id: "all",
        param,
      };
      dispatch(getPostData(data));
    }
  };
  const openCreateModalHandler = () => {
    dispatch(openAddPostModal());
  };
  return (
    <>
      <CreateModal />
      <PostEditModal />
      <Row>
        <Col sm={12} className="text-right mb-3">
          <CButton
            name="Add Post"
            color="success"
            click={openCreateModalHandler}
            // loading={state.addSaleModalData.isLoading}
          />
        </Col>
      </Row>
      {!state.isPostDataLoaded && <Loader />}
      {state.isPostDataLoaded && (
        <CTable
          header={[
            "#",
            "Author",
            "Title",
            "Content",
            "Date Created",
            "Comments",
            "Likes",
            "Published",
            "Status",
            "Action",
          ]}
        >
          <AllPostBodyTable body={state.postData.data} />
        </CTable>
      )}
      {state.isPostDataLoaded && (
        <Pagination body={state.postData} change={pageChangeHandler} />
      )}
    </>
  );
};
export default AllPosts;
