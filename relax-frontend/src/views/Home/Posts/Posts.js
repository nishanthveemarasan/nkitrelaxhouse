import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import Pagination from "src/Components/UI/Table/Pagination";
import { getPostData } from "src/store/post.slice";
import SinglePost from "./SinglePost/SinglePost";
const Posts = () => {
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
      const data = {
        id: "all",
        param,
      };
      dispatch(getPostData(data));
    }
  };
  return (
    <>
      {!state.isPostDataLoaded && <Loader />}
      {state.isPostDataLoaded && (
        <Container style={{ marginTop: "10%" }}>
          {state.postData.data.length > 0 &&
            state.postData.data.map((row, i) => {
              return (
                <div key={i}>
                  <SinglePost data={row} />{" "}
                </div>
              );
            })}
          {state.isPostDataLoaded && (
            <div className="text-center">
              <Pagination body={state.postData} change={pageChangeHandler} />
            </div>
          )}
        </Container>
      )}
    </>
  );
};
export default Posts;
