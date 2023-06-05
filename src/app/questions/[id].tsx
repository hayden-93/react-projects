import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Card } from "../components/Card/Card";
import { Question } from "./page";

const QuestionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
`;

function QuestionDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
      );
      const result = await data.json();

      if (result) {
        setQuestion(result.items[0]);
        setLoading(false);
      }
    }
    id && fetchData();
  }, [id]);

  return (
    <QuestionDetailContainer>
      {loading ? (
        <span>Loading...</span>
      ) : question ? (
        <Card
          title={question.title}
          views={question.view_count}
          answers={question.answer_count}
        />
      ) : null}
    </QuestionDetailContainer>
  );
}

export default QuestionDetailPage;
