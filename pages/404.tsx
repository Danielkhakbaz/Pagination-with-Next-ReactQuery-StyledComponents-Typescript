import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

type TitleProps = {
  secondary?: boolean;
};

const Main = styled.main`
  min-height: 100%;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;
const Title = styled.strong<TitleProps>`
  font-size: ${({ secondary }) => (secondary ? "3.75rem" : "2rem")};
  line-height: 1;
`;
const HomeButton = styled.button`
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
`;

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 | Pagination App</title>
      </Head>

      <Main>
        <Title>Oops!</Title>
        <Title secondary>404 - Page not found!</Title>
        <Link href="/">
          <HomeButton>
            <span>Back to home</span>
          </HomeButton>
        </Link>
      </Main>
    </>
  );
};

export default NotFound;
