import { CButton, CSpinner } from "@coreui/react";
const RButton = (props) => {
  return (
    <CButton
      type={props.type}
      color={props.color}
      block={props.block}
      size="md"
    >
      {props.loading ? (
        <CSpinner animation="border" variant="light" size="sm" />
      ) : (
        props.name
      )}
    </CButton>
  );
};
export default RButton;
