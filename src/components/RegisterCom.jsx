import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const RequiredF = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "password",
  "city",
  "street",
  "houseNumber",
];

const RegisterCom = (item,inputState,inputsErrorState,onChange) => {
  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col} controlId={item}>
        <Form.Label></Form.Label>
        {/* <Form.Control type={item} placeholder={item} /> */}
        <Form.Control 
         required
        name={item}
        fullWidth
        id={item}
        type={item}
        // label={item}
        placeholder={item}
        value={inputState ? inputState[item] : ""}
        onChange={onChange}/>
      </Form.Group>
    </Col>
  );
};
export default RegisterCom