import { useSelector, useDispatch } from "react-redux";
import { getDate } from "src/custom-functions";
import classes from "./Product.module.css";
import { getModalData } from "src/store/product-slice";
import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import CSpinner from "src/Components/UI/Spinner/CSpinner";
const CTableBody = (props) => {
  const mapStateToProps = (state) => {
    return {
      initialLoad: state.productStore.initialLoad,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const viewHandler = (id) => {
    const data = {
      id,
      action: "Update",
    };
    dispatch(getModalData(data));
  };
  const deleteHandler = (id) => {
    const data = {
      id,
      action: "Delete",
    };
    dispatch(getModalData(data));
  };
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.itemname}</td>
            <td>{row.itemcode}</td>
            <td>{row.count}</td>
            <td>{getDate(row.updated_at)}</td>
            <td>
              {state.initialLoad.id === row.id &&
                state.initialLoad.action === "Update" &&
                (state.initialLoad.loading ? (
                  <CSpinner class={classes.view} size="sm" />
                ) : (
                  <ActionButton
                    value="Update"
                    class={classes.view}
                    name="cil-align-center"
                    action={viewHandler.bind(null, row.id)}
                  />
                ))}
              {(state.initialLoad.id !== row.id ||
                state.initialLoad.action !== "Update") && (
                <ActionButton
                  value="Update"
                  class={classes.view}
                  name="cil-align-center"
                  action={viewHandler.bind(null, row.id)}
                />
              )}
              |
              {state.initialLoad.id === row.id &&
                state.initialLoad.action === "Delete" &&
                (state.initialLoad.loading ? (
                  <CSpinner class={classes.delete} size="sm" />
                ) : (
                  <ActionButton
                    value="Delete"
                    class={classes.delete}
                    name="cil-trash"
                    action={deleteHandler.bind(null, row.id)}
                  />
                ))}
              {(state.initialLoad.id !== row.id ||
                state.initialLoad.action !== "Delete") && (
                <ActionButton
                  value="Update"
                  class={classes.delete}
                  name="cil-trash"
                  action={deleteHandler.bind(null, row.id)}
                />
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default CTableBody;
