import { PlanetType } from "../../../types/planet-type";
import { numberWithCommas } from "../../../utils/numberDivider";
import { Card, CardH3, CardParagraph } from "../../people/person/person.styled";

type Props = {
  planet: PlanetType;
};

const Planet: React.FC<Props> = ({ planet }) => {
  return (
    <>
      <Card>
        <CardH3>{planet.name}</CardH3>
        <CardParagraph>
          Population - {numberWithCommas(planet.population)}
        </CardParagraph>
        <CardParagraph>Terrain - {planet.terrain}</CardParagraph>
      </Card>
    </>
  );
};

export default Planet;
