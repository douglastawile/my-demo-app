/* eslint-disable react/prop-types */
const QuestionAnswers = ({ answers }) => {
  return (
    <div className="mt-3">
      <h6>Answers:</h6>
      {answers.map((answer) => (
        <div key={answer.author} className="answer mb-2">
          <p>{answer.content}</p>
          <small className="text-muted">By {answer.author}</small>
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswers;
