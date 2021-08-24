const CheckoutBoxItem = (props) => {
  return (
    <>
      <div className={`clearfix font-weight-bolder ${props.class}`}>
        <div className="float-left ml-1">{props.name}</div>
        <div className="float-right mr-1">{props.value}</div>
      </div>
      <hr />
    </>
  );
};
export default CheckoutBoxItem;
