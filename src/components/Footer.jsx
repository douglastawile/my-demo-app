import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TeacherFooter = () => {
  return (
    <footer className="d-flex flex-column bg-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Teacher Connect
          </Col>
          <Col className="text-center">
            <a href="/about">About Us</a> | <a href="/contact">Contact Us</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default TeacherFooter;
