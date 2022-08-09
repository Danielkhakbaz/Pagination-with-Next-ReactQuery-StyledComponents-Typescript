import styled from "styled-components";

export const ButtonWrapper = styled.div`
  min-height: 60px;
  text-align: center;
  padding: 10px 0;
`;

export const Button = styled.button`
  font-size: 0.75rem;
  background: #ccc;
  border: 3px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px;
  padding: 10px;

  &:active {
    background: transparent;
    color: #ccc;
  }
`;
