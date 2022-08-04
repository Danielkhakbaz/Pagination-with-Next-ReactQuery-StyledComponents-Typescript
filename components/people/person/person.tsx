import styled from "styled-components";
import { PersonType } from "../../../types/person";

type Props = {
  person: PersonType;
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

const Person: React.FC<Props> = ({ person }) => {
  return (
    <>
      <Card>
        <CardH3>{person.name}</CardH3>
        <CardParagraph>Gender - {person.gender}</CardParagraph>
        <CardParagraph>Birth Year - {person.birth_year}</CardParagraph>
      </Card>
    </>
  );
};

export default Person;
