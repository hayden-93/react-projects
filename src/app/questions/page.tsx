"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../components/Card/Card";

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
`;

interface Question {
  question_id: number;
  title: string;
  view_count: number;
  answer_count: number;
}

function QuestionsPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow"
      );
      const result = await data.json();

      if (result) {
        setQuestions(result.items);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <QuestionsContainer>
      <h2>Questions</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          {questions.map((question) => (
            <Card
              key={question.question_id}
              title={question.title}
              views={question.view_count}
              answers={question.answer_count}
            />
          ))}
        </div>
      )}
    </QuestionsContainer>
  );
}

export default QuestionsPage;
