"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { Card } from "../components/Card/Card";

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

export interface Question {
  question_id: number;
  title: string;
  view_count: number;
  answer_count: number;
}

function QuestionsPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.stackexchange.com/2.2/questions?${
          page ? `page=${page}&` : ""
        }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
      );
      const result = await data.json();
      console.log(result);

      if (result) {
        setQuestions(result.items);
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <QuestionsContainer>
      <h2>Questions</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          {questions.map((question) => (
            <Link
              key={question.question_id}
              href={`/questions/${question.question_id}`}
              passHref
            >
              <CardLink key={question.question_id}>
                <Card
                  title={question.title}
                  views={question.view_count}
                  answers={question.answer_count}
                />
              </CardLink>
            </Link>
          ))}
        </div>
      )}
    </QuestionsContainer>
  );
}

export default QuestionsPage;
