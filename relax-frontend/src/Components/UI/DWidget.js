import { CWidgetProgressIcon } from "@coreui/react";

import CIcon from "@coreui/icons-react";
const DWidget = (props) => {
  return (
    <>
      <CWidgetProgressIcon
        header={props.value}
        text={props.text}
        color={props.color}
        inverse
      >
        <CIcon name={props.icon} height="36" />
      </CWidgetProgressIcon>
    </>
  );
};
export default DWidget;
