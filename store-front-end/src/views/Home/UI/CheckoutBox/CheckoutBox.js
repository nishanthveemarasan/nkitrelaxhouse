import SButton from "../SButton";
import CheckoutBoxItem from "./CheckoutBoxItem";

const CheckoutBox = (props) => {
  const cartData = props.data;
  const itemCount = cartData.length;
  const subTotalCount = cartData.reduce((acc, el) => acc + el.count, 0);
  const subTotalAmount = cartData.reduce((acc, el) => acc + el.totalPrice, 0);
  const discount = Number.parseFloat("0");
  const deliveryCharge = Number.parseFloat("165.55");
  const total = subTotalAmount + discount + deliveryCharge;
  return (
    <>
      <CheckoutBoxItem name="Item Count" value={itemCount} />
      <CheckoutBoxItem name="Total SubItems Count" value={subTotalCount} />
      <CheckoutBoxItem name="Sub Total Amount" value={`$${subTotalAmount}`} />
      <CheckoutBoxItem name="Discount" value={`$${discount}`} />
      <CheckoutBoxItem name="Delevery Fee" value={`$${deliveryCharge}`} />
      <CheckoutBoxItem
        name="Total"
        value={`$${Number.parseFloat(total)}`}
        class="bg-success py-3 text-white"
      />

      <div>
        <SButton
          name="Checkout"
          block={true}
          color="dark"
          class="py-3 font-weight-bolder"
        />
      </div>
    </>
  );
};
export default CheckoutBox;
