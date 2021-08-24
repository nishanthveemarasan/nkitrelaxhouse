import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";

const SButton = (props) => {
  return (
    <CButton
      color={props.color}
      disabled={props.disabled}
      onClick={props.click}
      block={props.block}
      className={props.class}
      type={props.type}
    >
      {props.showIcon && <CIcon name={props.iconName} />}
      {props.showIcon && props.name}
      {!props.showIcon && props.name}
    </CButton>
  );
};
export default SButton;
