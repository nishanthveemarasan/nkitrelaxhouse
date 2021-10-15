import { CButtonGroup, CButtonToolbar } from "@coreui/react";
import CButton from "src/Components/UI/Button/Button";

const SButtonGroup = (props) => {
  return (
    <CButtonGroup className="mr-2">
      <CButton
        color="dark"
        width="30%"
        type="submit"
        name={props.color}
        block={false}
        width="30%"
      />
      <CButton
        color="danger"
        width="30%"
        type="button"
        name="X"
        block={false}
        width="30%"
        control={props.control}
        input={props.input}
        index={props.index}
        click={props.click}
      />
    </CButtonGroup>
  );
};
export default SButtonGroup;
