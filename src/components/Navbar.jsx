import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

import defaultPhoto from "../assets/default.png";

const TeacherNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Teacher Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="addPost">Add Post</Nav.Link>
            <Nav.Link href="questions">Questions</Nav.Link>
            <Nav.Link href="community">Community</Nav.Link>
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
                <Dropdown.Item href="#/action-1">My Name</Dropdown.Item>
                <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
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
