import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.2rem;
  background: transparent;
  color: #ccc;
  border: 3px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px;
  padding: 10px;

  &:focus {
    background: #ccc;
    color: #222;
  }
`;
