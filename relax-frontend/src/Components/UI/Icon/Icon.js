import CIcon from "@coreui/icons-react";
const Icon = (props) => {
  return (
    <>
      <CIcon
        name={props.name}
        size="2xl"
        className={props.class}
        onClick={props.action}
      />
    </>
  );
};
export default Icon;
