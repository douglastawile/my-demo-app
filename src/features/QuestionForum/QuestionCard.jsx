/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import QuestionAnswers from "./QuestionAnswer";

const QuestionCard = ({ questionData }) => {
  const [showFullDetail, setShowFullDetail] = useState(false);

  const toggleDetail = () => setShowFullDetail(!showFullDetail);

  return (
    <Card className="my-3 shadow-lg rounded-2">
      <Card.Body>
        <Card.Title as="h5">{questionData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By {questionData.author}
        </Card.Subtitle>

        {/* Adjust truncation if needed */}
        {showFullDetail ? (
          <>
            <Card.Text>{questionData.content}</Card.Text>
            <QuestionAnswers answers={questionData.answers} />
          </>
        ) : (
          <Card.Text>{questionData.content.substring(0, 100)}...</Card.Text>
        )}

        <Button variant="link" onClick={toggleDetail}>
          {showFullDetail ? "Show Less" : "Read More"}
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Asked on January 9, 2023</Card.Footer>
    </Card>
  );
};

export default QuestionCard;
