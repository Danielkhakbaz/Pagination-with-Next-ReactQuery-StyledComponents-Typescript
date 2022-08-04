import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../services/queries";
import Person from "../person/person";

const People: React.FC = () => {
  const { data } = useQuery(["people"], fetchPeople);

  return (
    <>
      <h2>People</h2>
      {data?.results.map((person: any) => (
        <Person key={person.name} person={person} />
      ))}
    </>
  );
};

export default People;
