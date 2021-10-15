import { useEffect } from "react";
import CTable from "src/Components/Table/CTable";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import { getStoreProductData } from "src/store/shop-slice";
import SPTableBody from "./SPTableBody";
import Pagination from "src/Components/UI/Table/Pagination";
import { shopStoreAction } from "src/store/store";
import { useHistory } from "react-router";
const StoreItems = () => {
  const history = useHistory();
  const mapStateToProps = (state) => {
    return {
      data: state.shopStore.shop.product,
      isDataReceived: state.shopStore.shop.isDataReceived,
      param: state.shopStore.shop.param,
      reRunComponent: state.shopStore.reRunComponent.isDataChanged,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunComponent) {
      dispatch(getStoreProductData(state.param));
    }
  }, [state.reRunComponent, dispatch, state.param]);

  const pageChangeHandler = (url) => {
    if (url) {
      const param = url.split("?")[1];

      dispatch(shopStoreAction.updateParam({ param }));
      dispatch(getStoreProductData(param));
    }
  };
  const onActionHandler = (id) => {
    const productID = state.data.data[id].id;
    // dispatch(shopStoreAction.getSingleProductData(data));
    history.push(`/admin/store/edit/${productID}`);
  };
  return (
    <>
      {!state.isDataReceived && <Loader />}
      {state.isDataReceived && (
        <CTable
          header={[
            "#",
            "Image",
            "Product",
            "Price",
            "Offer Price",
            "Color",
            "Height",
            "Status",
            "Action",
          ]}
        >
          <SPTableBody body={state.data.data} action={onActionHandler} />
        </CTable>
      )}
      {state.isDataReceived && (
        <Pagination body={state.data} change={pageChangeHandler} />
      )}
    </>
  );
};
export default StoreItems;
