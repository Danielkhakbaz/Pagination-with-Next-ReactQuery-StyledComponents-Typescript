import { usePageAction } from "../../providers/page/page-context";
import { PageActions } from "../../providers/page/page-actions";
import { Button } from "./buttons.styled";

const Buttons: React.FC = () => {
  const { dispatch } = usePageAction();

  return (
    <>
      <Button
        onClick={() =>
          dispatch({ type: PageActions.CHANGE_CONTENT, payload: "planets" })
        }>
        Planets
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: PageActions.CHANGE_CONTENT, payload: "people" })
        }>
        People
      </Button>
    </>
  );
};

export default Buttons;
