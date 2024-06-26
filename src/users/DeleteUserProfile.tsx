"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteUserProfile() {
  const [openModal, setOpenModal] = useState(false); // Changed initial state to false

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Delete Account</Button>{" "}
      {/* Updated button text */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete your account?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Once your account is deleted, all your data will be permanently
              removed. This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  // Add your delete account logic here
                }}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
