import {
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import CButton from "../Button/Button";
const RInput = (props) => {
  return (
    <CInputGroup className={props.class}>
      <CInputGroupPrepend>
        <CInputGroupText>
          {props.icon ? <CIcon name={props.iconName} /> : props.iconName}
        </CInputGroupText>
      </CInputGroupPrepend>
      {props.control ? (
        <CInput
          type={props.type}
          placeholder={props.name}
          autoComplete={props.auto}
          value={props.value}
          onChange={(e) => props.change(e, props.id)}
          onBlur={(e) => props.blur(e, props.id)}
        />
      ) : (
        <CInput
          type={props.type}
          placeholder={props.name}
          autoComplete={props.auto}
          value={props.value}
          onChange={props.change}
          onBlur={props.blur}
        />
      )}
      {props.append && (
        <CInputGroupAppend>
          <CButton
            control={true}
            color="light"
            width="30%"
            type="button"
            loading={false}
            name="generate"
            block={true}
            click={props.click}
          />
        </CInputGroupAppend>
      )}
    </CInputGroup>
  );
};
export default RInput;
