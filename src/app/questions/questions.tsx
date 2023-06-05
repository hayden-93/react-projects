import styled from "styled-components";

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
`;

export function Questions() {
  return (
    <QuestionsContainer>
      <h2>Questions</h2>
    </QuestionsContainer>
  );
}
