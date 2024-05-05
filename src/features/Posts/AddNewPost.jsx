import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Image,
  Container,
  Card,
} from "react-bootstrap";

const AddNewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Function to handle form submission (TODO)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the post data (postTitle, postContent, imageFile) to your backend
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="my-4 mx-auto">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Add New Post</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="postTitle">
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="postContent">
                  <Form.Label>Post Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label className="btn btn-secondary my-2">
                    Choose Image
                  </Form.Label>
                  <Form.Control
                    hidden
                    type="file"
                    onChange={handleImageChange}
                  />
                </Form.Group>
                {previewImage && (
                  <Image
                    src={previewImage}
                    value={imageFile}
                    alt="Preview"
                    fluid
                  />
                )}
                <Button
                  className="my-3 rounded-4"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewPost;
