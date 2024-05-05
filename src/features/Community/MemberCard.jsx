/* eslint-disable react/prop-types */
import { Card, Image } from "react-bootstrap";

const MemberCard = ({ memberData }) => {
  return (
    <Card className="shadow-lg rounded">
      <Image
        src={memberData.photo}
        alt={memberData.name}
        roundedCircle
        className="card-img-top w-50 img-fluid mx-auto d-block"
      />
      <Card.Body>
        <Card.Title>{memberData.name}</Card.Title>
        <Card.Text>
          <span>
            <strong>Subjects taught: </strong>
            {memberData.subjects.join(", ")}
          </span>{" "}
          <br />
          <span>
            <strong>Location: </strong>
            {memberData.location}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
