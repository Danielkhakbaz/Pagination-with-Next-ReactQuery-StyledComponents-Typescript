import Link from "next/link";
import styled from "styled-components";

const Main = styled.footer`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0;
`;

const LinkStyle = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &: hover {
    color: gray;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <Main>
        <Link href="/">
          <LinkStyle>Terms</LinkStyle>
        </Link>
        <Link href="/">
          <LinkStyle>Privacy Policy</LinkStyle>
        </Link>
        <Link href="/">
          <LinkStyle>Github</LinkStyle>
        </Link>
        <Link href="/I-DONT-KNOW-WHERE-YOU-ARE">
          <LinkStyle>404</LinkStyle>
        </Link>
      </Main>
    </>
  );
};

export default Footer;
