import { Spinner } from "react-bootstrap";
const CButtonSpinner = () => {
  return (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </>
  );
};
export default CButtonSpinner;
