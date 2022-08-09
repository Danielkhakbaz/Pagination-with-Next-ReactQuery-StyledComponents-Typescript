import { PersonType } from "../../../types/person-type";
import { Card, CardH3, CardParagraph } from "./person.styled";

type Props = {
  person: PersonType;
};

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
