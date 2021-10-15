import { useSelector, useDispatch } from "react-redux";
import CModal from "src/Components/UI/Modal/CModal";
import { commentStoreAction } from "src/store/store";
const CContentModal = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.commentStore.showContentModel,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(commentStoreAction.closeCommentContent());
  };
  return (
    <CModal
      onShow={state.data.isModalOpen}
      size="md"
      heading={state.data.ModalHeading}
      action={false}
      onClose={closeModalHandler}
    >
      <p className="font-italic font-weight-bolder">{state.data.content}</p>
    </CModal>
  );
};
export default CContentModal;
