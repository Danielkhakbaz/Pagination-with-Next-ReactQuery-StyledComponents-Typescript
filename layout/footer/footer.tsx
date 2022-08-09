import Link from "next/link";
import { Wrapper, LinkAnchor } from "./footer.styled";

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
