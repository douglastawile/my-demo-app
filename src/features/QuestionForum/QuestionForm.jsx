import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const QuestionForm = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rudimentary validation (expand as needed)
    if (!questionTitle.trim() || !questionContent.trim()) {
      alert("Please fill in both the title and content of your question.");
      return; // Stop submission if invalid
    }

    const questionData = { title: questionTitle, content: questionContent };

    // Placeholder for future backend integration
    console.log("Question Submission:", questionData);

    // Clear the form fields (optional)
    setQuestionTitle("");
    setQuestionContent("");
  };

  return (
    <>
      <h3 className="mb-3">Ask a Question</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="questionTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Summarize your question here"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="questionContent" className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Explain your question in detail"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ask Question
        </Button>
      </Form>
    </>
  );
};

export default QuestionForm;
