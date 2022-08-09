import styled from "styled-components";

export const LoadingSpinner = styled.div`
  width: 8rem;
  height: 8rem;
  animation: spinningButton 0.8s linear infinite;
  border: 0.4rem solid #ccc;
  border-top: 0.4rem solid #1b1b1b;
  border-radius: 50%;
  margin: 1.4rem auto;

  @keyframes spinningButton {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    animation: spinningButton 0.8s linear infinite;
    border: 0.4rem solid #ccc;
    border-top: 0.4rem solid #1b1b1b;
    border-radius: 50%;
    margin: 1.4rem auto;
  }
`;
