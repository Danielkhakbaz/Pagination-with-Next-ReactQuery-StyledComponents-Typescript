import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Person from "./person/person";
import Spinner from "../spinner/spinner";
import { fetchPeople } from "../../services/queries";
import { PersonType } from "../../types/person";

const ButtonWrapper = styled.div`
  min-height: 60px;
  text-align: center;
  padding: 10px 0;
`;
const Button = styled.button`
  font-size: 0.75rem;
  background: #ccc;
  border: 3px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px;
  padding: 10px;

  &:active {
    background: transparent;
    color: #ccc;
  }
`;

const People: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useQuery(["people", page], fetchPeople, {
    keepPreviousData: true,
  });

  return (
    <>
      <h2>People</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.results.map((person: PersonType) => (
            <Person key={person.name} person={person} />
          ))}
        </>
      )}
      <ButtonWrapper>
        <Button
          onClick={() => setPage((pageNumber) => Math.max(pageNumber - 1, 1))}
          disabled={page === 1}>
          Previous Page
        </Button>
        <span>{page}</span>
        <Button
          onClick={() =>
            setPage((pageNumber) =>
              !data || !data.next ? pageNumber : pageNumber + 1
            )
          }
          disabled={!data || !data.next}>
          Next Page
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default People;
