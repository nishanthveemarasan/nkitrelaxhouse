import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
const RInput = (props) => {
  return (
    <CInputGroup className={props.class}>
      <CInputGroupPrepend>
        <CInputGroupText>
          {props.icon ? <CIcon name={props.iconName} /> : props.iconName}
        </CInputGroupText>
      </CInputGroupPrepend>
      <CInput
        type={props.type}
        placeholder={props.name}
        autoComplete={props.auto}
        value={props.value}
        onChange={props.change}
        onBlur={props.blur}
      />
    </CInputGroup>
  );
};
export default RInput;
