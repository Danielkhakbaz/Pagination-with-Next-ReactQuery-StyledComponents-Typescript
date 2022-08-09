import styled from "styled-components";

export const Wrapper = styled.footer`
  height: 10%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0;
`;

export const LinkAnchor = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &: hover {
    color: gray;
  }
`;
