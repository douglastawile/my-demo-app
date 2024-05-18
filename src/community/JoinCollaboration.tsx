import { useState } from "react";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function JoinCollaborationComponent() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [collabDetails, setCollabDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: {
    target: { name: unknown; value: unknown };
  }) => {
    const { name, value } = e.target;
    setCollabDetails({ ...collabDetails, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Join Collaboration Details:", collabDetails);
    // Add logic to handle the submission of collaboration details
    setIsOpen(false);
    navigate("/confirmation");
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="mx-auto my-16">
        Join Collaboration
      </Button>

      <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Join Collaboration</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="collabName" value="Your Name" />
              </div>
              <TextInput
                id="collabName"
                type="text"
                name="name"
                onChange={handleInputChange}
                placeholder="John Doe"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="collabEmail" value="Your Email" />
              </div>
              <TextInput
                id="collabEmail"
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="collabMessage" value="Your Message" />
              </div>
              <TextInput
                id="collabMessage"
                type="text"
                name="message"
                onChange={handleInputChange}
                placeholder="I would like to join..."
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JoinCollaborationComponent;
