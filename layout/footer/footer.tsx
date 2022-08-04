import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 10%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0;
`;
const LinkAnchor = styled.a`
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
      <Wrapper>
        <Link href="/" passHref>
          <LinkAnchor>Terms</LinkAnchor>
        </Link>
        <Link href="/" passHref>
          <LinkAnchor>Privacy Policy</LinkAnchor>
        </Link>
        <Link href="/" passHref>
          <LinkAnchor>Github</LinkAnchor>
        </Link>
        <Link href="/I-DONT-KNOW-WHERE-YOU-ARE" passHref>
          <LinkAnchor>404</LinkAnchor>
        </Link>
      </Wrapper>
    </>
  );
};

export default Footer;
