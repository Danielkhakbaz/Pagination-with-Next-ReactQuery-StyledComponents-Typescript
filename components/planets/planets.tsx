import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner/spinner";
import Planet from "./planet/planet";
import { fetchPlanets } from "../../services/queries/index";
import { PlanetType } from "../../types/planet-type";
import { ButtonWrapper, Button } from "./planets.styled";

const Planets: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useQuery(["planets", page], fetchPlanets, {
    keepPreviousData: true,
  });

  return (
    <>
      <h2>Planets</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.results.map((planet: PlanetType) => (
            <Planet key={planet.name} planet={planet} />
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

export default Planets;
