import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import { useSelector } from "react-redux";
import CheckoutBox from "../UI/CheckoutBox/CheckoutBox";
import CheckoutCartItems from "../UI/CheckoutCartItems";
const Checkout = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.cartStore.cartData,
    };
  };
  const state = useSelector(mapStateToProps);
  const totalAmount = state.data.reduce((acc, el) => acc + el.totalPrice, 0);

  return (
    <CContainer>
      {state.data.length === 0 && <p>NO ITEM </p>}
      {state.data.length > 0 && (
        <>
          <CRow>
            <CCol sm={12} md={12} lg={9}>
              {state.data.map((item, index) => {
                return (
                  <div key={index}>
                    <CheckoutCartItems item={item} />
                  </div>
                );
              })}
            </CCol>
            <CCol
              sm={12}
              md={12}
              lg={3}
              className="mt-md-5 mt-sm-5 mt-lg-0 mt-xl-0"
            >
              <CheckoutBox data={state.data} />
            </CCol>
          </CRow>
        </>
      )}
    </CContainer>
  );
};
export default Checkout;
