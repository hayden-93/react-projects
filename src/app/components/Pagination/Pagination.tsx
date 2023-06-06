import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled.div`
  padding: 2%;
  margin: 1%;
  background: orange;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

export function Pagination({ currentPage, hasMore }: any) {
  return (
    <PaginationContainer>
      <Link href={`?page=${parseInt(currentPage) - 1}`}>
        <PaginationLink>Previous</PaginationLink>
      </Link>
      <Link href={`?page=${parseInt(currentPage) + 1}`}>
        <PaginationLink>Next</PaginationLink>
      </Link>
    </PaginationContainer>
  );
}
