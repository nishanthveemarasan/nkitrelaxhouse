import { useEffect } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import CButton from "src/Components/UI/Button/Button";
import { getItemData, searchItems } from "src/store/item-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import CTable from "src/Components/Table/CTable";
import ItemTableBody from "./Table/ItemTableBody";
import Pagination from "src/Components/UI/Table/Pagination";
import CAlert from "src/Components/UI/Alert/CAlert";
import CTableHeader from "src/Components/UI/Table/CTableHeader";
import { itemStoreAction } from "src/store/store";
import classes from "./Product.module.css";
const Item = () => {
  const dispatch = useDispatch();

  const mapStateToProps = (state) => {
    return {
      row: state.itemStore.row,
      isPageLoading: state.itemStore.isPageLoading,
      isButtonLoading: state.itemStore.isButtonLoading,
      isDataChanged: state.itemStore.isDataChanged,
      products: state.itemStore.products,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    if (state.isDataChanged) {
      dispatch(getItemData("", state.row));
    }
  }, [state.isDataChanged, dispatch, state.row]);

  const pageChangeHandler = (url) => {
    dispatch(itemStoreAction.sendRequest());
    dispatch(getItemData(url, state.row));
  };

  const rowChangeHandler = (row) => {
    dispatch(itemStoreAction.sendRequest());
    dispatch(getItemData("", row));
  };
  const searchHandler = (queryString) => {
    dispatch(searchItems(queryString));
  };
  return (
    <>
     
      {!state.isPageLoading && <Loader class={classes.spinner} />}
      <Container style={{ marginTop: "10%" }}>
        <div>
          <h2 className="badge badge-warning">.</h2>
          <span className="font-italic font-weight-bold text-muted ml-2">
            these highlighted items have less than 25 in the stocks at this
            moment
          </span>
          <br />
          <h2 className="badge badge-danger">.</h2>
          <span className="font-italic font-weight-bold text-muted ml-2">
            these highlighted items are not available in the stocks at this
            moment
          </span>
        </div>
        <ButtonGroup>
          <CButton color="primary" name="Excel" width="30%" loading={false} />
          <CButton color="primary" name="PDF" width="30%" loading={false} />
          <CButton color="primary" name="Print" width="30%" loading={false} />
        </ButtonGroup>
      </Container>
      <CTableHeader
        rowChangeHandler={rowChangeHandler}
        searchHandler={searchHandler}
      />

      {state.isPageLoading &&
        (state.products.data.length > 0 ? (
          <>
            <Container style={{ marginTop: "2%" }}>
              <CTable
                header={[
                  "#",
                  "Item Name",
                  "Item Code",
                  "Current Stock",
                  "Last Updated",
                ]}
              >
                <ItemTableBody data={state.products} />
              </CTable>
              <Pagination body={state.products} change={pageChangeHandler} />
            </Container>
          </>
        ) : (
          <Container style={{ marginTop: "2%" }}>
            <CAlert color="primary" text="No Data Found" class="text-center" />
          </Container>
        ))}
    </>
  );
};
export default Item;
