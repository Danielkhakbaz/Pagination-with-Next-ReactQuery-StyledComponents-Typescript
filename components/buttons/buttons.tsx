import styled from "styled-components";
import { usePageAction } from "../../providers/page/page-context";
import { PageActions } from "../../providers/page/page-actions";

const Button = styled.button`
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

const Buttons: React.FC = () => {
  const { dispatch } = usePageAction();

  return (
    <>
      <Button
        onClick={() =>
          dispatch({ type: PageActions.CHANGE_PAGE, payload: "planets" })
        }>
        Planets
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: PageActions.CHANGE_PAGE, payload: "people" })
        }>
        People
      </Button>
    </>
  );
};

export default Buttons;
