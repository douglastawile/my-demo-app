import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./index.css";
import defaultPhoto from "../../assets/default.png";

const ProfileCard = () => {
  return (
    <Card className="shadow-sm my-2">
      <Card.Body>
        <div className="text-center">
          {" "}
          {/* Center the image */}
          <Image src={defaultPhoto} alt="Profile" roundedCircle width="80" />
        </div>

        <Card.Title className="text-center mt-3">Queeny Takyi Ansah</Card.Title>
        <Card.Subtitle className="text-center text-muted mb-2">
          Math Teacher
        </Card.Subtitle>
        <Card.Text className="text-center text-muted">
          A passionate educator with 5+ years of experience...
        </Card.Text>

        {/* Stats Row -  You might want to visually adjust this */}
        <Row className="mt-3">
          <Col className="text-center">10 Posts</Col>
          <Col className="text-center">50 Following</Col>
          <Col className="text-center">20 Followers</Col>
        </Row>

        <hr />

        <Link
          to="/profile"
          className="btn btn-sm btn-outline-primary d-block mx-auto"
        >
          {/* mx-auto to center the button */}
          View Profile
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
