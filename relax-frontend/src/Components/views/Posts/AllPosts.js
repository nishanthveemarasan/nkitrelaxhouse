import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/UI/Table/CTable";
import Pagination from "src/Components/UI/Table/Pagination";
import { getPostData } from "src/store/post.slice";
import AllPostBodyTable from "./AllPostBodyTable";
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
    if (state.reRunPostComponent) {
      dispatch(getPostData());
    }
  }, [state.reRunPostComponent, dispatch]);

  const pageChangeHandler = (url) => {
    if (url) {
      const getParam = url.split("?")[1];
      dispatch(getPostData(getParam));
    }
  };
  return (
    <>
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
