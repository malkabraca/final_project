import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";



const PaymentForm=()=> {
    return (
        <Form>
             <Col md={{ span: 6, offset: 3 }} xs={12}>
             <Row>
            <Col>
              <Form.Group controlId="information">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="This field cannot be edited"
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tz">
                <Form.Label>T.Z.</Form.Label>
                <Form.Control type="text" placeholder="Enter your T.Z." />
              </Form.Group>
            </Col>
          </Row>
    
          <Row>
            <Col>
              <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your card number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="expiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
            </Col>
          </Row>
    
          <Row>
            <Col>
              <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" placeholder="Enter your CVV" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="totalPayment">
                <Form.Label>Total for payment</Form.Label>
                <Form.Control type="text" placeholder="Enter the total amount" />
              </Form.Group>
            </Col>
          </Row>
    
          <Button variant="primary" type="submit">
            Pay
          </Button>
          </Col>
        </Form>
      );
    }
  export default PaymentForm;