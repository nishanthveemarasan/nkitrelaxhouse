import { useEffect } from "react";
import CModal from "src/Components/UI/Modal/CModal";
import { useSelector, useDispatch } from "react-redux";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import useFormValidate from "src/Hooks/input-validation";
import FormTextArea from "src/Components/UI/Input/FormTextArea";
import FormSelect from "src/Components/UI/Input/FormSelect";
import { addPostData, closePostModal } from "src/store/post.slice";
import CAlert from "src/Components/UI/Alert/CAlert";
const CreateModal = () => {
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
      modalData: state.postStore.addPostModalData,
      updatedData: state.postStore.updatePostModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    setAuthorName("Nishanth");
  }, [setAuthorName]);
  const modalCloseHandler = () => {
    dispatch(closePostModal());
    setPostTitle("");
    setPostContent("");
    setType("");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: postTitle,
      content: postContent,
      status: postType,
    };
    dispatch(addPostData(data));
    setPostTitle("");
    setPostContent("");
    setType("");
  };
  return (
    <CModal
      onShow={state.modalData.isModalOpen}
      onClose={modalCloseHandler}
      heading={state.modalData.modalHeading}
      variant={state.modalData.variant}
      action={state.modalData.modalActionButton}
      size="md"
      onSubmitHandler={onSubmitHandler}
      loading={state.modalData.isLoading}
      showButton={true}
    >
      {state.updatedData.isUpdated && (
        <CAlert
          color={state.updatedData.variant}
          text={state.updatedData.msg}
        />
      )}
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
    </CModal>
  );
};

export default CreateModal;
