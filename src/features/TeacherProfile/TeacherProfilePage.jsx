import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import defaultPhoto from "../../assets/default.png";
import { Container } from "react-bootstrap";
import ProfileTabs from "./ProfileTabs";

export default function TeacherProfilePage() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7}>
          <Card className="shadow-sm my-2">
            <Card.Body>
              <div className="d-flex justify-content-between text-muted my-2 mx-2">
                <span>50 Following</span>
                <span>100 Followers</span>
              </div>

              <Image
                src={defaultPhoto}
                alt="Profile"
                roundedCircle
                className="img-fluid d-block mx-auto w-50 h-50"
              />

              <Card.Title className="text-center mt-3">
                Queeny Takyi Ansah
              </Card.Title>
              <Link className="float-end my-2 btn btn-success btn-sm rounded-4 shadow-lg">
                Edit Profile
              </Link>
              <Card.Subtitle className="text-center text-muted mb-2">
                Math Teacher
              </Card.Subtitle>

              {/* Stats Row -  You might want to visually adjust this */}
              {/* <Row className="mt-3">
                <Col className="text-center">10 Posts</Col>
                <Col className="text-center">50 Following</Col>
                <Col className="text-center">20 Followers</Col>
              </Row> */}
            </Card.Body>
            <Card.Footer className="text-muted">
              <ProfileTabs />
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="shadow-sm my-2">
            <Card.Body>
              <Card.Title className="text-center">About</Card.Title>
              <Card.Text className="text-muted">
                Queeny Takyi Ansah is a Math Teacher with 5+ years of
                experience. She is passionate about teaching and helping
                students achieve their goals. She is a certified teacher and has
                a strong background in teaching mathematics. She is a member of
                the Math Society and is a member of the Math Club.
              </Card.Text>
              <Card.Text className="text-muted">
                <strong>Email</strong>: queenyansah@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
