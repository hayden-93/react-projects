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

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

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
    </QuestionsContainer>
  );
}
