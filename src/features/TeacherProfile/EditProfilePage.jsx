import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import defaultPhoto from "../../assets/default.png";
import DeleteAccountModal from "./DeleteAccount";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjects: "", // Comma-separated list for now
    location: "",
    bio: "",
    profilePhoto: "",
  });
  const [errors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="edit-profile-container">
      <Row>
        <Col xs={12} sm={4}>
          <Card className="mt-5 shadow-sm">
            <Card.Body>
              <DeleteAccountModal />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={8}>
          <h2 className="text-center">Account Settings</h2>
          <Card className="mt-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={4} className="text-center">
                    <Image
                      src={formData.profilePhoto || defaultPhoto}
                      roundedCircle
                      width="150"
                    />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </Col>
                  <Col md={8}>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="subjects" className="mb-3">
                      <Form.Label>Subjects:</Form.Label>
                      <Form.Control
                        type="text"
                        name="subjects"
                        value={formData.subjects}
                        onChange={handleChange}
                        isInvalid={!!errors.subjects}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subjects}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="location" className="mb-3">
                      <Form.Label>Location:</Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        isInvalid={!!errors.location}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.location}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="bio" className="mb-3">
                      <Form.Label>Bio:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        isInvalid={!!errors.bio}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.bio}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
