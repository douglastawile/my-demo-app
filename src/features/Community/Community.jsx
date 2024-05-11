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
      bio: `Queeny Takyi Ansah is a passionate software engineer with a love for technology and innovation. With a background in computer science and years of experience in the industry, Alex enjoys tackling complex problems and turning them into elegant solutions. Outside of work, Alex is an avid reader, enjoys hiking in nature, and loves experimenting with new recipes in the kitchen. Passionate about learning and personal growth, Alex is always seeking out new challenges and opportunities to expand their knowledge and skills`,
    },
    {
      id: 2,
      name: "Effah Richard",
      photo: userTwo,
      subjects: ["English", "History"],
      location: "Koforidua",
      bio: `Effah Richard is a passionate software engineer with a love for technology and innovation. With a background in computer science and years of experience in the industry, Alex enjoys tackling complex problems and turning them into elegant solutions. Outside of work, Alex is an avid reader, enjoys hiking in nature, and loves experimenting with new recipes in the kitchen. Passionate about learning and personal growth, Alex is always seeking out new challenges and opportunities to expand their knowledge and skills`,
    },
    {
      id: 3,
      name: "Douglas Tawile",
      photo: userThree,
      subjects: ["Math", "ICT"],
      location: "Tamale",
      bio: `Douglas Tawile is a passionate software engineer with a love for technology and innovation. With a background in computer science and years of experience in the industry, Alex enjoys tackling complex problems and turning them into elegant solutions. Outside of work, Alex is an avid reader, enjoys hiking in nature, and loves experimenting with new recipes in the kitchen. Passionate about learning and personal growth, Alex is always seeking out new challenges and opportunities to expand their knowledge and skills`,
    },
    {
      id: 3,
      name: "Issah Abubakar",
      photo: userFour,
      subjects: ["Science", "ICT"],
      location: "Tamale",
      bio: `Issah Abubakar is a passionate software engineer with a love for technology and innovation. With a background in computer science and years of experience in the industry, Alex enjoys tackling complex problems and turning them into elegant solutions. Outside of work, Alex is an avid reader, enjoys hiking in nature, and loves experimenting with new recipes in the kitchen. Passionate about learning and personal growth, Alex is always seeking out new challenges and opportunities to expand their knowledge and skills`,
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
