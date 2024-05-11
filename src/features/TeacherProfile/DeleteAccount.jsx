import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteAccountModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleConfirmDelete = () => {
    // Your account deletion logic here
    // ... e.g., API call to backend
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete Account
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete your account? This action is
            irreversible.
          </p>
          <p>
            All your data, posts, and connections will be permanently removed.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
