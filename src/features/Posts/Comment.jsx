/* eslint-disable react/prop-types */

import { Card, Image } from "react-bootstrap";
import AddComment from "./AddComment";
import authorTwo from "../../assets/12.jpg";

const commentData = {
  commentId: 1, // Simple ID for this example
  author: "Jane Smith",
  authorPhoto: authorTwo,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ornare justo, eu volutpat nulla gravida non.",
  timestamp: "2023-12-21T09:45:00Z",
  canDelete: false, // Add delete permission for future implementation
};

const Comment = () => {
  return (
    <>
      <AddComment />
      <h4 className="my-2 text-center fw-bold">Comments</h4>
      <Card className="my-3 mx-2 shadow-sm rounded-4">
        <Card.Body>
          <div className="d-flex">
            <Image
              src={commentData.authorPhoto}
              alt="Author"
              roundedCircle
              width="30"
              height="30"
              className="me-2"
            />
            <div>
              <h6 className="mb-0">{commentData.author}</h6>
              <small className="text-muted">{commentData.timestamp}</small>
            </div>
          </div>
          <Card.Text className="mt-2 text-muted">
            {commentData.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <button className="btn btn-sm btn-outline-danger">Delete</button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Comment;
