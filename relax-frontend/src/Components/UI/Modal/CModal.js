import { Form, Button, Modal, Spinner } from "react-bootstrap";

const CModal = (props) => {
  return (
    <Modal
      show={props.onShow}
      onHide={props.onClose}
      backdrop="static"
      keyboard={false}
      size={props.size}
    >
      <Form onSubmit={props.onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          {props.showButton && (
            <Button
              variant={props.variant}
              type="submit"
              style={{ width: props.width }}
            >
              {props.loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {!props.loading && props.action}
            </Button>
          )}

          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default CModal;
