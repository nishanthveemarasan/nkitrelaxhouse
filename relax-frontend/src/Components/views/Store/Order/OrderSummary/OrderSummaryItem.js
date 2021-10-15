import { CCol, CContainer, CRow } from "@coreui/react";

const OrderSummaryItem = (props) => {
  return (
    <CContainer>
      <CRow>
        <CCol sm={3}>
          <div style={{ fontSize: "140%", fontWeight: "bolder" }}>
            {props.heading}
          </div>
        </CCol>
        <CCol sm={6}>
          <div style={{ fontSize: "140%", fontWeight: "bolder" }}>
            {props.value}
          </div>
        </CCol>
        <CCol sm={3}>
          <div
            style={{
              fontSize: "140%",
              fontWeight: "bolder",
              textAlign: "right",
            }}
          >
            {props.amount}
          </div>
        </CCol>
      </CRow>
    </CContainer>
  );
};
export default OrderSummaryItem;
