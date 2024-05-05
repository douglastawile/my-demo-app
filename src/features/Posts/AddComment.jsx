/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const AddComment = ({ onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onCommentSubmit({
        // Assume you'll need these, adjust as needed
        author: "Current User",
        authorPhoto: "/profile-placeholder.png",
        timestamp: new Date().toISOString(),
        content: commentText,
        // Other properties you might need
      });
      setCommentText(""); // Clear the input field after submitting
    } else {
      alert("Please enter a comment.");
    }
  };

  return (
    <Card className="my-3 mx-2 shadow-sm">
      <Card.Body>
        <Card.Title>Add a Comment</Card.Title>
        <p>Share your thoughts with the world.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="commentText">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Add your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Add Comment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddComment;
