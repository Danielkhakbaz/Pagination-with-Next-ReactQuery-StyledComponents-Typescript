import styled from "styled-components";
import Buttons from "../../components/buttons/buttons";

const API = styled.h1`
  font-size: 50px;
  color: #ffff57;
  margin: 0;
  padding: 15px 0;
`;
const BTNS = styled.div`
  text-align: center;
`;

const Navbar: React.FC = () => {
  return (
    <>
      <BTNS>
        <API>Star Wars API</API>
        <Buttons />
      </BTNS>
    </>
  );
};

export default Navbar;
