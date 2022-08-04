import { useQuery } from "@tanstack/react-query";
import Planet from "./planet/planet";
import { fetchPlanets } from "../../services/queries/index";
import { PlanetType } from "../../types/planet";

const Planets: React.FC = () => {
  const { data } = useQuery(["planets"], fetchPlanets);

  return (
    <>
      <h2>Planets</h2>
      {data?.results.map((planet: PlanetType) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </>
  );
};

export default Planets;
