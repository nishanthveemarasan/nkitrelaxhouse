import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import Pagination from "src/Components/UI/Table/Pagination";
import { getProductData } from "src/store/product-slice";
import CTableBody from "./CTableBody";
import CTable from "src/Components/Table/CTable";
import ProductModal from "./ProductModal";
import CButton from "src/Components/UI/Button/Button";
import { productStoreAction } from "src/store/store";
import CreateModal from "./CreateModal";

const Product = () => {
  const mapStateToProps = (state) => {
    return {
      isDataChanged: state.productStore.isDataChanged,
      productData: state.productStore.productData,
      reRunData: state.productStore.reRunData,
    };
  };
  const state = useSelector(mapStateToProps);

  const dispatch = useDispatch();
  useEffect(() => {
    if (state.reRunData) {
      dispatch(getProductData());
    }
  }, [dispatch, state.reRunData]);

  const pageChangeHandler = (url) => {
    const getParam = url.split("?")[1];
    dispatch(getProductData(getParam));
  };

  const openCreateModalHandler = () => {
    dispatch(productStoreAction.addProductModal({ data: true }));
  };
  return (
    <>
      <ProductModal />
      <CreateModal />
      <div className="text-right mb-3">
        <CButton
          name="Add Product"
          color="success"
          click={openCreateModalHandler}
        />
      </div>
      {!state.isDataChanged && <Loader />}
      {state.isDataChanged && (
        <CTable
          header={[
            "#",
            "Item Name",
            "Item Code",
            "Current Stock",
            "Last Updated",
            "Action",
          ]}
        >
          <CTableBody body={state.productData.data} />
        </CTable>
      )}
      {state.isDataChanged && (
        <Pagination body={state.productData} change={pageChangeHandler} />
      )}
    </>
  );
};
export default Product;
