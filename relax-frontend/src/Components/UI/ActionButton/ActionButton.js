import ToolTip from "src/Components/UI/Tooltip/ToolTip";
import Icon from "src/Components/UI/Icon/Icon";
const ActionButton = (props) => {
  return (
    <ToolTip value={props.value}>
      <Icon class={props.class} name={props.name} action={props.action} />
    </ToolTip>
  );
};
export default ActionButton;
