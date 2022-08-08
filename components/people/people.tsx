import { useQuery } from "@tanstack/react-query";
import Person from "./person/person";
import Spinner from "../spinner/spinner";
import { fetchPeople } from "../../services/queries";
import { PersonType } from "../../types/person";

const People: React.FC = () => {
  const { data } = useQuery(["people"], fetchPeople);

  return (
    <>
      <h2>People</h2>
      {data ? (
        data.results.map((person: PersonType) => (
          <Person key={person.name} person={person} />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default People;
