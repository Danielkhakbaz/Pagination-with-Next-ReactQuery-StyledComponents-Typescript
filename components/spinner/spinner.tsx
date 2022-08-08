import styled from "styled-components";

const LoadingSpinner = styled.div`
  @keyframes spinningButton {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 8rem;
  height: 8rem;
  animation: spinningButton 0.8s linear infinite;
  border: 0.4rem solid #ccc;
  border-top: 0.4rem solid #111827;
  border-radius: 50%;
  margin: 1.4rem auto;

  @media only screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    animation: spinningButton 0.8s linear infinite;
    border: 0.4rem solid #ccc;
    border-top: 0.4rem solid #111827;
    border-radius: 50%;
    margin: 1.4rem auto;
  }
`;

const Spinner: React.FC = () => {
  return (
    <>
      <LoadingSpinner />
    </>
  );
};

export default Spinner;
