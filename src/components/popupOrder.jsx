import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateOrders from "../validation/orderValidtion";
import ROUTES from "../routes/ROUTES";
import popuoFrom from "../components/popuoFrom";
import PopuoFrom from "../components/popuoFrom";

const PopupExample = () => {
  const [inputState, setInputState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    takeAway: false,
    // isBusiness: false,
  });
  // console.log(inputState);
  const [inputsErrorState, setInputsErrorState] = useState(null);
  // console.log(inputsErrorState);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
 
  let OrderNumber;

  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateOrders(inputState);
      setInputsErrorState(joiResponse);

      if (joiResponse) {
        console.log(joiResponse);
        toast.error("Invalid user information");
        return;
      }
      // if (inputState.isBusiness === "") {
      //   inputState.isBusiness = false;
      // }
      if (inputState.takeAway === "") {
        inputState.takeAway = false;
      }
      await axios.post("/orders", {
        name: inputState.name,
        phone: inputState.phone,
        email: inputState.email,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        isBusiness: inputState.isBusiness,
        takeAway: inputState.takeAway,
      });
      toast.success("The registration was done successfully");
      handleClose();
      navigate(ROUTES.MENU); 
    } catch (err) {
      console.log(err);
      toast.error("Invalid user information");
    }
  };
  const handleInputChange = (ev) => {
    // console.log(ev.target.value);
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateOrders(newInputState);
    setInputsErrorState(joiResponse);
  };
  const handleTakeAwayChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["takeAway"] = ev.target.checked;
    setInputState(newInputState);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const keys = Object.keys(inputState);

  return (
    <div>
      <Button variant="warning" onClick={handleShow} className="buttonhome">
        Click to order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colinput">
          <Modal.Title>my order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {keys.map((item) => (
            <PopuoFrom
              key={item}
              item={item}
              inputState={inputState}
              onChange={handleInputChange}
              inputsErrorState={inputsErrorState}
            />
          ))}
          <Form.Group className="mb-3" id="takeAway">
            <Form.Check
              type="checkbox"
              label="takeAway"
              value={inputState.takeAway}
              color="warning"
              onClick={handleTakeAwayChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handeleBtnClick}
            className="colinput"
          >
            orders
          </Button>
          <Button
            variant="warning"
            type="submit"
            onClick={handleClose}
            className="colinput"
          >
            Cansel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopupExample;