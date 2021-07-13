import { CTooltip } from "@coreui/react";
const ToolTip = (props) => {
  return (
    <CTooltip content={props.value}>
      <span>{props.children}</span>
    </CTooltip>
  );
};
export default ToolTip;
