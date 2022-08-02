import styled from "styled-components";
import { usePageAction } from "../../providers/page/page-context";
import { PageActions } from "../../providers/page/page-actions";

type ButtonsType = {
  planets?: boolean;
};

const Button = styled.button<ButtonsType>`
  font-size: 1.2rem;
  background: ${(props) => (props.planets ? "transparent" : "#ccc")};
  color: ${(props) => (props.planets ? "#ccc" : "#222")};
  border: 3px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px;
  padding: 10px;

  &:hover {
    background: ${(props) => (props.planets ? "#ccc" : "transparent")};
    color: ${(props) => (props.planets ? "#222" : "#ccc")};
  }
`;

const Buttons: React.FC = () => {
  const { dispatch } = usePageAction();

  return (
    <>
      <Button
        planets
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
