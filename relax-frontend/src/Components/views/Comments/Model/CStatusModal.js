import { useSelector, useDispatch } from "react-redux";
import CAlert from "src/Components/UI/Alert/CAlert";
import CModal from "src/Components/UI/Modal/CModal";
import { changeCommentStatus } from "src/store/comment-slice";
import { commentStoreAction } from "src/store/store";
const CStatusModel = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.commentStore.commentModal,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(commentStoreAction.closeCommentModal());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: state.data.id,
      action: state.data.modalAction,
    };
    dispatch(changeCommentStatus(data));
  };

  return (
    <>
      <CModal
        onShow={state.data.isModalOpen}
        heading={state.data.modalHeading}
        variant={state.data.color}
        action={state.data.modalAction}
        onClose={modalCloseHandler}
        onSubmitHandler={onSubmitHandler}
        size="md"
        loading={state.data.isLoading}
        width="20%"
        showButton={state.data.isDataUpdated ? false : true}
      >
        <CAlert color={state.data.color} text={state.data.modalBody} />
      </CModal>
    </>
  );
};
export default CStatusModel;
