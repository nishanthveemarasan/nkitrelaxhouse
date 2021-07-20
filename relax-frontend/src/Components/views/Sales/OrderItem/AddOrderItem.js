import { Row, Col } from "react-bootstrap";
import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { FormInput } from "src/Components/UI/Input/FormInput";
import classes from "./AddOrderItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { saleStoreAction } from "src/store/store";
import { useState } from "react";
const AddOrderItem = () => {
  const [quantity, setQuantity] = useState(0);
  const mapStateToProps = (state) => {
    return {
      addOrder: state.saleStore.addOrder,
    };
  };
  const onNameChangeHandler = (e, i) => {
    console.log(i);
  };
  const quantityChangeHandler = (e, id) => {
    const count = +e.target.value;
    setQuantity(count);
    const data = {
      id,
      quantity: quantity,
    };
    dispatch(saleStoreAction.updateOrderItem(data));
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log(id);
    dispatch(saleStoreAction.removeOrderItemCart({ id }));
  };
  return (
    <>
      {state.addOrder.orderItem.map((item, i) => {
        return (
          <Row key={i}>
            <FormInput
              type="text"
              label="Product Name"
              readOnly={true}
              value={item.name}
              change={(e) => onNameChangeHandler(e, i)}
              size={4}
            />
            <FormInput
              type="number"
              label="Quantity"
              readOnly={false}
              value={item.quantity}
              change={(e) => quantityChangeHandler(e, i)}
              size={2}
            />
            <Col md={2}>
              <ActionButton
                value="Remove from List"
                name="cil-trash"
                class={classes.delete}
                action={() => removeItem(i)}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};
export default AddOrderItem;
