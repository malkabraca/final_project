import { Container, FloatingLabel, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MyOrderCom from "../components/MyOrderCom";

const MyOrder = () => {
  const [order, setOrder] = useState(null);
  //   const [keys, setkeys] = useState(null);
  const navigate = useNavigate();
  const id = jwt_decode(localStorage.token)._id;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("orders/my-allorder-findOne/" + id);
        let order = {
          ...data,
        };
        delete order._id;
        delete order.user_id;
        delete order.createdAt;
        delete order.__v;
        delete order.menuOrder;
        setOrder(order);
        console.log("order", order);
        // const keys = Object.keys(order);
        // setkeys(keys);
      } catch (err) {
        toast.error(err.response._id);
      }
    })();
  }, [id]);

  if (!order) {
    // navigate(ROUTES.HOME);
    return <Spinner animation="border" role="status"></Spinner>;
  }

  const handleCancelBtnClick = (ev) => {
    navigate(ROUTES.HOME);
  };
  const keys = Object.keys(order);
  console.log("keys", keys);
  //   console.log("order", order);
  return (
    <Container>
      <h1 className="title">My Order</h1>
      {keys.length === 0 ? <h1 className="titelNoOrder">There is no order</h1> : ""}
      <Col md={{ span: 6, offset: 3 }} xs={12}>
        <Row className="mb-3">
          {keys.map((item) => (
            <MyOrderCom key={item} item={item} order={order} />
          ))}
         {keys.length !== 0 ? (<Col xs={12} md={6}>
            <Form.Group as={Col} controlid={"orderStatus"}>
              <Form.Label
                className="textMyOrder"
                controlid="floatingInput"
                label={"order Status"}
                // className="mb-3"
              >
                order Status
              </Form.Label>
              <Col sm={10}>
                {/* <Form.Control type={orderStatus} placeholder={orderStatus} /> */}
                <Form.Control
                  name={"orderStatus"}
                  id={"orderStatus"}
                  type={"orderStatus"}
                  className="colinput"
                  value={order.orderStatus ? "Ready Order" : "Working Order"}
                  readOnly
                  style={{
                    color: order.orderStatus ? "rgb(252, 215, 94)" : "black",
                  }}
                />
              </Col>
            </Form.Group>
          </Col>):("")}
          {keys.length !== 0 ? ( <Form.Check
            className="CheckMyOrder"
            type={"checkbox"}
            id={"takeAway"}
            label="Take Away"
            defaultChecked={order.takeAway}
          />):("")}
        </Row>
        <Row className="mb-3">
          <Button
            variant="warning"
            type="submit"
            onClick={handleCancelBtnClick}
            className="colinput"
          >
            GO TO HOME PAGE
          </Button>
        </Row>
      </Col>
    </Container>
  );
};
export default MyOrder;

{
  /* <Form>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={2}>
    Email
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="email" placeholder="Email" />
  </Col>
</Form.Group>

<Form.Group
  as={Row}
  className="mb-3"
  controlId="formHorizontalPassword"
>
  <Form.Label column sm={2}>
    Password
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="password" placeholder="Password" />
  </Col>
</Form.Group>
<fieldset>
  <Form.Group as={Row} className="mb-3">
    <Form.Label as="legend" column sm={2}>
      Radios
    </Form.Label>
    <Col sm={10}>
      <Form.Check
        type="radio"
        label="first radio"
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
      />
      <Form.Check
        type="radio"
        label="second radio"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      />
      <Form.Check
        type="radio"
        label="third radio"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      />
    </Col>
  </Form.Group>
</fieldset>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
  <Col sm={{ span: 10, offset: 2 }}>
    <Form.Check label="Remember me" />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Col sm={{ span: 10, offset: 2 }}>
    <Button type="submit">Sign in</Button>
  </Col>
</Form.Group>
</Form> */
}
