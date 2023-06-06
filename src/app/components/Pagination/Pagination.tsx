import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface PaginationLinkProps {
  disabled?: boolean;
}

const PaginationLink = styled.a<PaginationLinkProps>`
  padding: 2%;
  margin: 1%;
  background: ${(props) => (!props.disabled ? "orange" : "lightgray")};
  pointer-events: ${(props) => (!props.disabled ? "all" : "none")};
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

export function Pagination({ currentPage, hasMore }: any) {
  return (
    <PaginationContainer>
      <Link href={`?page=${parseInt(currentPage) - 1}`}>
        <PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
      </Link>
      <Link href={`?page=${parseInt(currentPage) + 1}`}>
        <PaginationLink disabled={!hasMore}>Next</PaginationLink>
      </Link>
    </PaginationContainer>
  );
}
