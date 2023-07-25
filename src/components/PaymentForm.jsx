// import React, { useState } from "react";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
// import validatePaymentSchema from "../validation/paymentValidation";
// import Form from "react-bootstrap/Form";
// import { Alert, Col, FloatingLabel, Row } from "react-bootstrap";

// const PaymentForm = () => {
//   const [state, setState] = useState({
//     number: "",
//     expiry: "",
//     cvc: "",
//     name: "",
//     focus: "",
//   });
//   const [inputsErrorState, setInputsErrorState] = useState(null);
//   console.log("inputsErrorState", inputsErrorState);
//   // newInputState[ev.target.id] = ev.target.value;
//   // setState(newInputState);

//   const handleInputChange = (evt) => {
//     //matargel
//     // const { name, value } = evt.target;
//     // setState(prev => {
//     //   const newState = { ...prev, [name]: value };
//     //   const newjoiResponse = validatePaymentSchema(newState);
//     //   if (Object.values(newjoiResponse).some(x => x.length > 0)) {
//     //     setInputsErrorState(newjoiResponse);
//     //     return prev;
//     //   }
//     //   return newState;
//     // })
//     console.log("poo");
//     console.log("number",typeof state.number);
//     const { name, value } = evt.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//     const newjoiResponse = validatePaymentSchema(state);
//     setInputsErrorState(newjoiResponse);
//   };

//   const handleInputFocus = (evt) => {
//     setState((prev) => ({ ...prev, focus: evt.target.name }));
//   };

//   return (
//     <div className="paymentCard">
//       <h1 className="title">Payment</h1>
//       <Cards
//         number={state.number}
//         expiry={state.expiry}
//         cvc={state.cvc}
//         name={state.name}
//         focused={state.focus}
//       />

//       <Form>
//         <Col xs={12} md={{ span: 6, offset: 3 }}>
//           <Row className="mb-3">
//             <Form.Group>
//               <FloatingLabel
//                 label="Card Number"
//                 controlid="floatingInput"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   className="paymentForm"
//                 //   type="number"
//                   name="number"
//                   placeholder="Card Number"
//                   value={state.number}
//                   onChange={handleInputChange}
//                   onFocus={handleInputFocus}
//                 />
//                 {inputsErrorState && inputsErrorState.number && (
//                   <Alert type="invalid">
//                     {inputsErrorState.number.map((item) => (
//                       <div key={"number-errors" + item}>{item}</div>
//                     ))}
//                   </Alert>
//                 )}
//               </FloatingLabel>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group>
//               <FloatingLabel
//                 label="Card expiry"
//                 controlid="floatingInput"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   className="paymentForm"
//                   type="number"
//                   name="expiry"
//                   placeholder="Card expiry"
//                   value={state.expiry}
//                   onChange={handleInputChange}
//                   onFocus={handleInputFocus}
//                 />
//                 {inputsErrorState && inputsErrorState.expiry && (
//                   <Alert type="invalid">
//                     {inputsErrorState.expiry.map((item) => (
//                       <div key={"expiry-errors" + item}>{item}</div>
//                     ))}
//                   </Alert>
//                 )}
//               </FloatingLabel>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group>
//               <FloatingLabel
//                 label="Card cvc"
//                 controlid="floatingInput"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   className="paymentForm"
//                   type="string"
//                   name="cvc"
//                   placeholder="Card cvc"
//                   value={state.cvc}
//                   onChange={handleInputChange}
//                   onFocus={handleInputFocus}
//                 />
//                 {inputsErrorState && inputsErrorState.cvc && (
//                   <Alert type="invalid">
//                     {inputsErrorState.cvc.map((item) => (
//                       <div key={"cvc-errors" + item}>{item}</div>
//                     ))}
//                   </Alert>
//                 )}
//               </FloatingLabel>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group>
//               <FloatingLabel
//                 label="Card name"
//                 controlid="floatingInput"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   className="paymentForm"
//                   type="focus"
//                   name="name"
//                   placeholder="Card name"
//                   value={state.name}
//                   onChange={handleInputChange}
//                   onFocus={handleInputFocus}
//                 />
//                 {inputsErrorState && inputsErrorState.name && (
//                   <Alert type="invalid">
//                     {inputsErrorState.name.map((item) => (
//                       <div key={"name-errors" + item}>{item}</div>
//                     ))}
//                   </Alert>
//                 )}
//               </FloatingLabel>
//             </Form.Group>
//           </Row>
//         </Col>
//       </Form>
//     </div>
//   );
// };

// export default PaymentForm;

import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
    numberError: null,
    expiryError: null,
    nameError: null,
    cvcError:null,
  });
  console.log(state);
  const [orderId, setOrderId] = useState({});

  const id = jwt_decode(localStorage.token)._id;

  useEffect(() => {
    const withdrawalOfOrderId = async () => {
      try {
        const order = await axios.get("/orders/my-order-findOne/" + id);
        setOrderId(order.data);
      } catch (err) {
        toast.error(err.response._id);
      }
    };
    withdrawalOfOrderId();
  }, []);

  const handelButtonPay = async () => {
    try {
      await axios.patch("/orders/orderStatus/" + orderId);
      toast.success("An order is currently in the works");
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data);
    }
  };

  const validateCVV = (value) => {
    if (value.length !== 3) {
      setState((prev) => ({
        ...prev,
        cvc: value.substring(0, 3),
        cvcError: "cvc must contain 3 numbers",
      }));
    } else {
      setState((prev) => ({ ...prev, cvc: value, cvcError: "" }));
    }
  };

  const validateCardNumber = (value) => {
    if (value.length < 14 || value.length > 16) {
      setState((prev) => ({
        ...prev,
        number: value.substring(0, 16),
        numberError: "Card number must be between 14 and 16 digits",
      }));
    } else {
      setState((prev) => ({ ...prev, number: value, numberError: "" }));
    }
  };

  const validateExpiration = (value) => {
    const formattedValue = value.replace(/\D/g, "").substring(0, 4);
    if (formattedValue.length !== 4) {
      setState((prev) => ({
        ...prev,
        expiry: formattedValue,
        expiryError: "Invalid expiration date",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        expiry: formattedValue,
        expiryError: "",
      }));
    }
  };

  const validateName = (value) => {
    if (value.length > 16) {
      setState((prev) => ({
        ...prev,
        name: value.substring(1, 16),
        nameError: "Name can't exceed 16 characters",
      }));
    } else {
      setState((prev) => ({ ...prev, name: value, nameError: "" }));
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));

    if (name === "cvc") {
      validateCVV(value);
    }
    if (name === "number") {
      validateCardNumber(value);
    }
    if (name === "expiry") {
      validateExpiration(value);
    }
    if (name === "name") {
      validateName(value);
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <Container>
      <h1 className="title">Payment</h1>
      <div className="paymentCard">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <input
            className="paymentForm"
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.numberError && <p className="error">{state.numberError}</p>}
        </form>
        <form>
          <input
            className="paymentForm"
            type="number"
            name="expiry"
            placeholder="Card expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.expiryError && <p className="error">{state.expiryError}</p>}
        </form>
        <form>
          <input
            className="paymentForm"
            type="number"
            name="cvc"
            placeholder="Card cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.cvcError && <p className="error">{state.cvcError}</p>}
        </form>
        <form>
          <input
            className="paymentForm"
            type="focus"
            name="name"
            placeholder="Card name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.nameError && <p className="error">{state.nameError}</p>}
        </form>
      </div>
      <Button
        className="buttonPay"
        variant="warning"
        onClick={handelButtonPay}
        // disabled={
        //   state.expiryError ||
        //   state.nameError ||
        //   state.numberError ||
        //   state.cvcError !== ""
        // }
        disabled={state.nameError === null || state.expiryError === null || state.numberError === null || state.cvcError === null}
        
      >
        Pay
      </Button>
    </Container>
  );
};

export default PaymentForm;
