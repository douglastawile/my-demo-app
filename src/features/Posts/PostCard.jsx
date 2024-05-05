/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Comment from "./Comment";

export default function PostCard({ postData }) {
  return (
    <Card className="shadow-sm my-2">
      <Card.Header>
        <Image
          src={postData.authorPhoto}
          alt="Author"
          roundedCircle
          width="40"
        />
        <span className="ms-2">{postData.author}</span>
        <small className="ms-auto text-muted float-end my-2">
          {new Date(postData.timestamp).toDateString()}
        </small>
      </Card.Header>
      <Card.Body>
        <Card.Title>{postData.title}</Card.Title>
        <Card.Text>{postData.content}</Card.Text>
        {postData.image && (
          <Image src={postData.image} className=" rounded " alt="Post" fluid />
        )}
        <Row className="mt-3">
          <Col>
            <Button variant="light">
              <i className="fas fa-thumbs-up"></i> Like ({postData.likeCount})
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <i className="fas fa-comments"></i> Comments (
              {postData.commentCount})
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="p-0">
        <Comment />
      </Card.Footer>
    </Card>
  );
}
