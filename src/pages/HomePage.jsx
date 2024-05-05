import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../features/TeacherProfile/ProfileCard";
import PostsSection from "../features/Posts/PostsSection";
import FindTeacher from "../features/TeacherProfile/FindTeacher";

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3} className="d-md-block d-none">
          {" "}
          {/* Responsive Profile */}
          <ProfileCard />
        </Col>
        <Col xs={12} md={6}>
          <PostsSection />
        </Col>
        <Col xs={12} md={3}>
          <FindTeacher />
        </Col>
      </Row>
    </Container>
  );
}
