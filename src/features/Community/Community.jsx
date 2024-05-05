import { Container, Row, Col } from "react-bootstrap";
import MemberCard from "./MemberCard";
import userOne from "../../assets/05(2).jpg";
import userTwo from "../../assets/default.png";
import userThree from "../../assets/doug.jpg";
import userFour from "../../assets/isaah.jpg";

const Community = () => {
  const members = [
    {
      id: 1,
      name: "Queeny Takyi Ansah",
      photo: userOne,
      subjects: ["Math", "Science"],
      location: "Kumasi",
    },
    {
      id: 2,
      name: "Effah Richard",
      photo: userTwo,
      subjects: ["English", "History"],
      location: "Afram Plane",
    },
    {
      id: 3,
      name: "Douglas Tawile",
      photo: userThree,
      subjects: ["Math", "ICT"],
      location: "Tamale",
    },
    {
      id: 3,
      name: "Issah Abubakar",
      photo: userFour,
      subjects: ["Math", "ICT"],
      location: "Tamale",
    },
  ];

  return (
    <Container>
      <h3 className="mb-4 mt-2 text-center">Our Community</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {members.map((member) => (
          <Col key={member.id}>
            <MemberCard memberData={member} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Community;
