import styled from "styled-components";
import Buttons from "../../components/buttons/buttons";

const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 50px;
  color: #ffff57;
  margin: 0;
  padding: 15px 0;
`;

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
