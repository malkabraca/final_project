import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import RegisterCom from '../components/RegisterCom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validateRegisterSchema from '../validation/registerValidation';
import axios from 'axios';
import ROUTES from '../routes/ROUTES';
import { toast } from 'react-toastify';

const RegisterPage = ()=> {
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
        await axios.post("auth/users", {
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
        navigate(ROUTES.LOGIN);
      } catch (err) {
        toast.error("There is an error,"+""+err.response.data);
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
    console.log(inputState);
    console.log(keys);
  return (
    <Container>
    <Form>
      <Row className="mb-3">
      <Col xs={12} md={6}>
      {keys.map((item) => (
              <RegisterCom
                key={item}
                item={item}
                inputState={inputState}
                onChange={handleInputChange}
                inputsErrorState={inputsErrorState}
              />
            ))}
     </Col>  
      </Row>
      
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label></Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label></Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default RegisterPage;