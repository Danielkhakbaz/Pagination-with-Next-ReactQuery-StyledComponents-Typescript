import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner/spinner";
import Person from "./person/person";
import { fetchPeople } from "../../services/queries";
import { PersonType } from "../../types/person-type";
import { ButtonWrapper, Button } from "./people.styled";

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
