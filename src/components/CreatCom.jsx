import { Button, Container } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const CreatCom = ({ canCreate }) => {
  const navigate = useNavigate();

  const btnCraet = () => {
    navigate(ROUTES.CREATE);
  };
  return (
    <Container>
      {canCreate ? (
        <Button variant="warning" onClick={btnCraet}>
          +
        </Button>
      ) : (
        " "
      )}
    </Container>
  );
};

export default CreatCom;
