import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  font-family: sans-serif;
  background: #222;
  color: #ddd;
  text-align: center;
  margin: 0;
`;

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
