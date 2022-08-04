import styled from "styled-components";
import { PlanetType } from "../../../types/planet";
import { numberWithCommas } from "../../../utils/numberDivider";

type Props = {
  planet: PlanetType;
};

const Card = styled.div`
  background: #1b1b1b;
  border-radius: 20px;
  margin: 16px 0;
  padding: 8px 16px;
`;
const CardH3 = styled.h3`
  color: #ffff57;
`;
const CardParagraph = styled.p`
  color: #999;
  margin: 6px 0;
`;

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
