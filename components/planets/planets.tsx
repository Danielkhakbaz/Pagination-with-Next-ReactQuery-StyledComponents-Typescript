import { useQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../../services/queries/index";
import Planet from "../planet/planet";

const Planets: React.FC = () => {
  const { data } = useQuery(["planets"], fetchPlanets);

  return (
    <>
      <h2>Planets</h2>
      {data?.results.map((planet: any) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </>
  );
};

export default Planets;
