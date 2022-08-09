import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Wrapper, Main } from "./layout.styled";

type Props = {
  children: React.ReactNode;
};

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
