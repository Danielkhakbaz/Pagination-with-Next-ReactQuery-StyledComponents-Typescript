import Buttons from "../../components/buttons/buttons";
import { Wrapper, Title } from "./navbar.styled";

const Navbar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Star Wars API</Title>
        <Buttons />
      </Wrapper>
    </>
  );
};

export default Navbar;
