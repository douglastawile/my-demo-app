/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const MemberCard = ({ memberData }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    // Toggle the following state
    setIsFollowing(!isFollowing);
    // In your actual app, update backend data and user's following list
  };

  return (
    <Card className="h-100">
      <Image
        src={memberData.photo}
        alt={memberData.name}
        roundedCircle
        className="card-img-top w-50 img-fluid mx-auto d-block my-2"
      />{" "}
      {/* Make card fill the height of its container */}
      <Link to={`/profile/${memberData.id}`}>
        {" "}
        {/* Make card a link to profile page */}
      </Link>
      <Card.Body>
        <Card.Title>{memberData.name}</Card.Title>
        <Card.Text>
          {memberData.subjects.join(", ")} <br />
          {memberData.location}
        </Card.Text>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${memberData.id}`}>
              {memberData.bio.substring(0, 80)}... {/* Short bio preview */}
            </Tooltip>
          }
        >
          <Button variant="link" className="text-decoration-none">
            About
          </Button>
        </OverlayTrigger>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          variant={isFollowing ? "outline-secondary" : "primary"}
          onClick={handleFollowClick}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default MemberCard;
