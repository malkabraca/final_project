import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import RegisterCom from "../components/RegisterCom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateRegisterSchema from "../validation/registerValidation";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    imageAlt: "",
    phone: "",
    email: "",
    password: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    biz: false,
  });
  const [inputsErrorState, setinputsErrorState] = useState([]);
  const navigate = useNavigate();
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setinputsErrorState(joiResponse);

      if (joiResponse) {
        return;
      }
      // if (inputState.zipCode == "") {
      //   inputState.zipCode = null;
      // }
      await axios.post("/users", {
        firstName: inputState.firstName,
        lastName: inputState.lastName,
        phone: inputState.phone,
        email: inputState.email,
        password: inputState.password,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        zipCode: inputState.zipCode,
        biz: inputState.biz,
      });
      // navigate(ROUTES.LOGIN);
    } catch (err) {
      toast.error("There is an error," + "" + err.response.data);
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateRegisterSchema(newInputState);
    setinputsErrorState(joiResponse);
  };
  const handleBizChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["biz"] = ev.target.checked;
    setInputState(newInputState);
  };
  // const resetForm = () => {
  //   let newInputState = JSON.parse(JSON.stringify(inputState));
  //   newInputState = {
  //     imageUrl: "",
  //     imageAlt: "",
  //     firstName: "",
  //     middleName: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     password: "",
  //     state: "",
  //     country: "",
  //     city: "",
  //     street: "",
  //     houseNumber: "",
  //     zipCode: "",
  //     biz: false,
  //   };
  //   setInputState(newInputState);
  //   const joiResponse = validateRegisterSchema(inputState);
  //   if (!joiResponse) {
  //     return;
  //   }
  //   let newjoiResponse = JSON.parse(JSON.stringify(joiResponse));
  //   Object.keys(newjoiResponse).forEach((index) => {
  //     newjoiResponse[index] = "";
  //   });
  //   setinputsErrorState(newjoiResponse);
  // };
  const keys = Object.keys(inputState);

  return (
    <Container>
      <h1>register</h1>
      <Form>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Row className="mb-3">
            {keys.map((item) => (
              <RegisterCom
                key={item}
                item={item}
                inputState={inputState}
                onChange={handleInputChange}
                inputsErrorState={inputsErrorState}
              />
            ))}
          </Row>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              id="biz"
              label="I want to receive updates and exclusive offers, plus a 5% discount on every order"
              onClick={handleBizChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Button variant="primary" type="submit" href={ROUTES.HOME}>
              CANCEL
            </Button>
          </Row>
          <Row className="mb-3">
            <Button
              variant="primary"
              type="submit"
              onClick={handeleBtnClick}
              disabled={inputsErrorState !== null}
            >
              Sign Up
            </Button>
          </Row>
        </Col>
      </Form>
    </Container>
  );
};

export default RegisterPage;
