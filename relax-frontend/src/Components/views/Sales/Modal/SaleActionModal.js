import CModal from "src/Components/UI/Modal/CModal";
import { useSelector, useDispatch } from "react-redux";
import { closeSaleModal } from "src/store/sale-slice";
import CAlert from "src/Components/UI/Alert/CAlert";
const SaleActionModal = () => {
  const mapStateToProps = (state) => {
    return {
      saleModalData: state.saleStore.saleModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(closeSaleModal());
  };
  return (
    <CModal
      onShow={state.saleModalData.isModalOpen}
      heading={state.saleModalData.modalHeading}
      variant={state.saleModalData.variant}
      action={state.saleModalData.modalAction}
      size="md"
      onClose={modalCloseHandler}
    >
      {state.saleModalData.saleId}
      {state.saleModalData.modalAction === "Cancel" && (
        <CAlert
          color="danger"
          text={`please confirm that you are going to Cencel the Order(${state.saleModalData.modalData?.order_number} )`}
        />
      )}
    </CModal>
  );
};
export default SaleActionModal;
