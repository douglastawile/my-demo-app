import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

import defaultPhoto from "../assets/default.png";

const TeacherNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>Teacher Connect</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/addPost"}>
              <Nav.Link>Add Post</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"questions"}>
              <Nav.Link>Questions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/community"}>
              <Nav.Link>Community</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="tertiary" id="dropdown-basic">
                <Image
                  src={defaultPhoto}
                  width="30"
                  height="30"
                  roundedCircle
                  alt="Profile Image"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>My Name</Dropdown.Item>
                <LinkContainer to={"/profile"}>
                  <Dropdown.Item>My Profile</Dropdown.Item>
                </LinkContainer>
                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3" className="text-danger">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TeacherNavbar;
