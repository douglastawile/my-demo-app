import React from "react";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    id: 1,
    title: "How do I differentiate instruction for struggling learners?",
    author: "Sarah Johnson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...",
    answers: [
      {
        content: "Try using smaller group work arrangements...",
        author: "Mark Davis",
      },
    ],
  },

  {
    id: 2,
    title: "How do I differentiate instruction for struggling learners?",
    author: "Sarah Johnson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis...",
    answers: [
      {
        content: "Try using smaller group work arrangements...",
        author: "Mark Davis",
      },
    ],
  },
];

export default function QuestionForum() {
  return (
    <>
      {questions.map((question) => (
        <QuestionCard key={question.id} questionData={question} />
      ))}
    </>
  );
}
