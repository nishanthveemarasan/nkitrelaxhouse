import { CInputGroup, CInput, CInputGroupAppend } from "@coreui/react";
import SButton from "../SButton";
const SInputGroup = (props) => {
  return (
    <CInputGroup>
      <CInput
        type={props.type}
        placeholder={props.placeholder}
        style={{ padding: props.padding }}
        value={props.value}
        onChange={props.change}
      />
      {props.append && <CInputGroupAppend>{props.button}</CInputGroupAppend>}
    </CInputGroup>
  );
};
export default SInputGroup;
