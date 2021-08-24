import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CButtonGroup } from "@coreui/react";
import { cartStoreAction } from "src/store/store";
import SButton from "./SButton";
const Counter = (props) => {
  const [count, setCount] = useState(0);
  const mapStateToProps = (state) => {
    return {
      cartData: state.cartStore.cartData,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    if (state.cartData.length > 0) {
      const getItem = state.cartData.find(
        (el) => el.id === props.productData.id
      );
      if (getItem) {
        setCount(+getItem.count);
      }
    }
  }, [state.cartData, props.productData]);
  const dispatch = useDispatch();
  const addCounter = () => {
    const setCounter = count + 1;
    const data = {
      id: props.productData.id,
      itemname: props.productData.itemname,
      count: setCounter,
      unitPrice: +props.productData.price,
    };
    setCount(setCounter);
    dispatch(cartStoreAction.addItemToCart({ data }));
  };

  const reductCounter = () => {
    if (count === 0) {
      return;
    } else {
      const setCounter = count - 1;
      const data = {
        id: props.productData.id,
        itemname: props.productData.itemname,
        count: setCounter,
        unitPrice: +props.productData.price,
        totalPrice: +props.productData.price,
      };
      setCount(setCounter);
      dispatch(cartStoreAction.reduceCartItem({ data }));
    }
  };
  return (
    <>
      <CButtonGroup>
        <SButton
          color="primary"
          disabled={props.productData.count > 0 ? false : true}
          name="+"
          click={addCounter}
          type="button"
          showIcon={false}
        />
        <SButton color="secondary" disabled={true} name={count} />
        <SButton
          color="primary"
          disabled={props.productData.count > 0 ? false : true}
          name="-"
          click={reductCounter}
          type="button"
          showIcon={false}
        />
      </CButtonGroup>
    </>
  );
};
export default Counter;
