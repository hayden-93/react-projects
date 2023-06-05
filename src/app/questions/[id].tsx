import { useRouter } from "next/router";
import styled from "styled-components";

const QuestionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
`;

function QuestionDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <QuestionDetailContainer>
      <h2>Question: {id}</h2>
    </QuestionDetailContainer>
  );
}

export default QuestionDetailPage;
