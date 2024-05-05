import React from "react";
import QuestionForm from "./QuestionForm";
import { Col, Container, Row } from "react-bootstrap";
import QuestionForum from "./QuestionForum";

export default function QuestionForumPage() {
  return (
    <Container>
      <Row>
        <Col md={7} xs={12} className="mx-auto my-4">
          <QuestionForm />
          <QuestionForum />
        </Col>
      </Row>
    </Container>
  );
}
