import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = (props) => {
  const order = props.orderDetails;
  const totalAmout = props.total;
  const subTotalCount = order.reduce((acc, el) => acc + el.count, 0);
  const subTotalAmount = order.reduce((acc, el) => acc + el.totalPrice, 0);
  const descountAmount = order.reduce((acc, el) => acc + el.totalDiscount, 0);
  return (
    <>
      <OrderSummaryItem
        heading="Sub Totals"
        value={`${subTotalCount} Items`}
        amount={subTotalAmount}
      />
      <OrderSummaryItem
        heading="Discount"
        value={`-`}
        amount={`-${descountAmount}`}
      />
      <OrderSummaryItem
        heading="Shipping Method"
        value={`Delivery`}
        amount={"165.55"}
      />
      <hr />
      <OrderSummaryItem heading="Total" value={``} amount={totalAmout} />
    </>
  );
};
export default OrderSummary;
