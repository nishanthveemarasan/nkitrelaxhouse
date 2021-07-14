import { useSelector, useDispatch } from "react-redux";
import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { getDate } from "src/custom-functions";
import classes from "./Order.module.css";
import { CBadge } from "@coreui/react";
import { getSaleModalData } from "src/store/sale-slice";
import CSpinner from "src/Components/UI/Spinner/CSpinner";

const OrderTableBody = (props) => {
  const mapStateToProps = (state) => {
    return {
      saleModalData: state.saleStore.saleModalData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const updateHandler = (id) => {
    const data = {
      action: "Update",
      id: props.body[id].id,
      saleData: props.body[id],
    };
    dispatch(getSaleModalData(data));
  };
  const deleteHandler = (id) => {
    const data = {
      action: "Delete",
      id: props.body[id].id,
      saleData: props.body[id],
    };
    dispatch(getSaleModalData(data));
  };

  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.order_number}</td>
            <td>{row.itemname}</td>
            <td>{row.sellcount}</td>
            <td>{getStatus(row.sell_type)}</td>
            <td>{getDate(row.updated_at)}</td>
            <td>
              {state.saleModalData.saleId === row.id &&
                state.saleModalData.actionType === "Update" &&
                (state.saleModalData.isLoading ? (
                  <CSpinner class={classes.view} size="sm" />
                ) : (
                  <ActionButton
                    value="Update"
                    class={classes.view}
                    name="cil-align-center"
                    action={() => updateHandler(i)}
                  />
                ))}
              {(state.saleModalData.saleId !== row.id ||
                state.saleModalData.actionType !== "Update") && (
                <ActionButton
                  value="Update"
                  class={classes.view}
                  name="cil-align-center"
                  action={() => updateHandler(i)}
                />
              )}{" "}
              |{" "}
              <ActionButton
                value="Delete"
                class={classes.delete}
                name="cil-trash"
                action={() => deleteHandler(i)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default OrderTableBody;

const getStatus = (value) => {
  switch (value) {
    case "received":
      return <CBadge color="danger">Received</CBadge>;
    case "processing":
      return <CBadge color="warning">Processing</CBadge>;
    case "packed":
      return <CBadge color="info">Packed</CBadge>;
    case "sent":
      return <CBadge color="success">Sent</CBadge>;
    default:
      return false;
  }
};
