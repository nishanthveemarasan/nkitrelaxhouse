import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CAlert from "src/Components/UI/Alert/CAlert";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import FormSelect from "src/Components/UI/Input/FormSelect";
import FormTextArea from "src/Components/UI/Input/FormTextArea";
import CModal from "src/Components/UI/Modal/CModal";
import useFormValidate from "src/Hooks/input-validation";
import {
  closePostModal,
  deletePostModalData,
  updatePostModalData,
} from "src/store/post.slice";
const PostEditModal = () => {
  const {
    inputValue: athorName,
    setInputValue: setAuthorName,
    inputChangeHandler: authorNameChangeHandler,
    inputBlurHandler: authorNameBlurHandler,
  } = useFormValidate();
  const {
    inputValue: postTitle,
    setInputValue: setPostTitle,
    inputChangeHandler: postTitleChangeHandler,
    inputBlurHandler: postTitleBlurHandler,
  } = useFormValidate();
  const {
    inputValue: postContent,
    setInputValue: setPostContent,
    inputChangeHandler: postContentChangeHandler,
    inputBlurHandler: postContentBlurHandler,
  } = useFormValidate();
  const {
    inputValue: postType,
    setInputValue: setType,
    inputChangeHandler: postTypeChangeHandler,
    inputBlurHandler: postTypeBlurHandler,
  } = useFormValidate();
  const mapStateToProps = (state) => {
    return {
      postModalData: state.postStore.postModalData,
      updatePostModalData: state.postStore.updatePostModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    if (state.postModalData.ModalAction === "Update") {
      setAuthorName(state.postModalData.postData.name);
      setPostTitle(state.postModalData.postData.title);
      setPostContent(state.postModalData.postData.content);
      setType(state.postModalData.postData.status);
    }
  }, [
    state.postModalData,
    setAuthorName,
    setPostTitle,
    setPostContent,
    setType,
  ]);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state.postModalData.ModalAction === "Update") {
      const data = {
        id: state.postModalData.postId,
        title: postTitle,
        content: postContent,
        status: postType,
      };
      dispatch(updatePostModalData(data));
    } else {
      const data = {
        id: state.postModalData.postId,
      };
      dispatch(deletePostModalData(data));
    }
  };

  const modalCloseHandler = () => {
    dispatch(closePostModal());
  };
  return (
    <CModal
      onShow={state.postModalData.isModalOpen}
      heading={state.postModalData.ModalHeading}
      variant={state.postModalData.variant}
      action={state.postModalData.ModalAction}
      onClose={modalCloseHandler}
      size="lg"
      onSubmitHandler={onSubmitHandler}
      loading={state.updatePostModalData.isLoading}
    >
      {state.updatePostModalData.isUpdated && (
        <CAlert
          color={state.updatePostModalData.variant}
          text={state.updatePostModalData.msg}
        />
      )}
      {state.postModalData.ModalAction === "Delete" &&
        !state.updatePostModalData.isUpdated && (
          <CAlert
            color="danger"
            text={`please confirm that you are going to Cencel the Order`}
          />
        )}
      {state.postModalData.ModalAction === "Update" && (
        <>
          <FormInputLabel
            type="text"
            readOnly={true}
            label="Author Name"
            value={athorName}
            change={authorNameChangeHandler}
            blur={authorNameBlurHandler}
          />
          <FormInputLabel
            type="text"
            readOnly={false}
            label="Post Title"
            value={postTitle}
            change={postTitleChangeHandler}
            blur={postTitleBlurHandler}
          />
          <FormTextArea
            type="textarea"
            labelName="Post Content"
            readOnly={false}
            rows="5"
            change={postContentChangeHandler}
            value={postContent}
            blur={postContentBlurHandler}
          ></FormTextArea>
          <FormSelect
            label="Post Type"
            value={postType}
            change={postTypeChangeHandler}
            options={["Publish", "Draft"]}
            blur={postTypeBlurHandler}
          />
        </>
      )}
    </CModal>
  );
};
export default PostEditModal;
/**
 * comments_count: "12"
content: "This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post."
created_at: "2020-11-06T09:43:44.000000Z"
id: 4
likes_count: "0"
name: "Nishanthan"
status: "publish"
title: "3rd Post has been Updated"
type: "disabled"
updated_at: "2021-06-15T06:26:42.000000Z"
user_id: "1"
 */
