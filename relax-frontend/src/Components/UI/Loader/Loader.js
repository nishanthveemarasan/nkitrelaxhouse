import classes from "./Loader.module.css";
import { CSpinner } from "@coreui/react";
const Loader = () => {
  return (
    <div className={classes.spinner}>
      <CSpinner color="primary" variant="grow" size="lg" />
    </div>
  );
};
export default Loader;
