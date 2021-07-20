import classes from "./Loader.module.css";
import { CSpinner } from "@coreui/react";
const Loader = (props) => {
  return (
    <div className={props.class ? props.class : classes.spinner}>
      <CSpinner color="primary" variant="grow" size="lg" />
    </div>
  );
};
export default Loader;
